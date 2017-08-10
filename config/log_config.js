/**
 * log4js config
 *
 * ALL TRACE DEBUG INFO WARN ERROR FATAL OFF.
 *
 * https://github.com/nomiddlename/log4js-node/wiki/Appenders
 */

let path = require('path');

// log root path
let baseLogPath = path.resolve(__dirname, '../logs');

// error log path
let errorPath = '/error';
// error log name
let errorFileName = 'error';
let errorLogPath = baseLogPath + errorPath + '/' + errorFileName;


// response log path
let responsePath = '/response';
// response log name
let responseFileName = 'response';
let responseLogPath = baseLogPath + responsePath + '/' + responseFileName;

module.exports = {
    'appenders': [{
            'category': 'errorLogger',
            'type': 'dateFile',
            'filename': errorLogPath,
            'alwaysIncludePattern': true,
            'pattern': '-yyyy-MM-dd-hh.log',
            'path': errorPath
        },
        {
            'category': 'resLogger',
            'type': 'dateFile',
            'filename': responseLogPath,
            'alwaysIncludePattern': true,
            'pattern': '-yyyy-MM-dd-hh.log',
            'path': responsePath
        },
    ],
    'levels': {
        'errorLogger': 'ERROR',
        'resLogger': 'ALL'
    },
    'baseLogPath': baseLogPath
};