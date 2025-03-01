//for of loop

const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  // console.log(val);
}

const greeting = "Hello World";
for (const greet of greeting) {
//   console.log(`Each char has ${greet}`);
}

//Maps in for of loop

const myObject = {
    "name": "Aquib",
    "age":26,
    "country": "India",
}

for (const key of myObject) {
    console.log(key);
    
}