// 解构赋值
// 结构相同 可以通过相同的结构来取值
// let {name,age}={name:"sxx",age:25};
// let {name:n,age}={name:"sxx",age:25};
// let obj={name:"sxx",age:25};
// let n=obj.name;
// let age=obj.age;

let {length}=[];//对象和数组都有length属性
console.log(length)//0
let [name,age]=["sxx",25];//数组的解构赋值是依据索引相同
let [,age]=["sxx",25];//数组省略第一项

//对象展开 ...
// ... 展开运算符,剩余运算符(可以在函数中使用,可以在解构中使用)
let arr = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr,...arr2];
let obj = {name:'zf'};
let obj1 = {age:9};
let obj2 = {...obj,...obj1}
console.log(obj2);//{ name: 'zf', age: 9 }

// 剩余运算符必须放在最后，有收敛的功能，会把剩下的内容重新组装
let [,...args]=["sxx",12,13,14];
console.log(args);//[ 12, 13, 14 ]
let {name,...obj} = {name:'zf',age:10}
console.log(obj);//{ age: 10 }

//将类数组转化成数组
// 1.Array.from 2.[...arguments]
function Convers(){
    //Array.from 会根据长度遍历每一项，变成数组
    console.log(Array.from({0:1,1:2,length:2}))
}
Convers();//[ 1, 2 ]

function Convers(){
    // ...是通过迭代器来实现的
    console.log([...{0:1,1:2,length:2}])
}
Convers();//报错

// Array.from [...{}]区别  
// [...{}] 想用这种来把对象转成数组 ...展开的对象 必须有 Symbol.iterator 方法

function Convers(){
    console.log([...{0:1,1:2,length:2,[Symbol.iterator](){//生成器函数 generator
        let i=0;
        return{//返回迭代器
            next(){
                return {value:1,done:++i==5} //[ 1, 1, 1, 1 ]
            }
        }
    }}])
}
Convers();

function Convers(){
    console.log([...{0:1,1:2,length:2,[Symbol.iterator]:function * (){//生成器函数 generator
        // 不停的yield值
        let i=0;
        while(this.length!==i) {
            yield this[i++]
        }
    }}])
}
Convers();

// for of 去遍历拥有Symbol.iterator方法的数组
// 类数组拥有 索引 长度 Symbol.iterator迭代方法

// {...obj1,...obj2} 覆盖的作用域
// 属性相同 以后为准 后覆盖前

