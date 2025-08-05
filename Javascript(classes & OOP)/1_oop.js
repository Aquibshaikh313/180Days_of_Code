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

    // this.greeting = function(){
    //     console.log(`Welcome  ${this.username}`);
        
    // }
    // console.log(this);current context

    return this
}
const userOne = new User('Aquib',true,false); //new --> instance of
const userTwo = new User('sanjay',false,true);//User { username: 'sanjay', isLoggedIn: false, isSignIn: true }
console.log(userOne.constructor);//[Function: User] gives the name of function
console.log(userTwo);

// homework --> look about instanceOf


