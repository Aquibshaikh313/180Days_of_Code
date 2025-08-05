function setUserName(username) {
  this.username = username;
}
function createUserName(username, email, password) {
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUserName("hitesh", "chai@gmail.com", "123");
console.log(chai);
