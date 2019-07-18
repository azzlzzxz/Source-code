// Promise 是一个类 new Promise 天生自带的
// Promise 含义：承诺  
// Promise 中有三个状态：成功态、失败态、等待态 (默认情况下 创建一个promise 是等待态)  fulfilled, rejected , pending
// promise 中会存放两个变量 分别 value 和 reson 
// promise 的实例上会有 then 方法

// 当创建一个promise的时候 需要提供一个执行器函数(executor)(参数resolve与reject都是函数) 此函数会立即执行

let promise =new Promise(function(resolve,reject){
    console.log(1);
});
console.log(2);// 1 2
// 默认等待态 可以转化成 成功或失败 状态更改后不能修改状态
let promise1 =new Promise(function(resolve,reject){
    resolve(456);// 456 =>value
    reject(123); // 123 => reson
});
console.log(promise1); // Promise { <rejected> 123 }

let Promise=require('./promise');
let promise2 = new Promise(function(resolve,reject){
    resolve(456);
    reject(123); 
});
promise2.then(function(value){
    console.log("success",value);
},function(reson){
    console.log("fail",reson);
});
