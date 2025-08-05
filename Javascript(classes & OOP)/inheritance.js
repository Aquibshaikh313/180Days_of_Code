class User {
    constructor (username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const dl = new Teacher ('hitesh',"chai@gmail.com","123");
console.log(dl);

dl.addCourse()


