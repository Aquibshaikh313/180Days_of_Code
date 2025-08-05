const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//map creates new array
//Does not change the original array

// const newNums = myNumbers.map((num) => {
//   return num + 10;
// });
// console.log(newNums);

// const newNume = myNumbers.map((num)=>{
//   return num*2;
// })
// console.log(newNume);

//Real world

//Chaining of map and filter
const newNumbers = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);
console.log(newNumbers);

//***********Reduce method in js**********
// .reduce() is a method that helps you take all the elements of an array
//  combine them into one single value.
//  It reduces the whole array to one result.
//Basic syntax :
// array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);

// accumulator → The thing you are building step-by-step. (like a running total)
// currentValue → The current element you are processing.
// initialValue → The starting value for the accumulator (optional, but recommended).

const currval = 0;
const myNums = [1, 2, 3];
//accumulator & current value:
const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);
//const myTotal = myNums.reduce((acc,currval) => acc + currval, 0); explicit return..
// console.log(myTotal);

//Practise example:
const shoppingCart = [
  {
    itemName: "Html course",
    price: 100,
  },
  {
    itemName: "css course",
    price: 200,
  },
  {
    itemName: "js course",
    price: 300,
  },
  {
    itemName: "React course",
    price: 400,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
// const totalPrice = shoppingCart.reduce((acc,item)=> {
//     item.itemName = "itemName"
//     return acc + item.price;
// } ,0);
// console.log(totalPrice);

//total
const cart = [
  { item: "Shoes", price: 1200 },
  { item: "T-shirt", price: 800 },
  { item: "Cap", price: 300 },
];

const total = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(`Total bill of yours is`, total);

// ✅ Example 1: Find Maximum Number Using Reduce
const numbers = [5, 10, 8, 25, 4];

const max = numbers.reduce((acc, curr) => {
  return curr > acc ? curr : acc;
});

console.log("Max:", max);
// Output: 25

// ✅ Example 2: Convert Array of People into Object (id as key)
const people = [
  { id: 1, name: "Aquib" },
  { id: 2, name: "Sanjay" },
];

const peopleObj = people.reduce((acc, person) => {
  acc[person.id] = person.name;
  return acc;
}, {});

console.log("People Object:", peopleObj);
// Output: { '1': 'Aquib', '2': 'Sanjay' }

// ✅ Example 3: Count Word Frequencies in an Array
const words = ["hello", "world", "hello", "aquib", "world"];

const count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  // for understanding above one simply
  //   if (acc[word]) {
  //   acc[word] += 1;
  // } else {
  //   acc[word] = 1;
  // }

  return acc;
}, {});

console.log("Word Count:", count);
// Output: { hello: 2, world: 2, aquib: 1 }

const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1,2,3,4,5]

//same example using ...spread operator
// const nested = [[1,2], [3,4],[5]];
// const flat = nested.reduce((acc,curr) => [...Array,...curr],[])
// console.log(flat);// [1,2,3,4,5]
