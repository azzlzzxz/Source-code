// 模块
//1) 解决命名冲突问题 不能解决变量重名问题
//2) 会污染全局变量
//3) 自执行函数来实现

// 浏览器 请求时异步的 amd cmd
// node 中时如何实现的：
let a = require('./a');
// ===>
let a = (function() {
    function sum() {}
    module.exports = sum;
    return module.exports;
})()