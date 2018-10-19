'use strict';

const net = require('net');
const logger = require('./logger').logger;
const utils = require('./utils');
const typeConfiguration = require('./dataTypes/typeConfiguration');

function createLuxClientInstance(host, port, timeout) {
    return new LuxClient(host, port, timeout);
}

/**
 * Constructor for handling calls to Heatpump
 * 
 * @param {*} host 
 * @param {*} port 
 * @param {*} timeout 
 */
function LuxClient(host, port, timeout) {
    if (!(this instanceof LuxClient)) {
        return new LuxClient(host, port);
    }

    if (typeof port === 'undefined') {
        this._port = 8888;
    } else {
        this._port = port;
    }
    this._host = host;
    this._timeout = timeout;
    this._typeConfiguration = typeConfiguration;
    this.connection = {};
}
/**
 * Open connection for Socket communication and starts communication
 */
LuxClient.prototype.openConnection = function () {
    /**
     * Create new Socketconnection
     */
    this.client = net.createConnection({
        host: this._host,
        port: this._port,
        timeout: this._timeout
    });

    /**
     * Emitted when a socket is ready to be used.
     */
    this.client.on('ready', function () {
        logger.log({ level: 'verbose',message: 'Ready to read' });
        process.nextTick(this._nextJob.bind(this));
    }.bind(this));

    /**
     * Emitted when a socket connection is successfully established.
     */
    this.client.on('connect', function () {
        logger.log({ level: 'verbose',message: 'Connecting...' });
    });
    
    /**
     * Emitted when the other end of the socket sends a FIN packet, thus ending the readable side of the socket.
     */
    this.client.on('end', function () {
        logger.log({ level: 'verbose',message: 'FIN package received' });
    });

    /**
     * Emitted once the socket is fully closed. The argument hadError is a boolean which says if the socket was closed due to a transmission error.
     */
    this.client.on('close', function (hadError) {
        if (hadError) {
            logger.log({ level: 'warn',message: 'Socket closed with Error' });
        } else {
            logger.log({ level: 'verbose',message: 'Socket sucessfully closed' });
        }
    });

    /**
     * Emitted if the socket times out from inactivity.
     */
    this.client.on('timeout', function () {
        logger.log({ level: 'error',message: 'Timeout after ' + this._timeout + ' ms' });
        this.client.destroy(utils.createError.bind(this)('Timeout after ' + this._timeout + ' ms'));
        this.client = null;
    }.bind(this));

    /**
     * Emitted when an error occurs. The 'close' event will be called directly following this event.
     */
    this.client.on('error', function (error) {
        logger.log({ level: 'error', message: error });
        // this.client.end();
        this.client = null;
        process.nextTick(
            function () {
                this.callback(error);
            }.bind(this)
        );
    }.bind(this));

    /**
     * Emitted when data is received.
     */
    this.client.on('data', function (data) {
        const commandEcho = this.connection.sendData[0];
        logger.log({ level: 'verbose',message: 'receiving data for ' + commandEcho });
        createTempVariables.bind(this)();
        this.connection.cur_response.raw_readData = Buffer.concat([this.connection.cur_response.raw_readData,data]);

        // if bytes returned > 4
        if (data.length > 4) {
            // read 4bytes sequences until data
            const headersequences = this._typeConfiguration.dataTypes[commandEcho].firstReadableDataAddress;
            const bytelength = this._typeConfiguration.dataTypes[commandEcho].bytelength;
                logger.log({ level: 'verbose',message: 'read Headerinformation' });
            for (let i = 0; i < headersequences; i+=4) {
                    const dataEntry = data.readInt32BE(i);
                    logger.log({ level: 'debug',message: 'pushed data: ' + dataEntry });
                    this.connection.cur_response.readData.push(dataEntry);
                }
                logger.log({ level: 'verbose',message: 'read Data' });
            for (let i = headersequences; i < data.length; i+= bytelength) {
                let dataEntry;
                if (this._typeConfiguration.dataTypes[commandEcho].bytelength === 1) {
                    dataEntry = data[i];
                } else {
                    dataEntry = data.readInt32BE(i);
                }
                logger.log({ level: 'debug',message: 'pushed data: ' + dataEntry });
                this.connection.cur_response.readData.push(dataEntry);
            }
        } else {
            logger.log({ level: 'verbose',message: 'read Headerinformation - Command' });
            this.connection.cur_response.readData.push(data.readInt32BE(0));
            this._typeConfiguration.dataTypes[commandEcho].firstReadableDataAddress-=4;
            logger.log({ level: 'verbose',message: 'corrected firstReadabldDataAddress to  ' + this._typeConfiguration.dataTypes[commandEcho].firstReadableDataAddress });
        }
        const elementOfReturnCounts = this._typeConfiguration.dataTypes[commandEcho].firstByteOfParameterCount / 4;

        if (
                (elementOfReturnCounts === 0 && this.connection.cur_response.readData.length === 2) ||
                (this.connection.cur_response.readData.length > elementOfReturnCounts && 
                this.connection.cur_response.readData.length === this.connection.cur_response.readData[elementOfReturnCounts] + elementOfReturnCounts + 1
                )
            ) {
            wirteResultToResponses.bind(this)(commandEcho);
            process.nextTick(this._nextJob.bind(this));
        }
    }.bind(this));
};

/**
 * Handles the amount of jos and calls and the call back after finishing all jobs
 */
LuxClient.prototype._nextJob = function () {
    if (this.connection.writeParams.length > 0) {
        this.connection.sendData = this.connection.writeParams.shift();
        this._sendData(this.client, this.connection.sendData);
    } else {
        this.client.end();
        this.client = null;
        this.connection.executionEndTime = Date.now();
        const result = {
            responses: this.connection.responses,
            executionEndTime: this.connection.executionEndTime,
            executionStartTime: this.connection.executionStartTime,
            jobs: this.connection.jobs
        };
        process.nextTick(this._processData.bind(null, result, this.callback));
    }
};

/**
 * sends data to the Heatpump
 * 
 * @param {net.Socket} client 
 * @param {Array} data
 */
LuxClient.prototype._sendData = function (client, data) {
    if (typeof client !== 'undefined' && client !== null) {
        const buffer = Buffer.allocUnsafe(data.length * 4);
        
        let x = 0;
        data.forEach(function (element) {
            buffer.writeInt32BE(element, x * 4);
            x++;
        });
        this.connection.raw_sendData = buffer;
        client.write(buffer);
    }
};

/**
 * Writes the results of datareading to responses and cleanup unneeded temp variables
 * @param {*} commandEcho 
 */
function wirteResultToResponses(commandEcho) {
    this.connection.cur_response.command = commandEcho;
    this.connection.cur_response.sendData = this.connection.sendData;
    this.connection.cur_response.raw_sendData = this.connection.raw_sendData;
    this.connection.cur_response.payload = this.connection.cur_response.readData.slice(typeConfiguration.dataTypes[commandEcho].firstReadableDataAddress/4);
    this.connection.cur_response.executionEndTime = Date.now();
    this.connection.responses.push(this.connection.cur_response);
    deleteTempVariables.bind(this)();
}

/**
 * Creates needed temp variables
 */
function createTempVariables() {
    if (typeof this.connection.responses === 'undefined' ) {
        this.connection.responses = [];
    }
    if (typeof this.connection.cur_response === 'undefined' ) {
        this.connection.cur_response = {
            readData: [],
            executionStartTime: Date.now(),
            raw_readData: Buffer.from([])            
        };
    }
}
/**
 * Creates temp variables
 */
function deleteTempVariables() {
    delete this.connection.cur_response;
    delete this.connection.sendData;
    delete this.connection.raw_sendData;
}

module.exports = {
    createLuxClientInstance
};