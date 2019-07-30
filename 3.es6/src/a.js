// export 只能导出一个接口(接口：通过一个渠道取值)
// let a = 1;
// export a;错误
// export let a = 1; //导出的是a变量
// export let b = 2;
let a = 1;
let b = 2;
let obj = { a, b } //a:a 对象的简写

// 一起导出 a，b 两个接口
// setInterval(() => {
//     a++
// }, 1000);
// export { a, b }

//as 语法可以重命名
export { a as c, b } //重命名

//default 导出的是值 不是变量
export default "hello";
// export default =>{b as default}