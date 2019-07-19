//node 版本要求 7.6以上
//异步 主线程/主队列 执行后 才执行
let fs =require("fs");

//fs.readFile
//node 的特点回调函数的第一个参数是err 因为异步不能用 try catch
//1)异步不能用 try catch

// let d;
fs.readFile("./name.txt","utf8",function(err,data){
    console.log(data);//时忻序 能执行出来 这个bug是code runner 导致的 依据根目录为基准  =》 promise 正常应该是"../name.txt"
    // d = data;
})
// console.log(d);//undefined =>异步
fs.readFile("./age.txt","utf8",function(err,data){
    console.log(data);
})

//2)同步"异步的返回结果" 异步 "并行" paralle "串行" series  

// 串行
fs.readFile("./name.txt","utf8",function(err,data){//执行5s
    console.log(data);
    fs.readFile("./age.txt","utf8",function(err,data){//执行3s
        console.log(data);
    });
    //这样执行结果是 8s
});

// 并行
let arr=[]; //保证顺序统一
let i=0;
function fn(data,index){
    // arr.push(data);
    // if(arr.length===2){
    //     console.log(arr);
    // }
    arr[index]=data;
    if(++i===2){
        console.log(arr);
    }
}
fs.readFile("./name.txt","utf8",function(err,data){//执行5s
    fn(data,1);// 每个异步函数执行完后，调用一个回调通知完成了，将结果传入    
});
fs.readFile("./age.txt","utf8",function(err,data){//执行3s
    fn(data,0);
});
