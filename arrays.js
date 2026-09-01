//Arrays

let a = [];
console.log(a);

a = ["jessy", "shara", "Chinnod"]; // using literals means using sqaure brackets
console.log(a);


a.push("Thatigiri"); // add at an end
console.log(a);

a.unshift("Sharon"); // add at a beginning
console.log(a);


//removing elements
a.pop(); // last elemnt
console.log(a);

a.shift(); // first element
console.log(a);

a.splice(2); // using index we can remove or (from index, number of elements);
console.log(a);

// accessing 
console.log(a[0]);

//increasing the length
// a.length = 10; //[ 'Sharon', 'jessy', 'Thatigiri', <7 empty items> ]
console.log(a);

let b = ["hii","hello"]
let c = a.concat(b);
console.log(c);
// console.log(a.concat(b));
console.log(typeof(c)); // object -- becoz array is an object

console.log(c.toString()); //jessy,shara,hii,hello

console.log(typeof(c)); // object -- becoz String is an object

let char = 'h';
console.log(typeof(char));

let num = 123;
console.log(typeof(num));

// checking it is array or not

console.log(Array.isArray(a)); // true

console.log(a instanceof Array); // true // arrayName instanceof Array -- syntax

//slice -- it creates new array 