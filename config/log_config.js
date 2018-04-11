/**
 * log4js config
 *
 * ALL TRACE DEBUG INFO WARN ERROR FATAL OFF.
 *
 * https://github.com/nomiddlename/log4js-node/wiki/Appenders
 */

const path = require('path')

// log root path
const baseLogPath = path.resolve(__dirname, '../logs')

// error log path
const errorPath = '/error'
// error log name
const errorFileName = 'error'
const errorLogPath = `${baseLogPath + errorPath}/${errorFileName}`


// response log path
const responsePath = '/response'
// response log name
const responseFileName = 'response'
const responseLogPath = `${baseLogPath + responsePath}/${responseFileName}`

module.exports = {
	appenders: [{
		category: 'errorLogger',
		type: 'dateFile',
		filename: errorLogPath,
		alwaysIncludePattern: true,
		pattern: '-yyyy-MM-dd-hh.log',
		path: errorPath
	},
	{
		category: 'resLogger',
		type: 'dateFile',
		filename: responseLogPath,
		alwaysIncludePattern: true,
		pattern: '-yyyy-MM-dd-hh.log',
		path: responsePath
	}
	],
	levels: {
		errorLogger: 'ERROR',
		resLogger: 'ALL'
	},
	baseLogPath
}
