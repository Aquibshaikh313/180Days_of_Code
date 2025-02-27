//for loop in js
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 is my favourite number");
  }
//   console.log(element);
}

for (let i = 0; i <= 5; i++) {
//   console.log(`Outer loop value ${i}`);

  for (let j = 0; j < 4; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
  }
}

//while loop 
let i = 0;
while (i<=5) {
    // console.log(`value of index is ${i}`);
    i++;
    
}

let myArray = ["flash","Batman","superman"]

let arr = 0
while (arr < myArray.length){
    // console.log(`value of ${myArray[arr]}`);
    arr++;
    
}

//do while loop

let score =12;
do {
    console.log(`value of score is ${score}`);
    score++;
} while (score <= 11);//condition is false but it will run once
//bcz condition is checked at last in do while loop.