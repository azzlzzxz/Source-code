console.log(global);//浏览器是默认不能访问global，通过window来代理的

// global window.window
// process 进程
// buffer (node为了实现2进制) 16进制(值是一样的，表现形式不一样)
// clearInterval clearTimeout
// setTimeout setInterval
// setImmediate clearImmediate
console.dir(global,{showHidden:true});//把global中不可枚举的现实出来

console.log(this);//{}module.exports 我们文件在执行时为了实现模块化 外面特意套了一层函数而且this的指向被改变
(function(){
    console.log(this);//global
})()