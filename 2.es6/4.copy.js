// 浅拷贝 ... Object.assign()
// 如果是多层就是浅拷贝 如果是一层就是深拷贝
let obj = { name: "sxx", age: { n: 25 } }
let obj1 = {...obj }
let obj2 = Object.assign(obj)
obj1.age.n = 18;
obj2.name = "ws"
console.log(obj); //{ name: 'ws', age: { n: 18 } }

//深拷贝
// 方法一
console.log(JSON.parse(JSON.stringify(obj))); //方法有缺陷，不支持undefined、function、reg、Date等等

// 方法二 递归拷贝(类型判断)
function deepClone(value, hash = new WeakMap) { //WeakMap 弱引用 不要用Map 会导致内存泄漏
    if (value == null) return value;
    if (value instanceof RegExp) return new RegExp(value)
    if (value instanceof Date) return new Date(value)
        //函数是不需要拷贝的
    if (typeof value != "object") return value
        //区分对象和数组 Object.prototype.toString.call
    let obj = new value.constructor();
    //说明是一个对象类型
    //如果这个对象拷贝过了 就返回那个拷贝的结果就可以了
    if (hash.get(value)) {
        // 去找hash表里有没有key是value，有则说明已经拷贝过了，那么直接就返回出去，没有则把value，obj放到weakMap里去映射
        return hash.get(value)
    }
    hash.set(value, obj);
    for (const key in value) { //in 会遍历当前对象上的属性 和 __proto__指代的属性
        if (value.hasOwnProperty(key)) { //不拷贝 对象的__proto__上的属性(不要公有的)
            //如果值还有可能是对象 就继续拷贝
            obj[key] = deepClone(value[key], hash);
        }
    }
    return obj;

}

let o = {};
o.x = o
let o1 = deepClone(o); //如果这个对象拷贝过了 就返回那个拷贝的结果就可以了
console.log(o1); //{ x: [Circular] }