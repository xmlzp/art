const express=require('express');
var mysql = require('mysql');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//添加路由
//1.注册路由
router.post('/shopping',function(req,res){
    var shopp =req.body;
    console.log(shopp);
    if(shopp === ''){
        res.send({code:404})
    }
    pool.query(`INSERT INTO shopping SET ?`,[shopp],function(err,result){
        if (err) {
            data.code = 500
            data.msg = err
        };
        data = result
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    })
})
router.get('/change',function(req,res){
    let cartNum = req.query.cartNum
    console.log(req.query.cartNum)
    let shppid =req.query.shppid
    console.log(shppid)
    pool.query(`UPDATE shopping SET cartNum = ${cartNum} WHERE shppid = ${shppid}`,function(err,result){
        if (err) {
            data.code = 500
            data.msg = err
        };
        data = result
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    })
})
router.get('/sum', function (req, res, next) {
    //增删改查之后查询，并把查询的最终数据返回前端
    pool.query(`SELECT id, img, cartNum, name, shppid, price FROM shopping`, function (err, result) {
        if (err) {
            data.code = 500
            data.msg = err
        };
        data = result
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});
// router.post('/change',function(res,req){
//     // let cartNum = req.query.cartNum
//     // console.log(cartNum)
//     // let shppid =req.query.shppid
//     // console.log(shppid)
//     var sh =req.body;
//     console.log(sh);
//     pool.query(`UPDATE shopping SET cartNum = ${cartNum} WHERE shppid = ${shppid}`,function(err,result){
//         if(err){
//             data.code = 500
//             data.msg = err
//         }
//     })
// })
router.get('/historyList', function (req, res, next) {
    let tmpId = req.query.userId
    //增删改查之后查询，并把查询的最终数据返回前端
    pool.query(`SELECT id, name, img, details, price FROM inexs`, function (err, result) {
        if (err) {
            data.code = 500
            data.msg = err
        };
        data = result
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});
router.get('/details',function(req,res){
    let tmpId = req.query.id
    console.log(tmpId)
    pool.query(`SELECT * FROM inexs where id=${tmpId}`,function(err,result){
        if (err) {
            data.code = 500
            data.msg = err
        };
        data = result
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'ap1plication/json');
        res.send(JSON.stringify(result));
    })
})
//删除购物车的数据
router.get('/delece',function(req,res){
    pool.query(`DELETE FROM shopping`,function(err,result){
        if (err) {
            data.code = 500
            data.msg = err
        };
    })
})
//导出路由器对象
module.exports=router;