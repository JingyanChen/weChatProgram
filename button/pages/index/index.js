//index.js
//获取应用实例
var count =0;
var param ={
  data:{
    clickMsg:'显示点击内容'
  },
  //参数e是返回的参数，比如何时被点击，谁被点击，被点击的位置是什么
  clickMe : function(e){
    console.log(e);
    count++;
    param.data.clickMsg = '显示点击内容' + e.currentTarget.id + '点击次数' + count;

    this.setData(param.data);
  },

  doloading : function(e){
    param.data.clickMsg = '按钮被按下 id = ' + e.currentTarget.id + 'datat-hi = '+ e.currentTarget.dataset.qf + '点击次数 ' + count;

    this.setData(param.data);
  }
};
Page(param);