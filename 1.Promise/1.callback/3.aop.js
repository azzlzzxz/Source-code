//AOP 面向切片编程 把原来的代码切成片，在中间加上自己的代码
//装饰器 扩展原有的方法 重写原有的方法

function say(who){
    console.log(who+"说话");
}
Function.prototype.before=function(fn){
    //this = say
    // return (who)=>{
    //     fn();
    //     this(who);
    // }
    let that=this;//that就是原来的say方法
    return function(){
        fn();
        that(...arguments);//es6展开运算符 把arguments参数展开依次传入
    }
}
let newFn=say.before(function(){//新增的函数
    console.log("说话之前")
});
newFn("我");

//回调解决的问题
//1)可以解决预置参数的问题 bind 预置参数
//2)解决异步问题