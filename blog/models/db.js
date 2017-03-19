var settings = require('../setting'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
    module.exports = new Db(settings.db, new Server(settings.host, settings.port), { safe : true });

// 其中通过new Db（settings.db, new Server(settings.host, settings.port), { safe : true }）;
// 设置数据库名 数据库地址 和 数据库端口 创建一个数据库连接实例 并通过module.exports导出该实例
// 这样我们就可以通过require这个文件来对数据库进行读写了
//
// 完成这步以后还需要在app.js var routes = require('./routes/index');下添加
// var settings = require('./settings')
