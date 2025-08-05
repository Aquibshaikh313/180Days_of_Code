// It does NOT change the original array.
// It returns a new array.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const myNewNums = myNums.filter((num) => num > 4); //explict return
const myNewNums = myNums.filter((num) => {
  return num > 4;
});
// always use return in {} block

console.log(myNewNums);

//Same example by used forEach loop:
const newNums = [];
myNums.forEach((item) => {
  if (item > 4) {
    newNums.push(item);
  }
});
console.log(newNums);

// const evenNums = myNums.filter((num) => num % 2 == 0);
const oddNums = myNums.filter((num) => num % 2 !== 0); //for odd
// console.log(oddNums);
// console.log(evenNums);

//Problems for practise
const words = ["spray", "elite", "exuberant", "destruction", "present"];

const newWords = words.filter((item) => item.length > 5);
// console.log(newWords);

const courses = [
  {
    courses: "html",
    prices: 200,
  },
  {
    courses: "css",
    prices: 300,
  },
  {
    courses: "js",
    prices: 450,
  },
  {
    courses: "react",
    prices: 600,
  },
];
const purchase = courses.filter((courses) => courses.prices > 400);
// console.log(purchase);

//filter topper students:
const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 65 },
  { name: "Charlie", marks: 90 },
];

const topper = students.filter((t) => t.marks > 70);
console.log(topper);

//nums divisble by 3 and less than 6
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const divByThree = num.filter((num) => num % 3 == 0 && num <= 6);
// console.log(divByThree);

const events = [
  { title: "Event 1", date: "2024-12-01" },
  { title: "Event 2", date: "2023-08-10" },
];

const today = new Date("2024-10-01");
const upcoming = events.filter((event) => new Date(event.date) > today);
console.log(upcoming); // Only future events

// Filter names that start with a vowel

const names = ["Alice", "Bob", "Eve", "Oscar", "Uma", "Charlie"];

const namesWithVowels = names.filter((name) => {
  return /^[aeiou]/i.test(name); // Regex: checks if name starts with vowel
});

console.log(namesWithVowels);
// Output: ["Alice", "Eve", "Oscar", "Uma"]
