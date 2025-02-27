const foods = [
  {
    name: "hotdog",
    categories: ["meat", "fast food", "quick eats"],
    price: 100,
  },
  {
    name: "cheeseburger",
    categories: ["meat", "fast food", "quick eats"],
    price: 300,
  },
  {
    name: "french fries",
    categories: ["vegetarian", "fast food", "quick eats"],
    price: 100,
  },
  {
    name: "cola",
    categories: ["drink", "soda", "quick eats"],
    price: 100,
  },
];

console.log(foods[0].categories[0]);
console.log(foods[2].price);
console.log("A", foods[3].name, "costs", "$" + foods[3].price / 100);
console.log("A", foods[1].name, "is", foods[1].categories[1]);

const drinkItem = "cola";
if (drinkItem === foods[3].name) {
  console.log("Cola is in the menu");
} else {
  console.log("Cola is not available");
}

const foodPrice = foods[2].price;
if (foodPrice > 150) {
  console.log("This", foods[2].name, "is an expensive item");
} else {
  console.log("This", foods[2].name, "is a cheap items");
}

let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}

let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}
