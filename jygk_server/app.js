//app.js
//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public 
app.use(express.static("public"));
//5:加载跨域访问模块
const cors = require("cors");
//6:配置跨域访问模块 那个域名跨域访问允许
//  脚手架8080允许
//origin      允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//6.1:下载 express-session 并且配置
const session = require("express-session");
app.use(session({
  secret:"128位随机字符", //安全字符串
  resave:false,          //每次请求是否都更新数据
  saveUninitialized:true, //初始化时保存数据
  cookie:{
    maxAge:1000 * 60 * 60 * 8
  }
}));


//7:加载第三方模块 body-parser
//body-parser 针对post请求处理请求参数
//如果配置成功 req.body..
const bodyParser = require("body-parser");
//8:配置对特殊 json是否是自动转换 不转换
app.use(bodyParser.urlencoded({extended:false}))


// 功能：
//给小程序首页返回轮播图数据
app.get("/imageList",(req,res)=>{
  var rows = [
    {code:1,img_url:"http://127.0.0.1:3000/img/index/banner.png"},
    {code:2,img_url:"http://127.0.0.1:3000/img/index/banner.png"},
    {code:3,img_url:"http://127.0.0.1:3000/img/index/banner.png"},
    {code:4,img_url:"http://127.0.0.1:3000/img/index/banner.png"},
  ];
  res.send(rows);
})
//返回小程序公告栏列表
app.get("/msgList",(req,res)=>{
  var rows = [
    { url: "url", title: "温馨提示",msg:"2019高考新政策来了" },
    { url: "url", title: "热门讲师",msg:"优秀教师高晓松《奋战最后一秒》讲授" },
    { url: "url", title: "温馨提示",msg:"2019高考新政策来了" },
    { url: "url", title: "热门讲师",msg:"优秀教师高晓松《奋战最后一秒》讲授" },
    { url: "url", title: "温馨提示",msg:"2019高考新政策来了" },
    { url: "url", title: "热门讲师",msg:"优秀教师高晓松《奋战最后一秒》讲授" },
    { url: "url", title: "温馨提示",msg:"2019高考新政策来了" },
    { url: "url", title: "热门讲师",msg:"优秀教师高晓松《奋战最后一秒》讲授" }
  ];
  res.send(rows);
})
