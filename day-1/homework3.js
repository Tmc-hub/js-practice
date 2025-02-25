console.log(10 == "10");
console.log(10 === "10");
console.log(20 < 20);
console.log(20 >= 20);
console.log("apple" != "banana");

const num = 12;
if (num % 2 === 0) {
  console.log("Its even");
} else {
  console.log("Its odd");
}

const username = "admin";
const password = 1234;

if (username === "admin" && password === 1234) {
  console.log("Login successful");
} else {
  console.log("Invalid login credentials");
}

if (username === "User" && password === 5678) {
  console.log("Welcome back, user");
} else {
  console.log("Incorrect username or password");
}
//Expected outcome is "marco"
