// basic syntax
const add = (a,b) => a + b;

// with single parameter(no parenthesis needed)
const square = n = n * n ;

//with no parameter
const greet = () => console.log("Hello world");

// const chai = function (){
//     let username = "Aquib";
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "Aquib";
    // console.log(this);
}
 chai ();


// const addtwo = (num1,num2) =>{
//     return num1 + num2;
// }
const addtwo = (num1,num2) => num1 + num2; //implicit return
// const addtwo = (num1,num2) => (num1 + num2);//we can use round bracket fo
// but for currly bracket return must be used
console.log(addtwo(4,5));
