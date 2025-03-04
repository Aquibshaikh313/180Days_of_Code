# Project related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-h4g7maaj?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution Code

## project1

```javascript
console.log("Aquib");
const buttons = document.querySelectorAll(".button");
console.log(buttons);

const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project2

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if ((height === "") | (height < 0)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if ((weight === "") | (weight < 0)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## project3

```javascript
document.getElementById("#clock");

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## project4

```javascript
const randomColor = function () {
  const hex = "0123456ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    let intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
document.getElementById("start").addEventListener("click", startChangingColor);

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.getElementById("stop").addEventListener("click", stopChangingColor);
```
