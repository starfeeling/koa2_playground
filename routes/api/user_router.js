let router = require('koa-router')();
let user_controller = require('../../app/controllers/user_controller');

router.get('/getUser/:id', user_controller.getUser);

module.exports = router;
