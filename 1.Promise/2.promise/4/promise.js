class Promise {
    constructor(executor) {
        this.status = "pending";
        this.value;
        this.reson;
        this.resolveCallbacks = [];
        this.rejectCallback = [];
        const resolve = (value) => { //主要作用是改变当前promise的状态
            if (this.status === "pending") {
                this.status = "fulfilled";
                this.value = value;
                this.resolveCallbacks.forEach(fn => fn());
            }
        }
        const reject = (reson) => { //主要作用是改变当前promise的状态
            if (this.status === "pending") {
                this.status = "rejected";
                this.reson = reson;
                this.rejectCallback.forEach(fn => fn())
            }
        }
        try { //executor内部执行时有可能会抛错，所以用try catch
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }
    then(onfulfilled, onrejected) { //onfulfilled/onrejected的返回值会传递给p2的成功
        let promise2 = new Promise((reslove, reject) => {
            // 当then方法调用后需要返还一个新的promise
            //只要一 new promise 代码会立即执行 不会影响下面的执行
            //promise2 resolve 一调用就会走 then的onfulfilled方法
            if (this.status === "fulfilled") {
                let x = onfulfilled(this.value); //100想传下去，必须要走p2的resolve
                //这里x是普通值还是promise？如果是promise呢？
                console.log(this.value, "传值"); //1000
                reslove(x);
            }
            if (this.status === "rejected") {
                let x = onrejected(this.reson);
            }
            if (this.status === "pending") {
                this.resolveCallbacks.push(function() {
                    let x = onfulfilled(this.value)
                })
                this.rejectCallback.push(function() {
                    let x = onrejected(this.reson)
                })
            }
        })
        return promise2
    }
}
module.exports = Promise;