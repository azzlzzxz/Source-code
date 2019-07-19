class Promise{
    constructor(executor){
        this.status="pending";//默认当前状态是等待态
        this.value;// 为什么成功
        this.reson;// 为什么失败
        this.resolveCallbacks=[];//存放异步状态下成功的函数
        this.rejectCallback=[];//存放异步状态下失败的函数
        // 表示成功的函数
        const resolve=(value)=>{
            // 只有是等待态的时候 才能更改状态
            if(this.status==="pending"){
                this.status="fulfilled";
                this.value=value;
                this.resolveCallbacks.forEach(fn=>fn());//发布
            }
        }
        // 表示失败的函数
        const reject=(reson)=>{
            if(this.status==="pending"){
                this.status="rejected";
                this.reson=reson;
                this.rejectCallback.forEach(fn=>fn())
            }
        }
        // 默认会调用执行的函数
        try{
            executor(resolve,reject);
        }catch(e){
            reject(e);
        }
    }
    then(onfulfilled,onrejected){// 成功的回调 失败的回调
        // 如果状态是成功的时候
        if(this.status==="fulfilled"){
            onfulfilled(this.value); //onfulfilled与resolve不是同一个函数
        }
        if(this.status==="rejected"){
            onrejected(this.reson);
        }
        if(this.status==="pending"){
            //先把成功的回调和失败的回调分开存放 =》 这是订阅
            this.resolveCallbacks.push(function(){
                //订阅，先把函数存起来，异步等待后，去通知，怎么发布，就调那个函数
                onfulfilled(this.value)
            })
            this.rejectCallback.push(function(){
                onrejected(this.reson)
            })
        }
    }
}
module.exports=Promise;