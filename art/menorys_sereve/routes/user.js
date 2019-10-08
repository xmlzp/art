const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.注册路由
router.post('/reg',function(req,res){
  //1.1获取post请求的数据
  var obj=req.body;
  console.log(obj);
  //1.2验证每一项是否为空
  //如果用户名为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	//结束函数执行
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  if(!obj.phone){
    res.send({code:403,msg:'phone required'});
	return;
  }
  if(!obj.email){
    res.send({code:404,msg:'email required'});
	return;
  }
  //1.3执行SQL语句
  pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
    if(err) throw err;
	//console.log(result);
	//如果插入成功
	if(result.affectedRows>0){
	  res.send({code:200,msg:'reg suc'});
	}
  }); 
});
//2.登陆路由
router.post('/login',function(req,res){
  //2.1获取数据

  //2.2验证数据是否为空

  //2.3执行SQL语句
  res.send('登陆成功');
});




//导出路由器对象
module.exports=router;