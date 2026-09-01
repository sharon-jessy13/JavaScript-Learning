// Math.floor -- > round up the number example  - 2.5 --> 2

const a = [1, 2, 3, 4, 5];
for (let i = 0; i < Math.floor(a.length / 2); i++) {
    let temp = a[i];
    a[i] = a[a.length - 1 - i];
    a[a.length - 1 - i] = temp;
}
console.log(a);

let b= [1, 2, 3, 4, 5];
b.reverse();
console.log(a);

const rev = [1, 2, 3, 4, 5];
const reversed = (function reverse(rev) {
    if (rev.length === 0) {
        return [];
    }
    return [rev.pop()].concat(reverse(rev));
})([...rev])
console.log(reversed);
// ...a --> it is an spread operator --> just like unboxing --> means ...a - it gives only values without sqare brackets


// example of spread operator 
const num = [1,2,3,4,5,10,20,30]
console.log(...num);