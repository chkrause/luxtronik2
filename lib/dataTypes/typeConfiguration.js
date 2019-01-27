const heatpumpParameter = require('./heatpumpParameters');
const heatpumpValues = require('./heatpumpValues');
const heatpumpVisibilities = require('./heatpumpVisibilities');

/**
 * Constant of available Datatypes of Heatpump
 */
const dataTypes = {
    3002: {
        info: 'Used to write parameters to heatpump',
        action: 'write',
        firstReadableDataAddress: 4,
        firstByteOfParameterCount: 0,
        bytelength: 4,
        mapping: heatpumpParameter,
    },
    3003: {
        info: 'Used to read parameters from heatpump',
        action: 'read',
        firstReadableDataAddress: 8,
        firstByteOfParameterCount: 4,
        bytelength: 4,
        mapping: heatpumpParameter,
    },
    3004: {
        info: 'Used to read values from heatpump',
        action: 'read',
        firstReadableDataAddress: 12,
        firstByteOfParameterCount: 8,
        bytelength: 4,
        mapping: heatpumpValues,
    },
    3005: {
        info: 'Used to read visibilities from heatpump',
        action: 'read',
        firstReadableDataAddress: 8,
        firstByteOfParameterCount: 4,
        bytelength: 1,
        mapping: heatpumpVisibilities,
    }
};

/**
 * returns an Array of Datatypes which can be read from Heatpump
 */
function getReadableDataTypes() { 
    const readableDataTypes = [];
    for (const element in this.dataTypes)  {
        if (this.dataTypes[element].hasOwnProperty('action')) {
            if (dataTypes[element].action === 'read') {
                readableDataTypes.push(parseInt(element));
            }
        }
    }
    return readableDataTypes;
}
/**
 * returns an Array of Datatypes which can be read from Heatpump
 */
function getWritableDataTypes() { 
    const writeableDataTypes = [];
    for (const element in this.dataTypes)  {
        if (this.dataTypes[element].hasOwnProperty('action')) {
            if (dataTypes[element].action === 'write') {
                writeableDataTypes.push(parseInt(element));
            }
        }
    }
    return writeableDataTypes;
}

function isCommandTypeofAction(command, action) {
    if (dataTypes.hasOwnProperty(command) && dataTypes[command].hasOwnProperty('action') && dataTypes[command].action === action) {
        return true;
    } else {
        return false;
    }
}

function numberOfActions(responses, action) {
    let count = 0;
    for (let i = 0; i < responses.length; i++) {
        if (isCommandTypeofAction(responses[i].command,action)) {
            count++;
        }
    }
    return count;
}

module.exports = {
    getReadableDataTypes,
    getWritableDataTypes,
    dataTypes,
    numberOfActions
};