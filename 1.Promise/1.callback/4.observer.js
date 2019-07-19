// 观察者可能会有很多
// 被观察者
class Subject{ // 宝宝 好=》不好
    constructor(name){
        this.name=name;
        this.observers=[];// 存放所有的 观察者  观察者要存放在被观察者中
        this.state="好";
    }
    // 被观察者要提供一个接受 观察者的 方法
    attach(observer){ // attach 就是个订阅
        this.observers.push(observer);// 存放所有的观察者
    }
    setState(newState){ // 更改被观察者的状态
        this.state=newState;
        this.observers.forEach(o=>{o.update(newState)});// 状态一更新，就会发布
    }
}

// 要把观察者 注册到 被观察者中

// 观察者
class Observer{
    constructor(name){
        this.name=name;
    }
    update(newState){ // 用来通知所有的观察者 状态更新了
        console.log(this.name+"说宝宝"+newState);
    }
}

let sub = new Subject("宝宝");
let o1 = new Observer("爸爸");
let o2 = new Observer("妈妈");
sub.attach(o1);
sub.attach(o2);
sub.setState("不好");

// 1) 异步的缺陷
// 基于回调，回调多了就恶心了，导致代码不好维护，导致回调地狱
// 错误问题 不好捕获错误 ，不能使用 try-catch
// 同步"异步请求" 需要自己维护计数器
// 代码不优雅

// promise 解决这些问题