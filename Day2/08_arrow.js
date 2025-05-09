// basic syntax
// const add = (a,b) => a + b;

// with single parameter(no parenthesis needed)
// const square = n = n * n ;

//with no parameter
// const greet = () => console.log("Hello world");

// Multiline Body (Curly braces and return required)
// const multiply = (a,b) =>{
//     const result = a * b;
//     return result;
// }
// // let ans = multiply(5,3);
// // console.log(ans);
// console.log(multiply(5,3));

// Return keyword in arrow function
// const multiply = (a,b) => a * b; implicit return

// const multiply = (a, b) => {
//   return a * b;
// }; //explicit return





//Returning objects(wrap in parentheses)
// const getUser = () => {name:"Aquib", age: "27"}; //undefined because it acts a function
// const getUser = () =>({name:"Aquib", age: "27"});

// Arrow functions do not have their own this — they inherit this from the parent scope.
// const person = {
//   name: "Alice",
//   greet: () => {
//     console.log(`Hello, I'm ${this.name}`); // ❌ undefined
//   }
// };


// const chai = function (){
//     let username = "Aquib";
//     console.log(this.username);
    
// }output is undefined

// const chai = () => {
//     let username = "Aquib";
//     console.log(this);
// }
//  chai ();
//output {}
//wrong mehtod returns undefined  add this >> ({})
//we cannot use this in arrow funcion


// // const addtwo = (num1,num2) =>{
// //     return num1 + num2;
// // }
// const addtwo = (num1,num2) => num1 + num2; //implicit return
// // const addtwo = (num1,num2) => (num1 + num2);//we can use round bracket fo
// // but for currly bracket return must be used
// console.log(addtwo(4,5));
