'use strict';

const humanizeduration = require('humanize-duration');
const huminizeoptions = {
    language: 'de',
    conjunction: ' und ',
    serialComma: false
};

const types = require('./types');

function createFirmwareString(buf) {
    let firmware = '';
    for (const key in buf) {
        if ({}.hasOwnProperty.call(buf, key)) {
            firmware += (buf[key] === 0) ? '' : String.fromCharCode(buf[key]);
        }
    }
    return firmware;
}

function int2ipAddress(value) {
    const part1 = value & 255;
    const part2 = ((value >> 8) & 255);
    const part3 = ((value >> 16) & 255);
    const part4 = ((value >> 24) & 255);
    return part4 + '.' + part3 + '.' + part2 + '.' + part1;
}

function createStateString(values) {
    let stateStr = '';
    const state1 = values[117];
    const state2 = values[118];
    const duration = values[120];

    // Text aus Define
    if (types.stateMessages.hasOwnProperty(state1)) {
        stateStr = types.stateMessages[state1];
        if (state2 === 0 || state2 === 2) {
            stateStr += ' seit ';
        } else if (state2 === 1) {
            stateStr += ' in ';
        }

        // Sonderbehandlung bei WP-Fehlern - Zeitstempel des zuletzt aufgetretenen Fehlers nehmen
        if (state2 === 2) {
            stateStr += new Date(values[95] * 1000).toString();
        } else {
            stateStr += humanizeduration(duration * 1000, huminizeoptions);
        }
    } else {
        stateStr = 'Unknown [' + state1 + ']';
    }
    return stateStr;
}

function createExtendedStateString(values) {
    let stateStr = '';
    const defrostValve = values[37];
    const heatSourceMotor = values[43];
    const compressor1 = values[44];
    const state3 = values[119];
    const ahpStufe = values[121];
    const ahpTemp = values[122] / 10;

    if (types.extendetStateMessages.hasOwnProperty(state3)) {
        stateStr = types.extendetStateMessages[state3];
        if (state3 === 6) {
            // Estrich Programm
            stateStr += ' Stufe ' + ahpStufe + ' - ' + ahpTemp + ' °C';
        } else if (state3 === 7) {
            // Abtauen
            if (defrostValve === 1) {
                stateStr += 'Abtauen (Kreisumkehr)';
            } else if (compressor1 === 0 && heatSourceMotor === 1) {
                stateStr += 'Luftabtauen';
            } else {
                stateStr += 'Abtauen';
            }
        }
    } else {
        stateStr = 'Unknown [' + state3 + ']';
    }
    return stateStr;
}

function createOperationStateString(state) {
    let stateStr = '';
    if (types.hpMode.hasOwnProperty(state)) {
        stateStr = types.hpMode[state];
    } else {
        stateStr = 'Unknown [' + state + ']';
    }
    return stateStr;
}

function getReverseMap(nMap) {
    const reverseMap = new Map();

    function swap(value, key, map) {
        reverseMap.set(value,key);
    }
      
    nMap.forEach(swap);

    return reverseMap;
}

function createHotWaterStateString(values) {
    let stateStr = '';
    const hotWaterBoilerValve = values[38];
    const opStateHotWater = values[124];
    if (opStateHotWater === 0) {
        stateStr = 'Sperrzeit';
    } else if (opStateHotWater === 1 && hotWaterBoilerValve === 1) {
        stateStr = 'Aufheizen';
    } else if (opStateHotWater === 1 && hotWaterBoilerValve === 0) {
        stateStr = 'Temp. OK';
    } else if (opStateHotWater === 3) {
        stateStr = 'Aus';
    } else {
        stateStr = 'Unknown [' + opStateHotWater + '/' + hotWaterBoilerValve + ']';
    }
    return stateStr;
}

function createCode(time, code, codeTypes) {
    return {
        code,
        date: new Date(time * 1000),
        message: codeTypes.hasOwnProperty(code) ? codeTypes[code] : codeTypes[-1]
    };
}

function createCodeList(timeArray, codeArray, codeTypes) {
    const logArray = [];
    for (let i = 0; i < timeArray.length; i++) {
        logArray.push(createCode(timeArray[i], codeArray[i], codeTypes));
    }
    return logArray;
}

function createOutageCodeList(timeArray, codeArray) {
    return createCodeList(timeArray, codeArray, types.outageCodes);
}

function createErrorCodeList(timeArray, codeArray) {
    return createCodeList(timeArray, codeArray, types.errorCodes);
}

//del
function toInt32ArrayReadBE(buffer) {
    const i32a = new Int32Array(buffer.length / 4);
    for (let i = 0; i < i32a.length; i++) {
        i32a[i] = buffer.readInt32BE(i * 4);
    }
    return i32a;
}

function createHeatPumptTypeString(value) {
    return types.hpTypes.hasOwnProperty(value) ? types.hpTypes[value] : types.hpTypes[-1];
}

function value2LuxtronikSetValue(realValue) {
    // Allow only integer temperature. Add factor x10.
    return parseInt(realValue * 10, 10);
}

function isValidOperationMode(value) {
    return types.hpMode.hasOwnProperty(value.toString());
}

function limitRange(value, min, max) {
    if (value < min) {
        value = min;
    }
    if (value > max) {
        value = max;
    }
    return value;
}

function pad2(number) {
    return (number < 10 ? '0' : '') + number;
}
function createFromToTime(value) {
    const fromValue = value %  65536;
    const toValue = (value - fromValue) / 65536;
    return 'from: ' + fromMinToHourMin(fromValue) + ' - to: ' + fromMinToHourMin(toValue);
}

function hourMinString(hour, min) {
    return pad2(hour) + ':' + pad2(min);
}

function fromMinToHourMin(value) {
    const min = value % 60;
    const hour = (value - min) / 60;
    return hourMinString(hour, min);
}

function fromSecToHourMin(value) {
    const min = value % 3600;
    const hour = (value - min) / 3600;
    return hourMinString(hour, min);
}

function createFromTime(value) {
    return 'from: ' + fromSecToHourMin(value);
}

function createToTime(value) {
    return 'to: ' + fromSecToHourMin(value);
}

/**
 * Creates and returns a new Error Object
 * 
 * @param {*} message 
 * @param {*} withStacktrace 
 */
function createError(message) {
    const err = new Error(message);
    err.address = this._host;
    err.port = this._port;
    (!this._errorsWithStacktrace?err.stack = '':'');
     return err;
}

module.exports = {
    createFirmwareString,
    int2ipAddress,
    createStateString,
    createExtendedStateString,
    createOperationStateString,
    createHotWaterStateString,
    createOutageCodeList,
    createErrorCodeList,
    toInt32ArrayReadBE,
    createHeatPumptTypeString,
    value2LuxtronikSetValue,
    isValidOperationMode,
    limitRange,
    createFromToTime,
    createFromTime,
    createToTime,
    createError,
    getReverseMap
};
