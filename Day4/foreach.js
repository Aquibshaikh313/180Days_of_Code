// for each loop in Js
// it doesn't return new array it make changes in original one..

const coding = ["js", "py", "c++", "java", "cpp"];

coding.forEach(function (val) {
//   console.log(val);
});

coding.forEach((val)=>{
    // console.log(val);
    
})

coding.forEach(val => {
    // console.log(val);
    
});

//Problems for practice:

const num = [1, 2, 3, 4];
let val = 0;
num.forEach((num) => {
  return (val += num);
});
// console.log(val);

const arrs = [1, 2, , 4];
let numcall = 0;
arrs.forEach((element) => {
  console.log({element});
  numcall++;
});
console.log(numcall);
