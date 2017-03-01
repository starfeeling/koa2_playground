const Koa = require('koa')
const app = new Koa()
const router = require('./routers/index')

app.use(router.routes()).use(router.allowedMethods())

app.use(async(ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.listen(3001)
