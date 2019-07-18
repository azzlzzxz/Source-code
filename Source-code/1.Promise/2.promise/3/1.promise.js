// Promise 链式调用
let fs =require("fs");
function read(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,"utf8",(err,data)=>{
            if(err) reject(err);
            resolve(data);
        })
    })
}
// 1) 如果then方法返回的是一个常量包括undefined 会把这个结果传递给外层的then的成功的结果
// 2) 如果then方法抛出异常 会走到下一次then的失败的结果
// 3) 穿透 如果没有处理错误 会继续向下找 (如果找不到错误处理，就会报错警告) 会就近查找错误处理函数 如果找不到会一直找 一般写个catch函数作为错误处理的兜底 catch是不会中断运行的
// 4) then 方法执行后可能返回一个promise 那么会采用这个promise的返回结果作为下一个then的成功或者失败
// 5) 走失败的两种可能：1.发生错误 2.返回一个失败的promise
// 6) finally 方法 es9的 不会中断执行 只是传递一个一定会执行的函数而已

// promise 实现链式调用 靠的是返回一个新的promise 因为promise的状态 一旦确定 就不能更改

// read("./name.txt")
//     .then((data)=>{
//         // return 100
//         throw new Error("err") 
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .then(data=>{
//         console.log(data);
//     })
//     .catch(err=>{
//         console.log("catch",err)
//     })
//     .then(data=>{
//         console.log(data);
//     })
read("./name.txt")
    .then(data=>{
        return read(data)
    })
    .then(data=>{
        console.log(data)
    },err=>{
        console.log(err)
    })
    .finally(()=>{
        console.log("finally")
    })