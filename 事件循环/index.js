function a() {
  console.log(1);
  new Promise((resolve) => {
    console.log(2);
  });
}

setTimeout(() => {
  console.log(3);
}, 0);

new Promise((resolve) => {
  resolve();
}).then((res) => {
  a();
});

console.log(4);
