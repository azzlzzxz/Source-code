class Promise{
    constructor(executor){
        this.status="pending";//默认当前状态是等待态
        this.value;// 为什么成功
        this.reson;// 为什么失败
        // 表示成功的函数
        const resolve=(value)=>{
            // 只有是等待态的时候 才能更改状态
            if(this.status==="pending"){
                this.status="fulfilled";
                this.value=value;
            }
        }
        // 表示失败的函数
        const reject=(reson)=>{
            if(this.status==="pending"){
                this.status="rejected";
                this.reson=reson;
            }
        }
        // 默认会调用执行的函数
        executor(resolve,reject);
    }
    then(onfulfilled,onrejected){// 成功的回调 失败的回调
        // 如果状态是成功的时候
        if(this.status==="fulfilled"){
            onfulfilled(this.value); //onfulfilled与resolve不是同一个函数
        }
        if(this.status==="rejected"){
            onrejected(this.reson);
        }
    }
}
module.exports=Promise;