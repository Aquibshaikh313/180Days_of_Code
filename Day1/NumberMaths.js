const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toFixed(1));//after decimal point i.e gives decimal point 

const newNumber = 100.6235
console.log(newNumber.toPrecision(3)); //before decimal point 

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN'));

//*******Date in js */

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toLocaleString());
console.log(typeof myCreatedDate); //object

// let B = [1,2,3,4,5,6];
// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B ", myArr);


const her = ["bat","cat","dog","elephant",]
const him = ["fish","goat","hen","ice"]
const both = her.concat(him);
console.log(both);

const newBoth = [...her,...him];
console.log(newBoth);

console.log(Array.isArray("Aquib"));//false
console.log(Array.from("Aquib"));


