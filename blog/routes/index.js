var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;



// 第二种写法
// 里我们在 routes/index.js 中通过module.exports 导出了一个函数接口，在 app.js 中通过 require 加载了 index.js 然后通过routes(app) 调用了 index.js 导出的函数。
module.exports = function (app) {

    app.get('/',function (req, res) {
        res.render('index', { title: '主页' });
    });

    app.get('/reg', function (req, res) {
        res.render('reg', { title: '注册' })
    });
    app.post('/reg', function (req, res) {

    });

    app.get('/login', function (req, res) {
        res.render('login', { title: '登录' })
    });
    app.post('/login', function (req, res) {

    })

    app.get('/post', function (req, res) {
        res.render('post', { title: '发表' })
    })
    app.post('/post', function (req, res) {

    })

    app.get('/logout', function (req, res) {

    })

    // 如何针对已登录和未登录的用户显示不同的内容呢？或者说如何判断用户是否已经登陆了呢？
    // 进一步说如何记住用户的登录状态呢？引入会话（session）机制记录用户登录状态，
    // 还要访问数据库来保存和读取用户信息


}
//
