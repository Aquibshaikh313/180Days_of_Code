const myObject = {
  name: "Aquib",
  age: 26,
  country: "India",
};

for (const key in myObject) {
  // console.log(`key is ${key} and value is ${key}`);
}

const programming = ["js", "py", "c++", "java", "cpp"];
for (const key in programming) {
  console.log(programming[key]);
}
//counting properties in object
let count = 0;
const laptop = {
  brand: "DELL",
  ram: "16GB",
  ssd: "512GB",
};

for (let item in laptop) {
  count++;
}
console.log(count); //3

//Not for Arrays
//Better to use forEach
const arr = [10, 20, 30];
for (let item in arr) {
  console.log(item, arr[item]);
}
//output
// 0 10
// 1 20
// 2 30
