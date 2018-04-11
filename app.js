const Koa = require('koa')
const router = require('koa-router')()
const views = require('koa-views')
const convert = require('koa-convert')
const json = require('koa-json')
const bodyparser = require('koa-bodyparser')()
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const api = require('./routes/api')
const logUtil = require('./utils/log_util')
const responseFormatter = require('./middlewares/response_formatter')

const app = new Koa()
// middlewares
const _use = app.use
app.use = (x) => { return _use.call(app, convert(x)) }
app.use(convert(bodyparser))
app.use(convert(json()))
app.use(convert(logger()))
app.use(require('koa-static')(`${__dirname}/public`))


app.use(views(`${__dirname}/views`, {
	extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
	const start = new Date()
	let ms
	try {
		await next()
		ms = new Date() - start
		logUtil.logResponse(ctx, ms)
	} catch (error) {
		ms = new Date() - start
		logUtil.logError(ctx, error, ms)
	}
})

app.use(responseFormatter('^/api'))

router.use('/', index.routes(), index.allowedMethods())
router.use('/users', users.routes(), users.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())

app.use(router.routes(), router.allowedMethods())
// response
app.on('error', async (err, ctx) => {
	logUtil.logError(ctx, err, '0')
})


module.exports = app
