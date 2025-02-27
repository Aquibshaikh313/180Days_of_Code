//if
const score = 200;
if (score < 100) {
  console.log("you scored more than 100");
}
// console.log("you scored less than 100");

const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
  //   console.log("you can purchase the product");
}

const loggedInFromGoogle = false;
const loggedInFromFacebook = true;

if (loggedInFromGoogle || loggedInFromFacebook) {
  //   console.log("you can login");
}

const month = 3;
switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;

  default:
    console.log("print default month");

    break;
}

const Day = 3;
switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;

  default:
    console.log("print default Day");

    break;
}

//falsy values
//fasle, 0,-0,"",null,undefined,NaN,BigInt 0n

//Truthy values
//"0","false"," "[],{},funciton(){}

//Ternary operator
const Age = 26;
Age <= 18 ? console.log("Teenager") : console.log("Adult");

//Nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = null ?? 10;
//val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
console.log(val1);
