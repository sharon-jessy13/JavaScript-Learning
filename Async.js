//synchronous

console.log("1.hello");
console.log("2.hello");
setTimeout(() => {
    console.log("3.hello");
},3000)
console.log();
console.log("4.hello");

console.log("5.hello");

//setTimeout() --> built-in function in js, it runs the code after specific time 
// takes time in milisecond

setTimeout(() => {
    console.log("hello async");
},1000)