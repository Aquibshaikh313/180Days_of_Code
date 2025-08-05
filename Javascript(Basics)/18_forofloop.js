//for of loop
//for..of is basically used in arrays,map,string,set,nodelist,typedarray,arguments objects, generators produced by generator functions, and user-defined iterables.
const arr = [1, 2, 3, 4, 5];

for (const val of arr) {
  // console.log(val);
}

const greeting = "Hello World";
for (const greet of greeting) {
    console.log(`Each char has ${greet}`);
}

//Using object.enteries...
const user = {
  name: "Aman",
  age: 22
};

for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}


//  for...of with Objects (❌ Error if used directly)
const obj = { a: 1, b: 2 };

for (let item of obj) {
  console.log(item);  // ❌ Error: obj is not iterable
}

//Fix
for (let key of Object.keys(obj)) {
  console.log(key); // a, b
}

for (let value of Object.values(obj)) {
  console.log(value); // 1, 2
}



