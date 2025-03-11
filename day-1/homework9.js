//Problem 1
const names = ["Alice", "Bob", "Charlie", "David"];
const greetUser = (user) => {
  console.log("Hello", user + "!");
};
names.forEach(greetUser);

//Problem 2
const pricesUSD = [100, 50, 200, 400];
const usdToEuro = (convert) => {
  console.log(convert * 0.85, "Euro");
};
pricesUSD.forEach(usdToEuro);

//Problem 3
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 80 },
];
const nameAndPrice = (product) => {
  console.log("Name:", product.name, "|", "Price:", product.price);
};
products.forEach(nameAndPrice);

//Problem 4
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
  { name: "David", active: false },
];
const activeUsers = (activeU) => {
  if (activeU.active === true) {
    console.log(activeU);
  }
};
users.forEach(activeUsers);
