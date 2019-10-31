// Object.defineProperty get/set 
// 不能监听数组的 变化

// proxy 兼容性 不好
// 支持数组和对象
let obj = {
    name: "sxx",
    age: { n: 1 }
}
let arr = []

// obj.age = 25; // 这个属性是后加的 defineProperty 不能去拦截他
// defineProperty 只能循环有的属性 
// 如果对象上不存在某个属性 不能用defineProperty 去拦截
// Object.defineProperty 是循环对象里的某一个key属性 进行重新定义
// 使用 vue 的时候 必须先保证先声明 再使用 vm.$set()

// 创建一个代理
// let proxy = new Proxy(
//     obj,
//     // arr, 
//     { // defineProperty:{}
//         // proxy 可以完整的代理这个对象 只要 你对这个对象 进行get/set操作
//         // 拦截这个对象的 get 和 set 方法
//         get(target, key) {
//             // target 是 obj
//             // key 是obj的属性
//             // return target[key] ===>等价于
//             return Reflect.get(target, key);
//             // proxy 与 reflect 连用
//             // Reflect (反射) 把原对象的值 反射出去
//         },
//         set(target, key, value) { // value 设置的值
//             console.log("update", key);
//             if (key === "length") return true; //只想触发一次 屏蔽length触发的update(已经改好了)
//             console.log("UPDATE")

//             // target[key] = value;
//             return Reflect.set(target, key, value);
//         }
//     });

//对这个对象操作时 都通过代理去操作

// console.log(proxy.name);
// proxy.age = 25;
// console.log(obj);
// proxy.push("123"); //会触发两次update，第一次是改变索引的值，第二次是改变length的值

// Reflect keys get set reflect知识语法糖

// 怎么代理多层对象 ,proxy 实现深度代理  vue 3.0
let handler = {
    get(target, key) {
        if (typeof target[key] === "object") { //判断值是不是对象
            return new Proxy(obj, handler)
        }
        return Reflect.get(target, key);
    },
    set(target, key, value) {
        if (key === "length") return true;
        console.log("UPDATE")
        return Reflect.set(target, key, value);
    }
}
let proxy = new Proxy(obj, handler);

proxy.age.n = 100;
console.log(obj)