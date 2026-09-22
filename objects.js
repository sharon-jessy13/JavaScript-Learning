// creating objects using literals -- {}
//object --> it is a data structure that stores a related data as a key - value pair

let details = {
    name : "Sharon",
    age : 22,
    designation : "student"
};

// adding properties

details.collegeName = "Cit";

console.log(details);


// using new object () constructor

let userProfile = new Object();
userProfile.name = "sharon";
console.log(userProfile);

//accessing the object 
let access = details.age;
let nameAccess = details['name']; // access throgh square brackets
console.log(nameAccess);
console.log(access);

// modifying the object 
details.collegeName = "Cambridge";
console.log(details);

// deleting the properties -- use delete keyword

delete details.designation;
console.log(details);

// for checking properties use 'in' keyword


//Itrating over a object 
//using for...in loop --> we use hasOwnProperty() - to ensure object as own properties 

function iterateObject() {
    let example = {
        name : "sharon",
        age : 22,
        clg : "CIT"
    };

    for(let key in example){
        if(Object.prototype.hasOwnProperty.call(example, key)){
            console.log(example[key]);
        }
    }
}
iterateObject();

function iterateObjectUsingEntries(){
    let example = {
        name : "sharon",
        age : 22,
        clg : "CIT"
    };

    Object.entries(example).forEach(([key,valuesss])=>{
        console.log(key,valuesss);
    });
}
iterateObjectUsingEntries();

function iterateObjectUsingKeys(){
     let example = {
        name : "sharon",
        age : 22,
        clg : "CIT"
    };

    Object.keys(example).forEach(key => {
        const value = example[key];
        console.log(`${key}, ${value}`);
    });

}