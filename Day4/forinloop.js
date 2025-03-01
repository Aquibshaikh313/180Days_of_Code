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
