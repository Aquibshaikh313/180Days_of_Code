//map creates new array
//Does not change the original array

let lengths = ["html","css","javascript"];
const totalLength = lengths.map(item => item.length);
// console.log(totalLength);

const num = [1,2,3,4];
const doubleNum = num.map((item)=> item*2);
// console.log(doubleNum);

//even & odd
let number = [0,1,2,3,4,5,6,7,8,9,10];
const evenNums = number.map((num) => num%2 == 0 ? num : null );
const filterEvenNum = evenNums.filter((num) => num !== null);                                                       
// console.log(filterEvenNum);


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers.map((num) => num+10);
// const newNums = myNumbers.map((num) => {
//   return num + 10;
// });
// console.log(newNums);

// const newNume = myNumbers.map((num)=>{
//   return num*2;
// })`
// console.log(newNume);

//Real world example of map:
const pricesInDollar = [10,20,30];
const pricesInRupees = pricesInDollar.map((num)=>{
    return num*83;
})
// console.log(pricesInRupees);

const fruits = ['Apple', 'Banana', 'cherry'];
const fruitList = fruits.map((val ,idx,arr)=>{
    return `${idx+1} of ${arr.length} is ${val}`
})
console.log(fruitList);

//extract names:
const users = [
    { name: "Aquib", age:27},
    { name: "Sanjay", age:25},
    { name: "Rohan", age:26},
    { name: "Saurabh", age:26}
]
const names = users.map((user) => user.name);
console.log(names);
const ages = users.map(user => user.age);
console.log(ages);


//  Extract Specific Field from API-like Data
const products = [
  { id: 1, title: "Book", price: 200 },
  { id: 2, title: "Pen", price: 20 }
];

const titles = products.map(product => product.title);
console.log(titles); // ["Book", "Pen"]

const prices = products.map(product => product.price)
console.log(prices);




