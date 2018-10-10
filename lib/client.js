'use strict';

const net = require('net');
const logger = require('./logger').logger;
const utils = require('./utils');

/**
 * Create client for Socket communication
 */
const createClient = function() {
    /**
     * Create new Socketconnection
     */
    this.client = net.createConnection({
        host: this._host,
        port: this._port,
        timeout: this._timeout
    });

    /**
     * Emitted when a socket connection is successfully established.
     */
    this.client.on('connect', function () {
        logger.log({level: 'verbose',message: 'Connecting...'});
    }.bind(this));

    
    /**
     * Emitted when the other end of the socket sends a FIN packet, thus ending the readable side of the socket.
     */
    this.client.on('end', function () {
        logger.log({level: 'verbose',message: 'FIN package received'});
    }.bind(this));

    /**
     * Emitted once the socket is fully closed. The argument hadError is a boolean which says if the socket was closed due to a transmission error.
     */
    this.client.on('close', function (hadError) {
        if (hadError) {
            logger.log({level: 'warn',message: 'Socket closed with Error' });
        } else {
            logger.log({level: 'verbose',message: 'Socket sucessfully closed'});
        }
    }.bind(this));

    /**
     * Emitted if the socket times out from inactivity.
     */
    this.client.on('timeout', function () {
        logger.log({level: 'error',message: "Timeout after " + this._timeout + " ms"});
        this.client.destroy(utils.createError.bind(this)("Timeout after " + this._timeout + " ms"));
        this.client = null;
        
    }.bind(this));

    /**
     * Emitted when an error occurs. The 'close' event will be called directly following this event.
     */
    this.client.on('error', function (error) {
        logger.log({level: 'error', message: error});
        // this.client.end();
        this.client = null;
        process.nextTick(
            function () {
                this.receivy.callback(error);
            }.bind(this)
        );
    }.bind(this));

    /**
     * Emitted when data is received.
     */
    this.client.on('data', function (data) {
        logger.log({level: 'verbose',message: 'receiving data'});

        logger.log({level: 'verbose',message: 'active Command: ' + this.receivy.activeCommand});
        //The first data for a datatype
        if (this.receivy.activeCommand === 0) {
            const commandEcho = data.readInt32BE(0);
            this.receivy.action = this._typeConfiguration.dataTypes[commandEcho].action;
            const firstReadableDataAddress = this._typeConfiguration.dataTypes[commandEcho].firstReadableDataAddress;
            let byteCount;
            let valueCount;
            const bytelength = this._typeConfiguration.dataTypes[commandEcho].bytelength;
            if (this.receivy.action === "read") {
                valueCount = data.readInt32BE(firstReadableDataAddress - 4);
                byteCount = valueCount * bytelength;
            }

            logger.log({level: 'verbose',message: 'Heatpump answers with datatype: ' + commandEcho});
            logger.log({level: 'verbose',message: 'Bytelength of dataType: ' + bytelength});
            logger.log({level: 'verbose',message: 'First readable byte of dataType: ' + firstReadableDataAddress});
            if (this.receivy.action === "read") {
                logger.log({level: 'verbose',message: 'Readable values: ' + valueCount});
                logger.log({level: 'verbose',message: 'Readable data: ' + byteCount});
            }
            logger.log({level: 'silly',message: '\r\n'});

            // set payload to readable databytes
            const payload = data.slice(firstReadableDataAddress, data.length);

            this.receivy.activeCommand = commandEcho;
            let remaining = 0;
            if (this.receivy.action === "read") {
                remaining = byteCount - payload.length
            }
            let send = this.receivy.sendData;
            if (typeof this.receivy[commandEcho] === 'undefined') {
                this.receivy[commandEcho] = [];
            }
            this.receivy[commandEcho].push({
                remaining: remaining,
                payload,
                send
            });
    // all upcoming data to the same datatype
        } else {
            let send = this.receivy.sendData;
            this.receivy[this.receivy.activeCommand][this.receivy[this.receivy.activeCommand].length - 1] = {
                remaining: this.receivy[this.receivy.activeCommand][this.receivy[this.receivy.activeCommand].length - 1].remaining - data.length,
                payload: Buffer.concat([this.receivy[this.receivy.activeCommand][this.receivy[this.receivy.activeCommand].length - 1].payload, data]),
                send
            };
        }

        //call nextJob if all data read for one data type
        if (this.receivy[this.receivy.activeCommand][this.receivy[this.receivy.activeCommand].length - 1].remaining <= 0) {
            process.nextTick(this._nextJob.bind(this));
        }
    }.bind(this));
}

const createReadClient = function () {
    createClient.bind(this)();
    /**
     * Emitted when a socket is ready to be used.
     */
    this.client.on('ready', function () {
        logger.log({level: 'verbose',message: 'Ready to read'});
        process.nextTick(this._nextJob.bind(this));
    }.bind(this));

}

const createWriteClient = function () {

    createClient.bind(this)();
    /**
     * Emitted when a socket is ready to be used.
     */
    this.client.on('ready', function () {
        logger.log({level: 'verbose',message: 'Ready to write'});
        process.nextTick(this._nextJob.bind(this));
    }.bind(this));

    /**
     * Emitted when data is received.
     */
/*    this.client.on('data', function (data) {
        logger.log({level: 'verbose',message: 'receiving data'});
        const commandEcho = data.readInt32BE(0);
        logger.log({level: 'verbose',message: 'Heatpump answers with datatype: ' + commandEcho});
        if (commandEcho !== 3002) {
            const error = 'Host did not confirm parameter setting';
            next = function () {
                this.receivy.callback(error);
            }.bind(this);
        } else {
            const setParameterEcho = data.readInt32BE(4);
            next = function () {
                this.receivy.callback(null, {
                    msg: 'write ok',
                    echo: setParameterEcho
                });
            }.bind(this);
        }
        process.nextTick(this._nextJob.bind(this));
    }.bind(this));
*/
}

module.exports = {
    createReadClient,
    createWriteClient
}