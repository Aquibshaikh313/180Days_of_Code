const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = false;
    if (success) {
      resolve("promise resolve");
    } else {
      reject("promise rejected");
    }
  }, 1000);
});
// myPromise.then((response) => {
//   console.log(response);
// }).catch((error)=>{
//     console.log(error);

// }).finally(()=>{
//     console.log("promise either resolve or rejected");

// })

//now the above one using async await
async function consumeMyPromise() {
  try {
    const response = await myPromise;
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}
consumeMyPromise();
