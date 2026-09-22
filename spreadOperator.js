//merging arrays
const n = [1,2,3,4,5,]
const n2 = [...n, 6,8,7,5,4,3]
console.log(n2);
//output : [1,2,3,4,5,6,8,7,5,4,3]

//combining objects

const obj = {a:1, b:2}
const obj2 = {c:4, d:6}
const combine = {...obj, ...obj2}
console.log(combine);

//clone arrays
const arr = [1,2,3]
const arr1 =[...arr] // copying the arr vales  
console.log(arr1)