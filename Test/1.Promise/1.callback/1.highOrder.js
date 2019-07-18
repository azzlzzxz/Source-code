//判断类型
//Object.prototype.toString.call() 可以判断对象和数组的类型
//为什么通过call调用Object.prototype.toString.call()和对象本身调用toString返回的结果不同？
//=>Bool、Number、String、Array、RegExp等类型的原型链上有相应的toString()方法，将Object.prototype.toString()覆盖（遮蔽）了。
let a="hello";
console.log(Object.prototype.toString.call(a))//[object Object]
console.log(Object.prototype.toString(a))//[object String]

function isType(obj,type){
    return Object.prototype.toString.call(obj).includes(type);
} 
//包装成高阶函数，批量生成函数
//高阶函数=》1.函数返回值是函数  2.函数参数是函数
//高阶函数可以预置参数
let b={};
console.log(isType(b,"Object"));
console.log(isType(b,"String"));

let types=["Number","String","Boolean","Null","undefined"];//把变量私有化到类型里面去
let fns={};
types.forEach(type=>{//批量生成方法
    fns["is"+type]=isType1(type);
    console.log(fns.isBoolean)
})
//高阶函数
function isType1(type){//type 是预置参数  type=="bollean" 
    return function (obj){
      console.log(type,obj);
      return Object.prototype.toString.call(obj).includes(type);
    }
}
let c=true;
console.log(fns.isBoolean(c));//isBoolean 是fns的属性，值是一个函数
//函数柯里化 =》函数的参数/返回函数的参数 永远是一个
//预置两个/多个 参数 =》偏函数
//都是高阶函数

//lodash 库 基本所有方法都是高阶函数 
//防抖节流会用到这个库
//有个after 方法