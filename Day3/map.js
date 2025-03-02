//Map create new array
let lengths = ["html","css","javascript"];
const totalLength =lengths.map(item => item.length);
// console.log(totalLength);

const num = [1,2,3,4];
const doubleNum = num.map((item)=> item*2);
// console.log(doubleNum);

//even & odd
let number = [1,2,3,4,5,6,7,8];
const evenNums = number.map((num) => num%2 == 0 ? num : null );
const filterEvenNum = evenNums.filter((num) => num !== null);
console.log(filterEvenNum);

