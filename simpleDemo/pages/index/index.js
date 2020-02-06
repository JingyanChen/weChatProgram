//index.js

var param = {
  data:{
    mytext:'Hello World',
  }
};
//注册一个页面,param是一个参数
//这个参数会传到index.wxml文件中，把param.data.mytext替换到index.wxml中去
Page(param)