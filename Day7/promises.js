// --------------------------
// 1. Basic Promise Example
// --------------------------

// Creating a promise and resolving it after 1 second
const promiseOne = new Promise(function (resolve, reject) {
  // setTimeout(function () {
  //   // Simulating an asynchronous task
  //   // console.log("Async task complete");
  //   resolve(); // Resolve the promise
  // }, 1000);
   setTimeout(resolve, 1000,"We promise to deliver your pizza in 30 minutes." ); //one line method for setTimeout(function,delay,arg1 , arg2)
});

// Consuming the resolved promise using .then()
promiseOne.then(function () {
  // console.log("promise consumed");
});


// ------------------------------
// 2. Inline Promise (No Variable)
// ------------------------------

// Creating and consuming a promise without storing it in a variable
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2 complete");
    resolve(); // Resolve the promise
  }, 1000);
}).then(function () {
  // console.log("Promise2 consumed");
});


// -----------------------------
// 3. Promise with Data (Object)
// -----------------------------

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ Username: "chai", Email: "chai256@gmail.com" }); // Sending data on resolve
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user); // Logs the resolved user object
});


// -------------------------------------
// 4. Promise with then/catch/finally
// -------------------------------------

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false; // Change to true to test rejection path
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject({ ERROR: "Something went wrong" });
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user; // Passing to next .then
  })
  .then(({ username, password }) => {
    console.log(username, password); // Destructured output
  })
  .catch(function (error) {
    console.log(error); // Logs if promise is rejected
  })
  .finally(() => {
    console.log("promiseFour either resolved or rejected");
  });


// --------------------------------------
// 5. Basic Return Function (Sync Example)
// --------------------------------------

function getUser() {
  return { username: "hitesh", age: 25 };
}

let user = getUser();
console.log(user.username, user.age);  // Output: hitesh 25


// ----------------------------------------
// 6. Async/Await with Promise (Try/Catch)
// ----------------------------------------

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true; // Change to false to test resolve path
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject({ ERROR: "js went wrong" });
    }
  }, 1000);
});

async function consumePromiseFunction() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFunction();


// ------------------------------------------
// 7. Fetch Users with Async/Await (API Call)
// ------------------------------------------

async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); // Parsing JSON
    console.log(data); // Logs array of users
  } catch (error) {
    console.log("E:", error); // Logs if fetch fails
  }
}
getAllUsers();


// -----------------------------------------------------
// 8. Fetch Users using .then() and .catch() (API Call)
// -----------------------------------------------------

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); // Parse JSON from response
  })
  .then((data) => {
    console.log(data); // Logs array of users
  })
  .catch((error) => {
    console.log(error); // Logs if an error occurs
  });
