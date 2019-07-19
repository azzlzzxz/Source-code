//let const
// 尽可能使用 const如果这个值需要更改采用 let

// var 的问题
// 1. var 声明变量 声明到全局 污染全局变量
// 2. 变量提升 可以在声明之前调用 function var import
// 3. let/const 可以和{} 连用 块作用域
// 4. var能重复声明 在同一作用域下      

let a=1 //es6 环境下报错
{
    console.log(a); //暂存死区
    let a=2
}

const a=1;//const 不允许深度改变 只要不改变空间即可
a=100