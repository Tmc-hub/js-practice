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

let sum = 0;
for (let i = 1; i <= 5; i++) {
  //sum += 1
  sum = sum + i;
  //0 + 1
  //1 + 2
  //3 + 3
  //6 + 4
  //10 + 5
}
console.log(sum);

let sum1 = 0;
let evenCount = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    sum1 = sum1 + i;
    evenCount++;
  }
}
console.log(sum1, evenCount);

const numArr = [3, 7, 2, 9, 5];
let sum2 = 0;
for (let i = 0; i < numArr.length; i++) {
  sum2 = sum2 + numArr[i];
}
console.log(sum2);

const numArr2 = [1, 7, 2, 9, 5, 5, 6, 7, 4, 4, 6, 7, 4, 3, 2, 5, 9, 9];
let sum3 = 0;
for (let i = 0; i < numArr2.length; i++) {
  if (numArr2[i] % 2 === 1) {
    sum3 = sum3 + numArr2[i];
  }
}
console.log(sum3);

const arrMax = [3, 7, 2, 9, 5];
let largestNum = 0;
for (let i = 0; i < arrMax.length; i++) {
  if (arrMax[i] > largestNum) {
    largestNum = arrMax[i];
  }
}
console.log(largestNum);

const arrSmall = [1, 3, 2, 7, 5, 8, 9];
let smallestNum = 10;
for (let i = 0; i < arrSmall.length; i++) {
  if (smallestNum > arrSmall[i]) {
    smallestNum = arrSmall[i];
  }
}
console.log(smallestNum);
