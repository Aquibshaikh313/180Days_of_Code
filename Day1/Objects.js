//***************Objects in javascript */
//singleton object is made with constructor function(object.create)

const mySym = Symbol("key1");
const JsUser = {
  name: "Aquib",
  age: 26,
  [mySym]: "key1",
  country: "India",
  email: "aquib@gmail.com",
  isLoggedIn: true,
  lastLoggedIn: ["Monday", "saturday"],
};

// console.log(JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email = "aquibchatgpt@gmai.com";
// Object.freeze(JsUser);
// console.log((JsUser));

JsUser.greeting = function () {
  console.log("Hello JsUser");
};

// console.log(JsUser.greeting());

const obj1 = {
    1: "a",
    2:"b"
}
const obj2 = {
    3: "a",
    4:"b"
}
// const obj3 = Object.assign({},obj1,obj2) //empty object is bcz the value the store in that 
const obj3 = {...obj1,...obj2}
// console.log(obj3);
console.log(obj3);

const name1 = ["a",2,3,'b'];
const name2 = ["a",2,3,'b'];
const name3 =[...name1,...name2];

console.log(JsUser.hasOwnProperty("isLoggedIn"));
