// es6 模块  node模块
// 模块化的好处 ：封装 保护变量名不冲突
// es6模块 与 node模块的区别：
// 1.node模块 commonjs规范 （动态：代码执行时可以动态引入，代码块中动态导入）
// 2.es6模块 是 esmodule （静态：在最外层导入，使用）
// 模块的功能：导入(import) 导出(export)

// import { a, b } from './a'; //每次拿到的是接口

// setInterval(() => {
//     console.log(a, b);//拿的是a接口通过接口取找值
// }, 1000);

// import _, { c, b } from './a'; // _ 就代表default默认导出的
// console.log(c, b)

// import * as obj from './a'; //全部导入到obj里
// console.log(obj.default)

import * as obj from './useC';
// import 有声明的功能 和var很像(代表这 能变量提升 但是 obj 不能重复声明 否则会报模块解析失败)
console.log(obj)

// 实验型语法里 import() 动态的导入
if (true) { //搭配webpack使用实现代码分割
    import ("./a").then(data => {
        // import 返回的是个promise
        console.log(a)
    })
    import ( /* webpackChunkName:"MyFile" */ "./a").then(data => {
        // /* webpackChunkName:"MyFile" */ "./a" 更改打包文件名
        console.log(a)
    })
}