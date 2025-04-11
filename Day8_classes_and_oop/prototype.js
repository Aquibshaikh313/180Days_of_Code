let myName = 'Aquib    '

String.prototype.trueLength = function(){
    return this.trim().length
}
console.log(myName.trueLength());

function student(name,age){ //constructor function
    this.name = name;
    this.age = age;
}
student.prototype.study = function(){ //adding access using prototype
    console.log(`Hello ${this.name} with ${this.age} welcome here.`);
    
}

const stud1 = new student("Aquib",27);
const stud2 = new student("Sanjay",24);
// const stud1 = new student("Aquib",27);

stud1.study();
stud2.study();
// console.log(stud1);

const User = {
    Name : 'hitesh',
    email : 'chai@gmail.com'
}
const teacher = {
    student : 'Aquib'
}
teacher.__proto__ = User //outdated method 

//modern syntax
Object.setPrototypeOf(teacher,User);
console.log(teacher.Name); // Output: 'hitesh'
console.log(teacher.email); // Output: 'chai@gmail.com'






