// creating objects using literals -- {}

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