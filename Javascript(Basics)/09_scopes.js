// There are mainly 3 types of scope in JavaScript:
// Global Scope – Variables accessible from anywhere in the program.
// Function Scope – Variables accessible only within the function.
// Block Scope – Variables defined with let or const inside {}

// let a = 300;

// if (true) {
//   let a = 100;
//   var b = 200; // always avoid using var 

//   const c = 400;

//   console.log("Inner a: ", a);
// }

// console.log(a);

// function one (){
//     const username = "Aquib";
//     function two(){
//         const website = "youtube";
//         console.log(username);
        
//     }
//     // console.log(website);
//     two()
    
// }
// one();
// console.log(one());


if (true){
    const usersname = "Shaikh";
    if(usersname === "Shaikh"){
        const Website = " Youtube";
        // console.log(usersname + Website);
        
    }
    // console.log(Website);
    
}
// console.log(usersname);

// *****************Example for pracitse************
// Example1
function one() {
    const username = "Aquib";
    function two() {
        const website = "youtube";
        console.log(username); // ✅ Can access parent scope
    }
    two();
    // console.log(website); ❌ Error: not accessible here
}
 one();
// Inner functions can access variables of outer functions—this is known as a closure

// Example2:
if(true){
    const username = "shaikh";
    if(username==="shaikh"){
        const Website = " youtube";
        console.log(username + Website);//accesible here

    }
    // console.log(Website);//Error:website is blocked scope
    
}
//console.log(username);Error: username is block-scoped





