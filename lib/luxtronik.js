/**
 * @module luxtronik2
 * @copyright Sebastian B. <coolchip@gmx.de>
 */

'use strict';

const utils = require('./utils');
const luxClient = require('./client');
const types = require('./types');
const logger = require('./logger').logger;

const typeConfiguration = require('./dataTypes/typeConfiguration');

/**
 * Creates an instance of Luxtronik Object
 * 
 * @param {string} host 
 * @param {number} port 
 */
function Luxtronik(host, port) {
    if (!(this instanceof Luxtronik)) {
        return new Luxtronik(host, port);
    }

    if (typeof port === 'undefined') {
        this._port = 8888;
    } else {
        this._port = port;
    }
    this._host = host;
    this._timeout = 30000;
    this._errorsWithStacktrace = false;
    this._typeConfiguration = typeConfiguration;
}

/**
 * Start reading of all Heatpump values, parameters and visibilites
 * @param {Function} callback 
 */
Luxtronik.prototype.read = function (callback) {
    const client = getNewLuxClient.bind(this)(callback);
    client.connection.jobs = client._typeConfiguration.getReadableDataTypes();
    client.connection.writeParams = [];
    for (let i = 0; i < client.connection.jobs.length; i++) {
        client.connection.writeParams.push([client.connection.jobs[i],0]);
    }

    client.openConnection();
};

Luxtronik.prototype.write = function (parameterName, realValue, callback) {
    const client = getNewLuxClient.bind(this)(callback);
    client.connection.jobs = client._typeConfiguration.getWritableDataTypes();
    client.connection.writeParams = [
        [3002,2,490],
        [3002,1,-30]
    ];

    client.openConnection();
};

function getNewLuxClient(callback) {
    const client = luxClient.createLuxClientInstance(this._host,this._port,this._timeout);
    if (typeof callback === 'undefined') {
        callback = function () {};
    }
    client.callback = callback;
    client.connection = {
        jobs: [],
        executionStartTime: Date.now(),
        callback
    };
    client._processData = this._processData.bind(this);
    return client;
}

/**
 * Instance of Luxtronik Object
 * 
 * @param {string} host 
 * @param {number} port 
 */
const createLuxtronik = function (host, port) {
    return new Luxtronik(host, port);
};

Luxtronik.prototype._handleWriteCommand = function (parameterName, realValue, callback) {
    const writeParameters = Object.freeze({
        'heating_target_temperature': {
            setParameter: 1,
            setValue: utils.value2LuxtronikSetValue(utils.limitRange(realValue, -10, 10))
        },
        'warmwater_target_temperature': {
            setParameter: 2,
            setValue: utils.value2LuxtronikSetValue(utils.limitRange(realValue, 30, 65))
        },
        'heating_operation_mode': {
            setParameter: utils.isValidOperationMode(realValue) ? 3 : undefined,
            setValue: realValue
        },
        'warmwater_operation_mode': {
            setParameter: utils.isValidOperationMode(realValue) ? 4 : undefined,
            setValue: realValue
        },
        'cooling_operation_mode': {
            setParameter: 108,
            setValue: realValue
        },
        'cooling_release_temp': {
            setParameter: 110,
            setValue: utils.value2LuxtronikSetValue(realValue)
        },
        'cooling_inlet_temp': {
            setParameter: 132,
            setValue: utils.value2LuxtronikSetValue(realValue)
        },
        'cooling_start': {
            setParameter: 850,
            setValue: realValue
        },
        'cooling_stop': {
            setParameter: 851,
            setValue: realValue
        },
        'wrongName': {
            //setParameter: undefined,
        }
    });

    const set = writeParameters.hasOwnProperty(parameterName) ? writeParameters[parameterName] : writeParameters.wrongName;
    if (typeof set.setParameter !== 'undefined') {
        const setParameter = set.setParameter;
        const setValue = set.setValue;
        this.connection.writeParams = [
            [3002,setParameter,setValue]
        ];
        client.createClient.bind(this)();
    } else {
        const error = 'Wrong data';
        process.nextTick(
            function () {
                callback(error);
            }
        );
    }
};

Luxtronik.prototype._processData = function (result,callback) {

    const executionTime = result.executionEndTime - result.executionStartTime;
    logger.log({ level: 'verbose',message: 'Complete execution time: ' + executionTime + ' ms' });
    //const command = result.responses.filter( response => response.command === 3002 );
    if (typeConfiguration.numberOfActions(result.responses,'read') > 0) {
        handleBackwardompatibility(result,callback);
    }
    for (let i = 0; i<result.responses.length; i++) {
        logger.log({ level: 'verbose',message: 'Execution time for '+ result.responses[i].command +': ' + (result.responses[i].executionEndTime -  result.responses[i].executionStartTime) + ' ms' });
        let swappedMap;
        const mapped = typeConfiguration.dataTypes[result.responses[i].command].mapping.getMappedValues(result.responses[i].payload);

        switch(result.responses[i].command) {
            case 3002:
                swappedMap = utils.getReverseMap(typeConfiguration.dataTypes[result.responses[i].command].mapping.valueMap);
                process.nextTick(callback,null,'3002 done: ' + swappedMap.get(result.responses[i].payload[0]));
            break;
            case 3003:
                process.nextTick(callback,null,mapped);
            break;
            case 3004:
                process.nextTick(callback,null,mapped);
            break;
            case 3005:
                process.nextTick(callback,null,mapped);
            break;
            default:
                process.nextTick(callback,null,result.responses[i].command + ' done: ');
            break;
        }
    }
};

function handleBackwardompatibility(result, callback) {
    const heatpumpVisibility = result.responses.find( response => response.command === 3005 );
    const heatpumpValues = result.responses.find( response => response.command === 3004 );
    const heatpumpParameters = result.responses.find( response => response.command === 3003 );

    if (typeof heatpumpParameters === 'undefined' ||
        typeof heatpumpValues === 'undefined' ||
        typeof heatpumpVisibility === 'undefined') {
        return callback(new Error('Unexpected Data'));
    }
        
    const values = typeConfiguration.dataTypes[heatpumpValues.command].mapping.getDeprecatedValues(heatpumpValues.payload, heatpumpVisibility.payload);
    const parameters = typeConfiguration.dataTypes[heatpumpParameters.command].mapping.getDeprecatedValues(heatpumpParameters.payload, heatpumpVisibility.payload);

    // flow rate
    values.flowRate = (heatpumpParameters.payload[870] !== 0) ? heatpumpValues.payload[155] : 'no'; // #19

    // skips inconsistent flow rates (known problem of the used flow measurement devices)
    if (values.flowRate !== 'no' && values.heatingSystemCircPump === 'on') {
        if (values.flowRate === 0) {
            values.flowRate = 'inconsistent';
        }
    }

    if (parameters.hotWaterCircPumpDeaerate !== 'no') {
        parameters.hotWaterCircPumpDeaerate = parameters.hotWaterCircPumpDeaerate ? 'on' : 'off';
    }

    // Consider also heating limit
    let heatingStateString = '';
    if (parameters.heating_operation_mode === 0 && parameters.heatingLimit === 1 &&
        values.temperature_outside_avg >= parameters.thresholdHeatingLimit &&
        (values.temperature_target_return === parameters.returnTemperatureTargetMin ||
            values.temperature_target_return === 20 && values.temperature_outside < 10)
    ) {
        if (values.temperature_outside >= 10) {
            heatingStateString = 'Heizgrenze (Soll ' + parameters.returnTemperatureTargetMin + ' °C)';
        } else {
            heatingStateString = 'Frostschutz (Soll 20 °C)';
        }
    } else {
        if (types.heatingState.hasOwnProperty(values.opStateHeating)) {
            heatingStateString = types.heatingState[values.opStateHeating];
        } else {
            heatingStateString = 'unbekannt (' + values.opStateHeating + ')';
        }

        // Consider heating reduction limit
        if (values.opStateHeating === 0) {
            if (parameters.thresholdTemperatureSetBack <= values.temperature_outside) {
                heatingStateString += ' ' + parameters.deltaHeatingReduction + ' °C';
            } else {
                heatingStateString = 'Normal da < ' + parameters.thresholdTemperatureSetBack + ' °C';
            }
        }
    }
    values.opStateHeatingString = heatingStateString;

    return {
        values,
        parameters,
    };
}

module.exports.createLuxtronik = createLuxtronik;