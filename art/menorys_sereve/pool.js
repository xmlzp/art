//引入mysql模块
const mysql=require('mysql');
//创建连接池
var pool=mysql.createPool({
  host:'localhost',
  port:'3306',
  user:'root',
  database:'memorys',
  connectionLimit:20
});
//导出连接池对象
module.exports=pool;




