// import { a, b } from "./c";
// let c = 1;
// export { a, b, c };
// ===>连写

// export { a, b } from './c';
export * from './c'; //导入直接导出 一版用在写类库中
let c = 1;
// console.log(a,b);// 这么写 在这个文件中就拿不到 a b 了
export { c };

// export import 基本都在 webpack下用，在浏览器里也可以 但是兼容性不好