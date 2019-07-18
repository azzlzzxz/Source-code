// 浅拷贝 ... Object.assign()
// 如果是多层就是浅拷贝 如果是一层就是深拷贝
let obj={name:"sxx",age:{n:25}}
let obj1={...obj}
let obj2=Object.assign(obj)
obj1.age.n=18;
obj2.name="ws"
console.log(obj);//{ name: 'ws', age: { n: 18 } }

//深拷贝
// 方法一
console.log(JSON.parse(JSON.stringify(obj)));//方法有缺陷，不支持undefined、function、reg、Date等等

// 方法二 递归拷贝(类型判断)
function deepClone(value){
    if(value==null)return value;
    if(value instanceof RegExp) return new RegExp(value)
    if(value instanceof Date) return new Date(value)
    //函数是不需要拷贝的
    if(typeof value !="object") return value
    //区分对象和数组 Object.prototype.toString.call
    let obj= new value.constructor()
    for (const key in object) {//in 会遍历当前对象上的属性 和 __proto__指代的属性
        if (value.hasOwnProperty(key)) {//不拷贝 对象的__proto__上的属性(不要公有的)
            //如果值还有可能是对象 就继续拷贝
            obj[key] = deepClone(value[key]);           
        }
    }
    return obj;

}

let o={};
o.x=o
let o1=deepClone(o);//如果这个对象拷贝过了 就返回那个拷贝的结果就可以了
console.log(o1)
