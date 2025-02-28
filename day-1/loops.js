//while loop
//while some condtion is true, keep running the program
const foods1 = ["fries", "coke", "burger"]; //An array is a list of elements, such as strings and numbers
let index = 0;
while (index < foods1.length) {
  //foods.length = 3
  //Keep doing whatever is inside the scope
  console.log("index", index);
  console.log("the food is", foods1[index]);
  index++; //Increase the variable by one, or index + 1 each iteration
}

const cars = [
  "bmw",
  "tesla",
  "lexus",
  "honda",
  "land rover",
  "hummer",
  "ford",
  "acura",
  "porsche",
  "ferarri",
  "lambo",
];
// let i = 0;
// while (i < cars.length) {
//   console.log("index", i);
//   console.log("This car is", cars[i]);
//   i++;
// }

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let i1 = 0;
while (i1 < cars.length) {
  if (cars[i1] === "bmw") {
    console.log("found the", cars[i1] + "!");
    //   } else {
    //     console.log("There is no BMW");
  }
  i1++;
}

let i2 = 0;
while (i2 < cars.length) {
  if (cars[i2] === "ferarri") {
    console.log("found the", cars[i2] + "!");
  }
  i2++;
}

for (let i = 0; i < cars.length; i++) {
  const foundCar = cars[i];
  if (cars[i] === "lexus") {
    console.log("I found the", foundCar + "!");
  }
}

for (let i = 0; i < cars.length; i++) {
  const foundCar2 = cars[i];
  if (cars[i] === "tesla") {
    console.log("I got a free", foundCar2 + "!");
  }
}

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === "land rover") {
    console.log("I'm going to buy a", cars[i]);
  }
}

for (let i = 0; i < cars.length; i++) {
  if (cars[i] === "lambo") {
    console.log("It'll take me", nums[i], "years", "to buy a", cars[i]);
  }
}

const students = [
  {
    name: "miran",
    class: "QA",
  },
  {
    name: "Phil",
    class: "Coding",
  },
  {
    name: "Tae",
    class: "QA",
  },
  {
    name: "Kaiser",
    class: "QA",
  },
  {
    name: "Marco",
    class: "Coding",
  },
];

for (let i = 0; i < students.length; i++) {
  if (students[i].class === "Coding") {
    console.log(students[i].name, "is a student for", students[i].class);
  }
}

// using a for loop, print only those that in the coding class
