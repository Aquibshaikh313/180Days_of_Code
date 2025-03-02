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

//***********************Problems for practise**************************************
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const newWords = words.filter((item) => item.length > 5 );
// console.log(newWords);

const courses = [
  {
    courses : "html",
    prices : 200

  },
  {
    courses : "css",
    prices : 300

  },
  {
    courses : "js",
    prices : 450

  },
  {
    courses : "react",
    prices : 600

  }

]
const purchase = courses.filter((courses)=> courses.prices > 400  );
console.log(purchase);
