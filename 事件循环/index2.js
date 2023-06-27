//第一个宏任务
setTimeout(() => {
  console.log(1); //宏任务中的同步任务
  Promise.resolve().then(() => {
    console.log(7);
  }); //宏任务中的微任务
}, 0); //异步任务 - 宏任务

console.log(2); //同步任务

Promise.resolve().then(() => {
  console.log(3);
}); //异步任务 - 微任务

//第二个宏任务
setTimeout(() => {
  console.log(8); //宏任务中的同步任务
  setTimeout(() => {
    console.log(5);
  }, 0); //宏任务中的宏任务 第四个宏任务
}, 0);

//第三个宏任务
setTimeout(() => {
  Promise.resolve().then(() => {
    console.log(4);
  }); //宏任务中的微任务
}, 0);

console.log(6); //同步任务
