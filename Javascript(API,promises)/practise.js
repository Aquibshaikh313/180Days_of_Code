const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
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

//more simple way to write above
myPromise.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=>console.log("promise either resolve or rejected"))

//now the above one using async await
// async function consumeMyPromise() {
//   try {
//     const response = await myPromise;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
    
//   }
// }
// consumeMyPromise();

const pizzaPromise = new Promise((resolve, reject) => {
  let pizzaArrives = true;
  if (pizzaArrives) resolve("🍕 Delivered!");
  else reject("🔥 Burnt!");
});

pizzaPromise
  .then(msg => console.log(msg)) // "🍕 Delivered!"  
  .catch(err => console.error(err)); // "🔥 Burnt!"