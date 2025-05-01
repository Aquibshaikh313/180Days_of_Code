// ===== 1. OBJECT CREATION =====
// Object Literal (Most Common)
const user = {
  name: "John",
  age: 30,
  city: "New York"
};

// Constructor Function (Singleton Pattern)
const singletonUser = new Object();
singletonUser.name = "John";
singletonUser.age = 30;

// ===== 2. SYMBOL KEYS =====
const mySymbol = Symbol("uniqueKey");
const objWithSymbol = {
  name: "Alice",
  [mySymbol]: "Secret Value" // Proper symbol key syntax
};
console.log(objWithSymbol[mySymbol]); // Accessing symbol value

// ===== 3. OBJECT MODIFICATION & FREEZING =====
// Modifying Properties
user.age = 31; // Updates age
user.email = "john@example.com"; // Adds new property

// Freezing Objects (Prevents all modifications)
Object.freeze(user);
user.age = 32; // Silently fails in non-strict mode

// ===== 4. OBJECT METHODS =====
const person = {
  name: "Mike",
  greet: function() {
    console.log(`Hello, ${this.name}!`);
  },
  // Arrow function would break 'this' binding
  badGreet: () => console.log(`Hi, ${this.name}`) // ❌ Avoid
};
person.greet(); // "Hello, Mike!"

// ===== 5. MERGING OBJECTS =====
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

// Method 1: Object.assign()
const merged1 = Object.assign({}, obj1, obj2);

// Method 2: Spread Operator (Modern Approach)
const merged2 = { ...obj1, ...obj2 };

console.log(merged2); // { a:1, b:3, c:4 } (obj2's 'b' overwrites)

// ===== 6. CHECKING PROPERTIES =====
console.log(person.hasOwnProperty("name")); // true
console.log("toString" in person); // true (inherited property)

// ===== 7. OBJECT DESTRUCTURING =====
const { name, age } = user;
console.log(name, age); // "John" 31

// ===== 8. ARRAY MERGING (BONUS) =====
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArr = [...arr1, ...arr2]; // [1, 2, 3, 4]

// ===== 9. OBJECT ITERATION =====
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`${key}: ${user[key]}`);
  }
}

// ===== 10. COMMON OBJECT METHODS =====
const keys = Object.keys(user); // ["name", "age", "city"]
const values = Object.values(user); // ["John", 31, "New York"]
const entries = Object.entries(user); // [["name", "John"], ...]

// ===== 11. PROTOTYPE INHERITANCE =====
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
};
const bob = new Person("Bob");
bob.greet(); // "Hello, I'm Bob"

// ===== 12. MODERN CLASS SYNTAX =====
class User {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi ${this.name}!`);
  }
}
const alice = new User("Alice");
alice.greet(); // "Hi Alice!"
