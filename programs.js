let x =1

for (;x <=10 ; ){
    console.log(x);
    x++;
}

for (let y =1; y<=5; y++){
   alert(y);
    
}

const person = () =>( {
    name: "Sharon"
});
// when we dont have return statement use ({})  or else it istreated as label not an object

console.log(person());


// it is arraow function
const sharon = () =>{
    return{
        name: "Sharon"
    };
    
};

console.log(sharon());