//Example : 1
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.name);
  };
  
  const p1 = new Person("Aman");
  
  // sayHello is not on p1 directly, but on its prototype
  p1.sayHello(); // Hello, I'm Aman
  
//Example2
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.eat = function () {
    console.log(this.name + " is eating");
  };
  
  function Dog(name, breed) {
    Animal.call(this, name); // inherit properties
    this.breed = breed;
  }
  
  // inherit methods
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  
  Dog.prototype.bark = function () {
    console.log(this.name + " says woof!");
  };
  
  const d1 = new Dog("Bruno", "Labrador");
  
  d1.eat();  // Bruno is eating (from Animal)
  d1.bark(); // Bruno says woof! (from Dog)

//Example3
// Parent constructor
function Vehicle(type) {
    this.type = type;
  }
  
  Vehicle.prototype.move = function () {
    console.log("The " + this.type + " is moving.");
  };
  
  // Child constructor
  function Car(type, brand) {
    Vehicle.call(this, type); // Inherit properties
    this.brand = brand;
  }
  
  // Inherit methods
  Car.prototype = Object.create(Vehicle.prototype);
  Car.prototype.constructor = Car;
  
  // Add new method
  Car.prototype.honk = function () {
    console.log(this.brand + " says Beep Beep!");
  };
  
  // Create an object
  const myCar = new Car("car", "Toyota");
  
  // Try the methods
  myCar.move(); // The car is moving.
  myCar.honk(); // Toyota says Beep Beep!
  