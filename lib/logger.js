'use strict';

const winston = require('winston');
const fs = require( 'fs' );
const path = require('path');
const logDir = "logs";

if ( !fs.existsSync( logDir ) ) {
    // Create the directory if it does not exist
    fs.mkdirSync( logDir );
}

const logger = winston.createLogger(
    {
        level: 'info',
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.json()
        ),
        transports: [
          //
          // - Write to all logs with level `info` and below to `combined.log` 
          // - Write all logs error (and below) to `error.log`.
          //
          new winston.transports.File({ filename: path.join(logDir, '/error.log'), level: 'error' }),
          new winston.transports.File({ filename: path.join(logDir, '/combined.log') })
        ]
      }
);

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        level: 'debug',
        format: winston.format.combine(  
            winston.format.colorize(),
            winston.format.simple()
        )
    }));
    logger.remove(logger.transports.find(transport => {return transport.filename === 'error.log'}));
    logger.remove(logger.transports.find(transport => {return transport.filename === 'combined.log'}));
}

module.exports =  {
    logger,
};