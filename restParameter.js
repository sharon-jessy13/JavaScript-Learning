//here function acccepts the indefinte number of arguments as an array

function fun(...nums){
    console.log(nums);
}
fun(1,2,3,4,5,6,7,8)
// output: [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]

function greet(greetings, ...names){
    return greetings + " " + names.join(", ");  
}
console.log(greet("hello", "jessy", "Sharon","shara"))

//destructuring the rest 
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a) //1
console.log(rest) //b:2 c:3
