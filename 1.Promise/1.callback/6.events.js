// 发布订阅模式   redux promise
// 发布 =》 触发某件事
// 发布 和 订阅 没有关系 主要靠中间件/代理 实现的
// 发布 =》 中间代理 《=订阅
let fs =require("fs");
function Events(){
    this.callbacks=[];//存放所有的回调 ，每次on的时候都把回调放进去
    this.results=[];
}
Events.prototype.on=function(callback){// 订阅
    this.callbacks.push(callback); //on是同步调用, 什么时候执行？=》emit的时候(emit是异步，on也是异步)
    // 订阅的时候收集函数
}
Events.prototype.emit=function(data){// 发布
    this.results.push(data);
    this.callbacks.forEach(c=>c(this.results));// 发布时让所有的函数依次执行，并且把每次发布的结果都传到当前的每个回调函数的参数中去
}
let e = new Events();
e.on(function(arr){ // 先订阅
    if(arr.length === 3) console.log(arr); // 要拿到最后的结果
})
e.on(function(arr){ 
    if(arr.length === 3) console.log(arr); 
})
fs.readFile("./name.txt","utf8",function(err,data){
    e.emit(data);// 每次调用完后 都发布一下 把数据发出去
});
fs.readFile("./age.txt","utf8",function(err,data){
    e.emit(data);
});
fs.readFile("./age.txt","utf8",function(err,data){
    e.emit(data);
});

// 观察者模式   发布订阅模式
// 观察者模式 是包含 发布订阅模式的  (观察者模式是基于发布订阅模式的)
// 区别
// 观察者模式  vue(观察数据的变化，数据一变就刷新视图) 
// 观察者和被观察者 (如果被观察者数据变化了 通知观察者)(观察者和被观察者是有关系的 要把观察者放到被观察者中)
// 发布订阅模式 (你通知变 大家才变) (发布 和 订阅 是没关系的)