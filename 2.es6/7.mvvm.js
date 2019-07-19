function update() {
    console.log("数据变化了~~~ mock update view")
}
// let obj = {
//     name: 100
// }
// let obj = {
//     name: { n: 100 }
// }
let obj = [1, 2, 3];

//变异方法 push,pop,shiift,unshift,reverse,splice

//=>Object.defineProperty
let oldProto = Array.prototype;
let proto = Object.create(oldProto); //克隆了一份
["push", 'shift'].forEach(item => {
    proto[item] = function() {
        //重写了原有的方法 
        update(); //我自己的方法逻辑
        oldProto[item].apply(this, arguments); //还调用原来的逻辑
    }
});

function observer(value) { //数据劫持概念 新版用proxy reflect
    if (Array.isArray(value)) {
        //AOP
        //重写 这个数组里的 push,pop,shiift,unshift,reverse,splice
        return value.__proto__ = proto;
    }
    if (typeof value !== "object") {
        // value 不是对象 vue也没法监控 所以data是对象
        return value
    }
    for (let key in value) {
        defineReactive(value, key, value[key]); //在内部产生一个作用域
    }
}

function defineReactive(obj, key, value) { //value(会被私有化 相当于第三方变量) 成为当前作用域下的不销毁的值
    observer(value); //value如果是对象 继续增加getter和setter
    Object.defineProperty(obj, key, {
        get() {
            return value
        },
        set(newValue) {
            if (newValue !== value) {
                observer(newValue) //设置的值也可能是对象
                value = newValue;
                update()
            }
        }
    })
}
observer(obj)

//AOP
// obj.name = 200; //数据变了 需要更新视图
// obj.name.n = 200; //数据变了 需要更新视图
// obj.name = { n: 200 }; //数据变了 需要更新视图 深度监控

obj.push(123);
console.log(obj)