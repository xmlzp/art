const express=require('express');
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入用户路由器
const userRouter=require('./routes/user.js');
const indexRouter=require('./routes/index.js')
//创建web服务器
var app=express();
//监听端口
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.listen(3000);
//托管静态资源到public目录下
app.use( express.static('public') );
//使用body-parser中间件
app.use( bodyParser.urlencoded({
  extended:false
}) );

//使用路由器，挂载到/user下
// /user/reg
//index/home
app.use('/user',userRouter);
app.use('/index',indexRouter)