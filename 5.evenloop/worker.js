//每个线程里都会有一个变量名 self(相当于this) 表示当前的这条线程
let sum = 0;
for (let i = 0; i < 1000000; i++) {
    sum += i;
}
self.postMessage(sum)