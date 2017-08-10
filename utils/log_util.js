let log4js = require('log4js');

let log_config = require('../config/log_config');

log4js.configure(log_config);

let logUtil = {};

let errorLogger = log4js.getLogger('errorLogger');
let resLogger = log4js.getLogger('resLogger');

logUtil.logError = function(ctx, error, resTime) {
    if (ctx && error) {
        errorLogger.error(formatError(ctx, error, resTime));
    }
};

logUtil.logResponse = function(ctx, resTime) {
    if (ctx) {
        resLogger.info(formatRes(ctx, resTime));
    }
};

let formatRes = function(ctx, resTime) {
    let logText = new String();

    logText += '\n' + '================= response log start =================' + '\n';
    logText += formatReqLog(ctx.request, resTime);
    logText += 'response status: ' + ctx.status + '\n';
    logText += 'response body: ' + '\n' + JSON.stringify(ctx.body) + '\n';
    logText += '================= response log end =================' + '\n';

    return logText;
};

let formatError = function(ctx, err, resTime) {
    let logText = new String();

    logText += '\n' + '================= error log start =================' + '\n';
    logText += formatReqLog(ctx.request, resTime);
    logText += 'err name: ' + err.name + '\n';
    logText += 'err message: ' + err.message + '\n';
    logText += 'err stack: ' + err.stack + '\n';
    logText += '================= error log end =================' + '\n';

    return logText;
};

let formatReqLog = function(req, resTime) {
    let logText = new String();
    let method = req.method;
  
    logText += 'request method: ' + method + '\n';
    logText += 'request originalUrl:  ' + req.originalUrl + '\n';
    logText += 'request client ip:  ' + req.ip + '\n';

    let startTime;
    if (method === 'GET') {
        logText += 'request query:  ' + JSON.stringify(req.query) + '\n';
        // startTime = req.query.requestStartTime;
    } else {
        logText += 'request body: ' + '\n' + JSON.stringify(req.body) + '\n';
        // startTime = req.body.requestStartTime;
    }
    logText += 'response time: ' + resTime + '\n';

    return logText;
};

module.exports = logUtil;
