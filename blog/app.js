var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');

// 第二种写法
var routes = require('./routes/index')
//

// 这是数据库的  在完成设置db.js之后写好就行
var settings = require('./settings')
//

// 关于session
var session = require('/express-session');
// 关于mongodb存储会话信息
var MongoStore = require('connect-mongo')(session);
// 在完成数据库的settings之后 声明上述两个变量
//
//
app.use(session({
    secret : settings.cookieSecret,
    key : settings.db,//cookie name
    cookie : { maxAge : 1000 * 60 * 60 * 24 * 30 }, //30 days
    store : new MongoStore({   //store 参数为 MongoStore 实例，把会话信息存储到数据库中，以避免丢失
        db : settings.db,
        host : settings.host,
        port : settings.port
    })
}))

var app = express();
// 生成一个express实例app

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// 设置views文件夹为存放视图文件的目录 即存放模板文件的地方
// __dirname 为全局变量 存储当前正在执行的脚本所在的目录

app.set('view engine', 'ejs');
// 设置视图模板引擎为ejs

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
// 加载日志中间件
app.use(bodyParser.json());
// 加载解析json的中间件
app.use(bodyParser.urlencoded({ extended: false }));
// 加载解析urlencoded请求体的中间件
app.use(cookieParser());
// 加载解析cookie的中间件
app.use(express.static(path.join(__dirname, 'public')));
// 设置public文件夹为存放静态文件的目录

app.use('/', index);
app.use('/users', users);
// 路由控制器
// 官方给出的写法是在 app.js 中实现了简单的路由分配，然后再去 index.js 中找到对应的路由函数，最终实现路由功能

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 第二种写法
routes(app);
//


module.exports = app;
