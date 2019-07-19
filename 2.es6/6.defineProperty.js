//defineProperty 定义属性
//getters setter 属性访问器(访问某个属性就会去调这两个方法)

let obj = {
    _body: '', //两个方法需要同一个属性值 可以通过第三方变量 ( 加下划线 标识私有的不应该被外部获取到 )
    get url() { //这个函数的返回值 就会作为调用这个属性的返回值
        // return 100;
        return this._body;
    },
    set url(value) { //给这个属性重新赋值会触发set value就是新的值
        this._body = value;
    }
}
obj.url = 200;
console.log(obj.url); //200

let obj1 = {};
Object.defineProperty(obj1, 'name', {
    value: 100
});
console.log(obj1.name); //100

let obj2 = {};
let other = '';
Object.defineProperty(obj2, 'name', {
    enumerable = true, //是否可枚举
    configurable: true, //是否可修改
    // writable: true, //是否可写和 value 连用
    get() {
        return other;
    },
    set(val) {
        other = val
    }
});
obj2.name = "200";
console.log(obj2.name) //200

//拦截的作用(defineProperty实现vue的数据拦截)