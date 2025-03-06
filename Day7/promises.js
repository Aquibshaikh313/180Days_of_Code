// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task complete");
//     resolve(); // now its connected to then
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// //Without storing in variable:
// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async task 2 complete");
//     resolve(); //for connecting to then
//   }, 1000);
// }).then(function () {
//   console.log("Promise2 consumed ");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ Username: "chai", Email: "chai256@gmail.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
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
    return user;
  })
  .then(({ username, password }) => {
    console.log(username, password);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => {
    console.log("promiseFour either resolve or rejected");
  });
//Simple basic return example to unerstanding above
// function getUser() {
//     return { username: "hitesh", age: 25 };
//   }

//   let user = getUser();
//   console.log(user.username, user.age);  // Output: hitesh 25

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
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

// async function getAllUsers() {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     const data = await response.json();
//     console.log(data);

//   } catch (error) {
//     console.log("E:", error);
//   }
// }
// getAllUsers();

//Now by using then & catch
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
