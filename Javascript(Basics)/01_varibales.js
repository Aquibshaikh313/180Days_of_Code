// Rules for naming variable in javascript
//1. Cannot start with number 
//2. Cannot use keywords like var, let, const ,function etc as variable name
//3. it starts with _ or $ or letter 
//4. Can use numbers in between or at end of variable name but not at the start
//5.Cannot use space in between variable name
//6. Case sensitive means name and Name are different variables 

let Name = "Aquib"; 
// console.log means print in console.
//Even without the semicolon, JavaScript inserts it
console.log(Name);//Aquib
// console.log("name");//name

// console.log(surname);//cannot access before initialization
let surname = "khan";

let scores = "27abc";
// console.log(typeof(scores));


let x = true;
// console.log(typeof(x));
console.log(typeof(Boolean));//boolean
//boolean is a fuction in javascript
console.log(typeof(String));
//string is a function in js
// Data types are basically funcitons in javascript
//console.log(typeof(Number));//function
console.log(typeof(Object));


const accountId = 144553;//const is a constant variable cannot be changed/reassigned
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"//s


// console.log(accountId);
//we dont use var in modern javascript because of block scope and functional scope
//it is a functional scope variable

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
- We avoid using `var` in modern JavaScript.
- Because `var` is function-scoped, not block-scoped → can cause issues.
- `let` and `const` are block-scoped → safer and more predictable.
- Prefer using `const` by default, and use `let` if value needs to change.
*/
