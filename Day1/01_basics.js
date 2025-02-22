console.log("Aquib shaikh");

let score = "27abc";
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);


 let isLoggedIn = "";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true, 0=>false, ""=>false , "hi"=>true
//**********Conversion operators in js ********************
let x = 4;
let y = x++;

console.log(`x:${x}, y:${y}`); //postIncrement operator x=5,y=3

let a = 2;
let b = ++a;
console.log(`a:${a},b:${b}`); 
//preIncrement operaotr a=3,b=3

console.log(null>0); //false
console.log(null==0);//false
console.log(null>=0);//true 
//comparison operators converts null into a number 

console.log("2" === 2); //false === checks data type as well
console.log("2" == 2); //false == checks only value

//******************Data Types in js*****************************
//**********string************************
let gameName = new String("Aquib");
console.log(gameName);
console.log(gameName.___proto____);
console.log(gameName.charAt(4));
console.log(gameName.indexOf("b"));

const url = "file:///C:/Desktop/180%20Days/Day1/dev.html";
console.log(url.replace('%','zz'));
console.log(url.includes('garmchai'));

console.log(gameName.split('-'));

//Problems to practice*********
let Name = "john doe";
console.log(Name.charAt(0).toUpperCase()+Name.slice(1));


let myName = "HELLO";
console.log(myName.toLowerCase());

let myName1 = "hello ";
let myName2 = "world"

console.log(myName1.concat(myName2));
console.log(myName1.length);

let isAllDigits = 12345;
let myFunction = function(isAllDigits)

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













