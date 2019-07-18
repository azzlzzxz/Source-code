// let Promise=require('./promise');
let promise2 = new Promise(function(resolve,reject){
    // throw new Error("错了");//执行时可能会发生异常，那就内部将错误异常作为原因，让promise变成失败态
    setTimeout(()=>{
        resolve("成功");
    },1000);
});
//发布订阅模式
//一个promise实例可以then多次，分别绑定成功和失败，当触发resolve和reject的时候，触发对应的成功和失败
//如果是等待态，先把函数存起来，到时候依次执行
promise2.then(function(value){
    console.log("success",value);
},function(reson){
    console.log("fail",reson);
});
promise2.then(function(value){
    console.log("success",value);
},function(reson){
    console.log("fail",reson);
});
