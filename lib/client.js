'use strict';

const net = require('net');
const logger = require('./logger').logger;

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
}

const createReadClient = function () {
    createClient.bind(this)();
    /**
     * Emitted when a socket is ready to be used.
     */
    this.client.on('ready', function () {
        logger.log({level: 'verbose',message: 'Ready to work'});
        process.nextTick(this._nextJob.bind(this));
    }.bind(this));

    /**
     * Emitted when data is received.
     */
    this.client.on('data', function (data) {

        logger.log({level: 'verbose',message: 'active Command: ' + this.receivy.activeCommand});
        //The first data for a datatype
        if (this.receivy.activeCommand === 0) {
            const commandEcho = data.readInt32BE(0);
            const datatype = data.readInt32BE(0);
            let firstReadableDataAddress = this._typeConfiguration.dataTypes[datatype].firstReadableDataAddress;
            let bytelength = this._typeConfiguration.dataTypes[datatype].bytelength;
            const valueCount = data.readInt32BE(firstReadableDataAddress - 4);
            const paramCount = data.readInt32BE(firstReadableDataAddress - 4);
            let byteCount = valueCount * bytelength;

            logger.log({level: 'verbose',message: 'Heatpump answers with datatype: ' + commandEcho});
            logger.log({level: 'verbose',message: 'Bytelength of dataType: ' + bytelength});
            logger.log({level: 'verbose',message: 'First readable byte of dataType: ' + firstReadableDataAddress});
            logger.log({level: 'verbose',message: 'Readable values: ' + valueCount});
            logger.log({level: 'verbose',message: 'Readable data: ' + byteCount});
            logger.log({level: 'silly',message: '\r\n'});


            // set payload to readable databytes
            const payload = data.slice(firstReadableDataAddress, data.length);

            this.receivy.activeCommand = commandEcho;
            this.receivy[commandEcho] = {
                remaining: byteCount - payload.length,
                payload
            };
        // all upcoming data to the same datatype
        } else {
            this.receivy[this.receivy.activeCommand] = {
                remaining: this.receivy[this.receivy.activeCommand].remaining - data.length,
                payload: Buffer.concat([this.receivy[this.receivy.activeCommand].payload, data])
            };
        }

        //call nextJob if all data read for one data type
        if (this.receivy[this.receivy.activeCommand].remaining <= 0) {
            process.nextTick(this._nextJob.bind(this));
        }
    }.bind(this));
}

const createWriteClient = function (setParameter, setValue, callback) {
    createClient.bind(this)();

    /**
     * Emitted when a socket is ready to be used.
     */
    this.client.on('ready', function () {
        logger.log({level: 'verbose',message: 'Ready to work'});
        const command = 3002;
        sendData(this.client, [command, setParameter, setValue]);
    }.bind(this));

    /**
     * Emitted when data is received.
     */
    this.client.on('data', function (data) {
        const commandEcho = data.readInt32BE(0);
        let next;
        if (commandEcho !== 3002) {
            const error = 'Host did not confirm parameter setting';
            next = function () {
                callback(error);
            };
        } else {
            const setParameterEcho = data.readInt32BE(4);
            next = function () {
                callback(null, {
                    msg: 'write ok',
                    echo: setParameterEcho
                });
            };
        }
        process.nextTick(next);
        this.client.end();
        this.client = null;
    }.bind(this));

}

module.exports = {
    createReadClient,
    createWriteClient
}