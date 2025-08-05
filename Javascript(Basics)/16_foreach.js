// for each loop in Js
// it doesn't return new array it make changes in original one..

const coding = ["js", "py", "c++", "java", "cpp"];

coding.forEach(function (val) {//basic syntax
    // console.log(val);
});

coding.forEach((item, index, array) => { //using arrow function
  // console.log(item);
});

coding.forEach((val) => {
  // console.log(val);
});

//Problems for practice:

//sum of numbers
const num = [1, 2, 3, 4];
let val = 0;
num.forEach((num) => {
val += num
});
// console.log(val);//output 10

const arrs = [1, 2, , 4];
let numcall = 0;
arrs.forEach((element) => {
  console.log({element});
  numcall++;
});
console.log(numcall);


const cart = [
  { name: "Book", price: 200 },
  { name: "Pen", price: 20 },
  { name: "Bag", price: 500 },
   { name: "Baingan", price: 700 },
];

let total = 0;
const newCart = cart.filter(item => item.price > 200);
console.log(newCart);

newCart.forEach((item) => {
  total += item.price;
});
console.log(`Total Amount: ₹${total}`);

// Sending Welcome Emails (Simulation)
const users = ["Alice", "Bob", "Charlie"];

users.forEach((user) =>{
  console.log(`Sending welcome email to ${user}`);
  
})


//printing task completion
const tasks = ["Code", "Exercise", "Read"];

tasks.forEach((task,index)=>{
  console.log(`task ${index + 1}: ${task} completed `)
});

//count how many strings have more than 4 letters
const words = ["apple", "dog", "banana", "cat"];
let count = 0;

words.forEach((word,index,array)=>{
  if(word.length > 4){
    count++;
  }
});
console.log("words with more than 4 letters:", count );





