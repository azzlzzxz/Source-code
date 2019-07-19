// Symbol 独一无二
let s1=Symbol("my");//描述这个symbol  描述符一般是 数字 或 字符串 内部会将描述符 toString
let s2=Symbol("my");

let obj={
    [s2]:1//如果这个属性是用 symbol 声明的 ，不可枚举
}
console.log(obj);//{ [Symbol(my)]: 1 }
console.log(obj[s2]);//1
console.log(s1===s2)//false
for(let key in obj){
    console.log(obj[key])//没有
}
console.log(Object.keys(obj));//[]
console.log(Object.getOwnPropertySymbols(obj));//[ Symbol(my) ] 这个是symbol 的object.keys()

// Symbol.for
let s3=Symbol.for("xxx"); //如果有这个 symbol 并不会重新声明的
let s4 =Symbol.for("xxx"); 
console.log(s3===s4);//true 根据for里面的 值 去判断
console.log(Symbol.keyFor(s3));//xxx

//js 中的原始类型 string number boolean undefiined null symbnol
//复杂类型 object

// Symbol 具备原编程的分功能 想改变默认系统级方法
// 11种

//可以通过Symbol 去变成私有属性
//默认js中没有私有属性