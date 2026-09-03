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

let order = (fruit_name, call_Production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} is selected`);
    call_Production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production started");

    setTimeout(() => {
      console.log("fruits has been choped");

      setTimeout(() => {
        console.log(`${stocks.liquid} were added`);

        setTimeout(() => {
            console.log("starting the machine");

          setTimeout(() => {
            console.log(`${stocks.container[0]} is selected as container`);

            setTimeout(() => {
                console.log(`${stocks.toppings[0]} were added`);

              setTimeout(() => {
                console.log("ice cream is ready , serving the ice Cream");
              }, 2000);

            }, 3000);

          }, 2000);

        }, 1000);

      }, 1000);

    }, 2000);

  }, 0);
};

order(1, production);
