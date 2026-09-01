console.log("types of functions");

function named (){
    // example of named fuction 
    // syntax : function functionName (){----} // function is the keyward
    console.log("exaple of named function");

}
named(); // calling the function 

// function expression or an anonymous function
// function keyward is required 
const name = function () {
    console.log("it is function expression or anonysmous funtion");

    return "here function is save in an variable ";
};

name ();

console.log(name());


// arrow function
// (a,b) - it is a parameter
const add = (a,b) => a+b;
console.log(add(5,6));

const msg = () => "hello"; // withput parametere
console.log( msg());


// immidiately invokedfunction 
//this function isn't saved to a variable, and it doesn't have a name.
//It is wrapped in () and immediately followed by (), forcing it to run instantly.
( function (){
    console.log("jessy");
})(); // parenthisis () in last, it runs function without calling it

