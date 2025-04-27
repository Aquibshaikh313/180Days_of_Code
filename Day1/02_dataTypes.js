// String operations
let gameName = new String("Aquib");
console.log(gameName);
console.log(gameName.__proto__);  // Fixed the typo in __proto__
console.log(gameName.charAt(4));
console.log(gameName.indexOf("b"));

const url = "file:///C:/Desktop/180%20Days/Day1/dev.html";
console.log(url.replace('%','zz'));
console.log(url.includes('garmchai'));
console.log(gameName.split('-'));

// Problems to practice
let Name = "john doe";
console.log(Name.charAt(0).toUpperCase()+Name.slice(1));

let myName = "HELLO";
console.log(myName.toLowerCase());

let myName1 = "hello ";
let myName2 = "world";
console.log(myName1.concat(myName2));
console.log(myName1.length);

let isAllDigits = 12345;
// let myFunction = function(isAllDigits)

// Number operations
const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);
console.log(balance.toFixed(1)); // after decimal point
console.log(balance.toString().length);

const newNumber = 100.6235;
console.log(newNumber.toPrecision(3)); // before decimal point

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN'));