const Koa = require('koa');
const app = new Koa();
const cors = require('koa2-cors');
const Router = require('koa-router')
const router = new Router()

const xj = require('../data/xj')
const dj = require('../data/dj')
const yj = require('../data/yj')
const zc = require('../data/zc')
const yc = require('../data/yc')

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

router.get('/league', async (ctx, next) => {
  console.log(ctx.request)
  const obj = {
    '德甲': xj,
    '英超': yc,
    '意甲': yj,
    '中超': zc,
    '西甲': xj,
  }
  let league = ctx.request.query.league
  ctx.body = obj[league]
})
app.use(cors())
// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(8667,function(){ console.log( 'listening at 8667...' )});