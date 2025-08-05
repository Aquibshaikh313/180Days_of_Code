//class based getter setter

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}hitesh`;
  }
  set password(val) {
    this._password = val;
  }
}

const hitesh = new User("hitesh@gmail.com", "123");
// console.log(hitesh.password);
// console.log(hitesh.email);

//function based getter setter

// function User(email, password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })

// }

const chai = new User("chai@chai.com", "chai");
// console.log(chai.email);

//object based getter setter

// const User = {
//     _email: 'h@hc.com',
//     _password: "abc",

//     get email(){
//         return this._email.toUpperCase()
//     },

//     set email(value){
//         this._email = value
//     }
// }

// const tea = Object.create(User)
// console.log(tea.email);

//Examples to practise :

//1:Bank Account System

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  get balance() {
    return `${this._balance}`;
  }
  set balance(amount) {
    if (amount < 0) {
      console.log("amount cant be negative");
    } else {
      this._balance = amount;
    }
  }
}

const newAccount = new BankAccount("Aquib", "200");
console.log(newAccount);

newAccount.balance = 6000;
console.log(newAccount.balance);

newAccount.balance = -50;

//2:Student Data Example

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  get marks() {
    return `${this._marks}`;
  }
  set marks(val) {
    if (val < 0 || val > 100) {
      console.log("invalid marks should be between 0 to 100");
    } else {
      this._marks = val;
    }
  }
}

const result = new Student("Aquib Shaikh", "98");
console.log(result);

result.marks = 5;
console.log(result.marks);

result.marks = 101;
