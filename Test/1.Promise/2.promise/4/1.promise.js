// Promise 链式调用
let Promise=require("./promise")
let fs =require("fs");
function read(url){
    return new Promise((resolve,reject)=>{
        resolve(1000)
        // fs.readFile(url,"utf8",(err,data)=>{
        //     if(err) reject(err);
        //     resolve(data);
        // })
    })
}
// promise实例 有resolve与reject方法
// then 有onfulfilled与onrejected方法
// 首先promise状态先变成成功/失败 =》再调用then方法 生成新的promise 把值传下去

//调用完then方法后返回一个新的promise p2是新的promise
let p2=read("./name.txt").then(data=>{
    return 100
})
p2.then(data=>{
    console.log(data)
})