//callback --> calling a function in another function

//example -- ordering something

let order = (call_back) =>{
    console.log("placed order")
    call_back()
};

let production =() =>{
    console.log("production started");
};

order(production);


