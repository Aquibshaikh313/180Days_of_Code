// const chai = function (){
//     let username = "Aquib";
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "Aquib";
    // console.log(this);
}
// console.log(chai());
 chai ();


// const addtwo = (num1,num2) =>{
//     return num1 + num2;
// }
const addtwo = (num1,num2) => num1 + num2; //implicit return
// const addtwo = (num1,num2) => (num1 + num2);//we can use round bracket fo
// but for currly bracket return must be used
console.log(addtwo(4,5));
