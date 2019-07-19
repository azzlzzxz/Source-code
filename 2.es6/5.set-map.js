// set map 里不能发重复类型 
// set map 是数据结构
let s = new Set([1, 2, 3]);
// set 具备symbol.iterator 所以set是可以迭代的
console.log([...s]); //[ 1, 2, 3 ]
s.add(3)
console.log(s); //Set { 1, 2, 3 }
console.log(s.entries()); //Object.keys Object.values Object.entries
s.forEach(s => {
    console.log(s)
})
console.log(s.has(2)); //true

// 数组去重 交集 并集 差集
let arr1 = [1, 2, 3, 4, 1, 3];
let arr2 = [3, 5, 7, 3, 4, 6];

function union() {
    let s = new Set([...arr1, ...arr2]);
    return [...s];
}
console.log(union()); //[ 1, 2, 3, 4, 5, 7, 6 ]

function intersection() {
    let s1 = new Set(arr1);
    let s2 = new Set(arr2);
    // filter 返回true 表示留下
    return [...s1].filter(item => {
        return s2.has(item)
    })
}
console.log(intersection()); //[ 3, 4 ]

function different() {
    let s1 = new Set(arr1);
    let s2 = new Set(arr2);
    // filter 返回true 表示留下
    return [...s1].filter(item => {
        return !s2.has(item)
    })
}
console.log(different()); //[ 1, 2 ] 
//对象是不能去重的 因为对象没有重复的key

//map map里放的都是二维数组
let map = new Map([
    ["name", 2],
    ["age", 22]
]);
console.log(map); //Map { 'nam2' => 2, 'age' => 22 }
map.set("name", 33)
console.log(map); //Map { 'name' => 33, 'age' => 22 }
console.log(map.get("name")); //33

//weakMap 弱引用
// v8 垃圾回收机制

class MyFn {};
let mf = new MyFn();
let map = new Map();
map.set(mf, "ok")
mf = {} //map 里还在引用mf 这是mf还在没有被销毁 等map也释放掉 mf就会被销毁
console.log(map); //Map { MyFn {} => 'ok' }
//例子 =》index.html