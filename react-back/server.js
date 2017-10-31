var express = require("express");
var app = require('express')();
var fs = require("fs");
app.use(express.static('build'));

app.post('/api/login',function(req,res){
   res.json({
   	  code:0,
   	  msg:"成功！"
   })
})
app.get('/api/user',function(req,res){
     console.log("来吧");
     fs.readFile("./data/moke.json",function(err,data){
         if(err){
             return
         }
         else{
             console.log("in");
             var data = data.toString();
             var data=JSON.parse(data);
             var result = data;
             res.json({
                 code:0,
                 msg:"成功了！",
                 arr:result
             });
         }
     })
})

app.listen(8848);