let Arr = [50, 60, 20, 10, 40];
let minVal = Infinity;
let maxVal = -Infinity;

// for of loop -- it is just like for each -- it traverse ecah element
for (let item of Arr) {

// Find min val
  if (item < minVal)
      minVal = item;

// Find max val
   if (item > maxVal)
       maxVal = item;
console.log("Min elem is:" + minVal);
console.log("Max elem is:" + maxVal);
}


