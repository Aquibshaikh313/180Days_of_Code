// function addTwoNumbers(num1,num2){
//  console.log(num1+num2);

// }

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result; //we cant print anything after return statement
  //return num1 + num2; above two line of code in 1 line
}
const result = addTwoNumbers(2, 3);
console.log("Result:", result);

function loginUserMessage(userName = "suresh"){
    return `Hello ${userName} just Logged in`
}
console.log(loginUserMessage("Aquib"));
//output will be aquib bcz argument always overides the default parameter
//console.log(loginUserMessage()); //undefined just logged in

// function loginUserMessage(userName){
//  return`Hello everyone ${userName} just Logged out`
// }
// console.log(loginUserMessage("Aquib")); for practise
