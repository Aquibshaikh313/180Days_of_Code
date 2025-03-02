const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const myNewNums = myNums.filter((num) => num > 4); //explict return
// const myNewNums = myNums.filter((num) => {
//     return num > 4}); always use return in {} block

// console.log(myNewNums);


//Same example by used forEach loop:
const newNums = [];
myNums.forEach((item) => {
  if (item > 4) {
    newNums.push(item);
  }
});
console.log(newNums);

const evenNums = myNums.filter((num) => num % 2 == 0);
// console.log(evenNums);
const oddNums = myNums.filter ((num)=> num % 2 !==0) //for odd
console.log(oddNums);
