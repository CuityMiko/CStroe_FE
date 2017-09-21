/**
 * Created by 1 on 2016/5/16.
 */
var mongoose=require('mongoose');
var config=require('./db_url.js');

module.exports=function(){
    mongoose.connect(config.mongodb);
    require('../model/user.js');
    require('../model/news.js');
    require('../model/recruit.js');
    require('../model/quit.js');
    require('../model/feedback.js');
    var db = mongoose.connection
    db.on('error', console.error.bind(console, '连接错误:'));
    db.once('open', function() {
        console.log('连接成功');
    })
    return db;
}