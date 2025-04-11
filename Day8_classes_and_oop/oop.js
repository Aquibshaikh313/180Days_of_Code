//object literals
//constructor function 
//prototypes
//classes
//instances (new,this)

// const user = {
//     userName : "hitesh",
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails : function(){
//         console.log(`Username: ${this.userName}`);
        
//     }
// }
// console.log(user.userName);
// console.log(user.getUserDetails());

function User(username,isLoggedIn,isSignIn){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.isSignIn = isSignIn

    return this
}
const userOne = new User('Aquib',true,false)
const userTwo = new User('sanjay',false,true)
console.log(userOne.constructor);
console.log(userTwo);


