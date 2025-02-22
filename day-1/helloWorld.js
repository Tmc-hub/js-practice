console.log("Hello, World!");
const goodbye = "Goodbye, World!";
console.log("TaeMin");
const lastName = "Cho";
console.log("TaeMin", lastName);
console.log(123);
console.log("Hello", "I'm", "Trying");

const myString = "This is a string";
const myNumber = 123;
const myBoolean = true;
const myUndefined = undefined;
const myNull = null;
const myArray = [1, 2, 3, 4, 5];
const myObject = {
  firstName: "Tae",
  lastName: "Cho",
};
//Variables are block scopes

//const = constant
//Cannot be changed

//Var and let can be redefined

const stringVariable = "Chicken";
const numVariable = 9000;
const objectVariable = {
  personName: "TaeMin",
  Height: 6 + "ft",
};
const hobbies = ["Eating", "Watching Movies", "Playing Games"];
const movies = ["LotR", "Star Wars"];
console.log(objectVariable);
console.log(hobbies);

let cars = "mercedes";
console.log(cars);

const num1 = 4;
const num2 = 5;
const num3 = 6;
const num4 = 7;
const num5 = 8;
const num6 = 10;
console.log(num1 + num2);
console.log(num3 + num4);
console.log(num4 - num1);
console.log(num3 - num2);
console.log(num1 * num2);
console.log(num3 * num6);
console.log(num5 / num1);
console.log(num6 / num2);
console.log(num6 % num1);
console.log(num5 % num2);

console.log(movies[1]);

const arr = ["bob", "pat", "mike", "sean"];
// print "sean"
console.log(arr[3]);
const obj = {
  make: "honda",
  model: "civic",
  year: 2002,
  mileage: 100000,
};

// print the mileage
console.log(obj.mileage);

const arrayOfObjects = [
  { name: "phil" },
  { name: "marco" },
  {
    name: "kaiser",
  },
  {
    name: "miran",
  },
];
// print 'kaiser'
console.log(arrayOfObjects[2]);
