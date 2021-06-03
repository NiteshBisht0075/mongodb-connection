const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
require('./db')
const controller = require('./controller');
const app = new Koa();
const router = new Router();
const port = 9000 ;


router.post('/add-user', controller.addUser);
router.get('/read-user', controller.readUser);
router.put('/update-user/:id', controller.updateUser);
router.get('/get-user/:id', controller.getUser);
module.exports = router.routes()

app.use(koaBody({ multipart: true }))
app
.use(router.routes())
.use(router.allowedMethods());

app.listen(port,() =>{
console.log(`${port}`)
})