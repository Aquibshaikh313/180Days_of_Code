// ✅ PROMISE BASICS & EXAMPLES

// 1️⃣ Basic Promise with resolve
const promiseOne = new Promise(function (resolve, reject) {
  // setTimeout(function () {
  //   console.log("We promise to deliver your pizza in 30 minutes.");
  //   resolve();
  // }, 1000);
  setTimeout(resolve, 1000,"We promise to deliver your pizza in 30 minutes." ); //one line method for setTimeout(function,delay,arg1 , arg2)
});

promiseOne.then(function () {
  console.log("Pizza is delivered within 30 minutes");
});

// 2️⃣ Promise without storing in a variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Order received");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Order delivered");
});

// 3️⃣ Promise resolving with user data
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ Username: "Aquib", Email: "@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // Logs the full user object
});

// 4️⃣ Chained Promises with error handling
const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // Set to true to simulate rejection
    if (!error) {
      resolve({ Username: "sanjay", Password: 241241 });
    } else {
      reject({ ERROR: "Username missing" });
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user); // First then logs the full user object
    return user;
  })
  .then(function ({ Username, Password }) {
    console.log(Username,Password); // Second then extracts and logs the username
  })
  .catch(function (error) {
    console.log(error); // Catches error if any
  })
  .finally(() => {
    // console.log("PromiseFour either resolved or rejected"); // Optional
  });

// 5️⃣ Using async/await with try-catch
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // Set to false to simulate success
    if (!error) {
      resolve({ Username: "sanjay", Password: 241241 });
    } else {
      reject({ ERROR: "Username missing" });
    }
  }, 1000);
});

async function consumePromiseFunction() {
  try {
    const response = await promiseFive;
    console.log(response); // Logs resolved value
  } catch (error) {
    console.log(error); // Catches rejected error
  }
}

consumePromiseFunction();

/*
📚 SUMMARY – KEY CONCEPTS

✅ Promise: Represents an async operation (success/failure in future).
✅ resolve(): Called when async task is successful.
✅ reject(): Called when async task fails.
✅ .then(): Runs when Promise is resolved.
✅ .catch(): Runs when Promise is rejected.
✅ .finally(): Always runs after resolve/reject.
✅ async/await: Cleaner syntax to handle Promises.
✅ try...catch: Used with async/await to handle errors.
*/




      