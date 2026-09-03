// promises -- pending -- resolve or reject -- then  or catch --  finally

//example --  placing an ice cream order
// 1. place order -- 2
// 2. cut fruits -- 2
// 3. add water and ice -- 1
// 4. start the machine -- 1
// 5. select the container -- 2
// 6. select the toppings -- 3
// 7. serve the iceCream -- 2

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "mango"],
  liquid: ["water", "ice"],
  container: ["cup", "cone", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;
let order = (time, work) => {

    return new Promise ((resolve, reject) =>{

        if(isShopOpen){
            setTimeout( ()=>{
                resolve(work())
            },time)
            
        }
        else{
            reject(console.log("our shop is closed"))
        }
    });
};


order(2000,()=>{
    console.log(`${stocks.fruits[1]} is selected`);
})

.then( ()=>{
    return order(2000, () =>{
        console.log("production started");
    })
})

.then( ()=>{
    return order(2000, ()=>{
        console.log("fruits have been chopped");

    })
})
.then( ()=>{
    return order(1000, ()=>{
        console.log(`${stocks.liquid} were added`);

    })
})

.then( ()=>{
    return order(1000, ()=>{
        console.log("starting the machine");

    })
})

.then( ()=>{
    return order(2000, ()=>{
        console.log(`${stocks.container[2]} is seleceted as container`);

    })
})

.then( ()=>{
    return order(3000, ()=>{
        console.log(`${stocks.toppings[1]} were added as toppings`);

    })
})

.then( ()=>{
    return order(2000, ()=>{
        console.log("ice cream is ready, surving");

    })
})


.catch( ()=>{
    console.log("time over, customer left")
})

.finally( () =>{
    console.log("thank You visit again")
})

