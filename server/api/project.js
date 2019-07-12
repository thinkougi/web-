var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    res.json(ret);
  }
};

router.get('/projectList', (req,res)=>{
  var sql = $sql.project.select3;
  conn.query(sql, function (error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    res.send(results).end();
  })
});



module.exports = router;
