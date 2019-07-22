// js是单线程:同一时间只能执行一件事  单线程=》主线程
// setTimeout , ajax ,click 等不属于主线程之内 他们是在开辟一天线程去执行
// 进程中包含线程
// 打开浏览器 每个tab页都是进程 (一个页面挂了 不会影响其他页面)
// 主线程 执行时 内部两条常用的线程 ui js(这两条线程互斥)
// 如果js时多线程会出现哪些问题？
// 默认代码执行的时候 会在执行栈中执行
// 默认代码执行时 会产生一个全集作用域 在最下面

//执行上下文 作用域
// js 是静态作用域
//作用域是 定义的时候产生的 (这个函数定义在哪 作用域就在那 b在a里定义 b在a的作用域下)
//执行上下文 当执行这个函数时 会产生执行上下文 并把执行上下文放到栈结构中管理

function a() {
    let x = 1;

    function b() {
        console.log(x); //作用域链(定义的时候b是在a作用域下，可以去a作用域下的东西)

        function c() {

        }
        c();
    }
    b();
};
a(); //调用a 会产生一个执行上下文 执行上下文会放到 执行上下文栈中
// 执行上下文 是被栈管理的 =》所以说 执行代码时是栈结构 每次调用都会把当前的执行上下文栈 放进去
// 代码执行完 怎么销毁(执行顺序是 a,b,c) 销毁顺序是c,b,a(出栈) 全局是在页面关闭时再出栈销毁
// 栈 先进的后出去
// 队列 [].push() 先进先出 [].shift()

setTimeout(() => {
    console.log(0);
})
setTimeout(() => {
    console.log(1);
})
setTimeout(() => {
    console.log(2);
})
Promise.resolve().then(() => { // promise setTimeout
    console.log('then')
});
console.log('logger');


// ---------
setTimeout(() => {
    console.log('settimeout1')
    Promise.resolve().then(() => {
        console.log('then1')
    })
    Promise.resolve().then(() => {
        console.log('then2')
    })
    Promise.resolve().then(() => {
        console.log('then3')
    })
})
setTimeout(() => {
    console.log('settimeout2')
})

Promise.resolve().then(() => {
    console.log('then2')
})

// 浏览器在执行script脚本的时候 就是一个宏任务
//主栈是个宏任务

//1.主栈 当主栈执行完成后 会清空then的队列 依次清空 清空之后取出一个回调执行
//2 定时器 定时器里可能存在then方法 执行完后 在清空then的队列
//3 then 
//都是放到主栈里去执行

// 宏任务：ui渲染 script 事件 ajax setimeout
// 微任务 promise.then