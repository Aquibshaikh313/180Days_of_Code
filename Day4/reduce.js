const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNumbers.map((num) => {
//   return num + 10;
// });
// console.log(newNums);

//Chaining of map and filter
const newNumbers = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 40);
// console.log(newNumbers);

//***********Reduce method in js**********
const currval = 0;
const myNums = [1, 2, 3];

const myTotal = myNums.reduce(function (acc, currval) {
  console.log(`acc: ${acc} and currval: ${currval}`);
  return acc + currval;
}, 0);
//const myTotal = myNums.reduce((acc,currval) => acc + currval, 0); explicit return..
console.log(myTotal);


//Practise example:

const shoppingCart = [
    {
        itemName:"Html course",
        price:100
    },
    {
        itemName:"css course",
        price:200
    },
    {
        itemName:"js course",
        price:300
    },
    {
        itemName:"React course",
        price:400
    }
]

const totalPrice = shoppingCart.reduce((acc,item)=> acc+item.price ,0);
// const totalPrice = shoppingCart.reduce((acc,item)=> {
//     item.itemName = "itemName"
//     return acc + item.price;
// } ,0);
console.log(totalPrice);
