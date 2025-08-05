// Post-increment and pre-increment examples
let x = 4;
let y = x++;
console.log(`x:${x}, y:${y}`); // Post-increment: x=5, y=4 (not 3 as commented)

let a = 2;
let b = ++a;
console.log(`a:${a}, b:${b}`); // Pre-increment: a=3, b=3

// Null comparisons
console.log(null > 0);   // false (null becomes 0 in numeric comparison, 0 > 0 is false)
console.log(null == 0);  // false (null only equals undefined, not 0)
console.log(null >= 0);  // true (null becomes 0, 0 >= 0 is true)

// Strict vs loose equality
console.log("2" === 2);  // false (strict equality checks type and value)
console.log("2" == 2);   // true (loose equality coerces types, "2" becomes 2)