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
        firstReadableDataAddress: 8,
        bytelength: 4,
        mapping: heatpumpParameter.heatpumpParameterMap,
    },
    3003: {
        info: 'Used to read parameters from heatpump',
        action: 'read',
        firstReadableDataAddress: 8,
        bytelength: 4,
        mapping: heatpumpParameter.heatpumpParameterMap,
    },
    3004: {
        info: 'Used to read values from heatpump',
        action: 'read',
        firstReadableDataAddress: 12,
        bytelength: 4,
        mapping: heatpumpValues.heatpumpValueMap,
    },
    3005: {
        info: 'Used to read visibilities from heatpump',
        action: 'read',
        firstReadableDataAddress: 8,
        bytelength: 1,
        mapping: heatpumpVisibilities.heatpumpVisibilityMap,
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
module.exports = {
    getReadableDataTypes,
    dataTypes,
    heatpumpParameter,
    heatpumpValues,
    heatpumpVisibilities
};