// *********************************************
// String Operations in JavaScript
// *********************************************

// String is a primitive data type in JavaScript
//Primitive data types are immutable, 
// meaning their values cannot be changed after they are created.
//  When an operation appears to modify a primitive value,
//  it actually creates a new value.

let gameName = "Aquib123";

// Basic Properties and Methods
console.log(gameName);                 // Aquib123
console.log(gameName.__proto__);        // String.prototype
console.log(gameName.length);           // 8
console.log(gameName.charAt(4));        // b
console.log(gameName.indexOf("b"));     // 4

// URL Example
const url = "file:///C:/Desktop/180%20Days/Day1/dev.html";

// console.log(url.replace("180%20Days/Day1/dev.html","Aquib's website"));file:///C:/Desktop/Aquib's website
// console.log(url.replaceAll("file:///C:/Desktop/180%20Days/Day1/dev.html","Aquib"));//Aquib
console.log(url.replace('%20', 'zz'));      // file:///C:/Desktop/180zzDays/Day1/dev.html
console.log(url.includes('garmchai'));      // false

// Split Example
console.log(gameName.split('-'));           // ["Aquib123"] (no '-' present, so whole string as 1 element)

// Practice Problems
let Name = "john doe";
const words = Name.split(" ");
const capitalWords = words.map(word =>{
    return word.charAt(0).toUpperCase() + word.slice(1)
})
let result = capitalWords.join(" ");
console.log(result);//John Doe

console.log(Name.charAt(0).toUpperCase() + Name.slice(1));  // John doe

let myName = "HELLO";
console.log(myName.toLowerCase());          // hello

let myName1 = "hello ";
let myName2 = "world";
console.log(myName1.concat(myName2));        // hello world
console.log(myName1.length);                 // 6 (space counts too)

// Checking if all digits (Extra Tip)
let isAllDigits = "12345";
function checkAllDigits(str) {
    return /^\d+$/.test(str);
}
console.log(checkAllDigits(isAllDigits));    // true

// *********************************************
// Number Operations
// *********************************************

const score = 400;
console.log(score);                         // 400

const balance = new Number(100);
console.log(balance);                       // [Number: 100]
console.log(balance.toFixed(1));             // 100.0 
// console.log(balance.toFixed(2));             // 100.00
console.log(balance.toString().length);      // 3  toString converts into string

const newNumber = 100.6235;
console.log(newNumber.toPrecision(3));       // 101 (rounded)
// console.log(newNumber.toPrecision(5));       // 100.63 (rounded)

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN')); // 10,00,000 (Indian format)

// String + Variables Example
const name = "hitesh";
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // template literals

// More String Methods
const gameNamed = new String('hitesh-hc-com');

console.log(gameNamed[0]);                   // h
console.log(gameNamed.length);               // 13
console.log(gameNamed.toUpperCase());        // HITESH-HC-COM
console.log(gameNamed.charAt(2));             // t
console.log(gameNamed.indexOf('t'));          // 2

const newString = gameNamed.substring(0, 4);
console.log(newString);                      // hite

const anotherString = gameNamed.slice(-8, 4); 
console.log(anotherString);                  // (empty string '' because start > end)

// Trimming spaces
const newStringOne = "   hitesh    ";
console.log(newStringOne.trim());            // "hitesh"

// Custom Method using Prototype (Extra Tip)
// Uncomment below to use
// String.prototype.trueLength = function() {
//     return this.trim().length;
// };
// console.log(newStringOne.trueLength());    // 6

// URL Replacing and Checking
const url2 = "https://hitesh.com/hitesh%20choudhary";
console.log(url2.replace('%20', '-'));        // https://hitesh.com/hitesh-choudhary
console.log(url2.includes('sundar'));         // false

// Splitting and Joining Strings
const family = "sonu tony neha";
const splitFamily = family.split(" ");       // ["sonu", "tony", "neha"]
console.log(splitFamily);
const joinFamily = splitFamily.join(" ");
console.log(joinFamily);                     // sonu tony neha

// *********************************************
// Extra String Methods You Should Also Know:
// *********************************************

let str = "HelloWorld";

// slice(start, end) --> extracts section
console.log(str.slice(0, 5));                 // Hello
console.log(str.slice(-5));                   // World

// substring(start, end) --> similar to slice but no negative indexes
console.log(str.substring(0, 5));              // Hello

// substr(start, length) --> deprecated but sometimes used
console.log(str.substr(0, 5));                 // Hello

// repeat() --> repeat string
console.log(str.repeat(2));                    // HelloWorldHelloWorld

// includes(substring) --> check if string contains substring
console.log(str.includes('World'));            // true

// startsWith() and endsWith()
console.log(str.startsWith('Hell'));            // true
console.log(str.endsWith('World'));             // true

// padStart() and padEnd() --> for padding
console.log('5'.padStart(4, '0'));              // 0005
console.log('5'.padEnd(4, '0'));                // 5000








// Cheatsheet for String****************
let str = "Hello World";

str.length                  // 11
str.charAt(0)               // 'H'
str.indexOf('o')            // 4
str.includes('World')       // true
str.toUpperCase()           // "HELLO WORLD"
str.toLowerCase()           // "hello world"
str.trim()                  // removes spaces from start and end

tr.slice(0, 5)             // "Hello"
str.slice(-5)               // "World"
str.substring(0, 5)         // "Hello" (no negative allowed)

str.replace('World', 'JS')  // "Hello JS"
str.startsWith('Hell')      // true
str.endsWith('World')       // true

str.split(' ')              // ['Hello', 'World']
['Hello', 'World'].join(' ')// "Hello World"
"Hello".concat(" ", "World")// "Hello World"

let name = "John";
console.log(`Hello, ${name}!`) // Hello, John!

let num = 1234567;
num.toLocaleString('en-IN') // "12,34,567" (Indian format)

"5".padStart(3, '0')        // "005"
"5".padEnd(3, '0')          // "500"

"ha".repeat(3)              // "hahaha"

let strNum = "123";
Number(strNum)              // 123
String(123)                 // "123"

str.substr(0, 5)            // "Hello" (old, not recommended)
str.__proto__               // String.prototype (access properties)
Object.getPrototypeOf(str)  // Better way than __proto__

// Custom Method Example:
String.prototype.trueLength = function() {
    return this.trim().length;
};
console.log("  hello  ".trueLength());  // 5
