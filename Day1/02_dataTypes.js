let foo = 42; // foo is now a number
// let foo = "12" + 12;// 1212 because of string concatenation
//since we took 12 inside "" it considered as a string  and concatenated with number
// console.log("abc"-12);//NaN
// console.log("abc"* 12);//NaN
// console.log("abc"/12);//NaN
// console.log("abc"% 12);//NaN
// console.log("abc"+12);//abc12 concatenation takes place
//console.log("12" - 12);//0 because of string to number conversion takes place
//console.log("12"* 12);//0 same as above conversion occurs
//but during addition it takes as string and conatenation takes place
//console.log(true);//1 true is 1 and false is 0 
// console.log(true + 1);  // 2 boolean to number conversion takes place true is 1 
// console.log(false + 1); // 1
// console.log(true * 2);  // 2

//console.log(typeof(Nan));//number  
// It is considered a special invalid number 
// meaning it’s a number,
// but an invalid or unrepresentable one.

//console.log(typeof(undefined));//undefined
//console.log(typeof(symbol));//symbol
//console.log(typeof(bigInt));//bigint
//console.log(typeof(null));//object 
//null is a special value that represents the absence of any value or object.




let newName = "Aquib" + 123;
// let newName = Aquib + 123;//error: Aquib is not defined
// console.log(newName);//Aquib123

foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean


