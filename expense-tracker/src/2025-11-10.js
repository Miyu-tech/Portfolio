console.log("A");

const myPromise = new Promise((resolve) => {
  console.log("B");
  resolve("C");
});

myPromise.then((message) => {
  console.log(message);
});

console.log("D"); 



console.log("X");

setTimeout(() => console.log("Y"), 0);

const myPromise = new Promise((resolve) => {
  resolve();
});

myPromise.then(() => console.log("Z"));

console.log("W");


async function myAsyncFunction() {
  console.log("1");
  await Promise.resolve();
  
  console.log("2");
}

console.log("3");
myAsyncFunction();
console.log("4");


async function test() {
  console.log("Start");

  setTimeout(() => console.log("Timeout"), 0);

  await Promise.resolve();
  // ▲await null; でも可
  console.log("After await");
}

test();
console.log("End");


async function test() {
  console.log("Begin");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("After 1s");
}

console.log("Call test");
test();
console.log("Test called");
