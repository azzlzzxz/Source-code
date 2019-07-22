// 浏览器在执行script脚本的时候 就是一个宏任务
// 宏任务：ui渲染 script 事件 ajax setimeout
// 微任务 promise.then

// vue.$nextTick 在当前页面渲染之后 在执行此方法

// 事件环 宏任务 微任务

// promise.then 微任务 
// mutationObserver 微任务（H5的 DOM4定义的）
// setImmdiate 立即

// setTimeout 宏任务
// MessageChannel (消息通道) 宏任务