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

const arrayOfObject = [
  { name: "phil", age: 40 },
  { name: "marco", age: 20 },
  {
    name: "kaiser",
    age: 16,
  },
  {
    name: "miran",
    age: 23,
  },
];
console.log(arrayOfObject[0].age);
console.log(arrayOfObject[0]);

const arrayOfObjects2 = [
  { name: "phil", hobbies: ["coding", "cycling", "singing"], age: 40 },
  { name: "marco", hobbies: ["coding", "cycling", "playing game"], age: 20 },
  {
    name: "kaiser",
    hobbies: ["coding", "playing gaming", "music"],
    age: 16,
  },
  {
    name: "miran",
    hobbies: ["coding", "running"],
    age: 19,
  },
];
console.log(arrayOfObjects2[3].hobbies);
console.log(arrayOfObjects2[3]);
console.log(arrayOfObjects2[0].hobbies[0]);
console.log(arrayOfObjects2[2].hobbies[hobbies.length - 1]);
console.log(arrayOfObjects2[3].hobbies[1]);

// let firstname1 = "Marco";
// if (firstname1 === "Marco") {
//   firstname1 = "Kaiser";
// }
// if (firstname1 === "Kaiser") {
//   firstname1 = "Miran";
// }
// console.log("first name", firstname1);

let score = 57;

if (score > 80) {
  console.log("I'm doing great");
} else {
  console.log("I need help");
}

function checkingScore(score) {
  if (score < 80) {
    return "I need some help";
  }
}
const myscore = console.log(checkingScore(score));

let lunch = "Sandwhich";

if (lunch === "Noodles") {
  console.log("I have noodles for lunch");
} else {
  console.log("I don't like my lunch");
}

let number = 14;
if (number % 2 === 0) {
  console.log("It is even");
} else {
  console.log("It is odd");
}

function oddEven(number) {
  if (number % 2 === 0) {
    return "Its even";
  } else {
    return "Its odd";
  }
}
const oddEvenResult = console.log(oddEven(number));

const philStudent = arrayOfObjects2[0];
const miranStudent = arrayOfObjects2[3];

if (arrayOfObjects2[0].age < 30 || arrayOfObjects2[3].age > 20) {
  console.log(arrayOfObjects2[0].name, arrayOfObjects2[3].name);
} else {
  console.log("Phil is over 30 or Miran is under 20");
}

if (arrayOfObjects2[1].age < 30 && arrayOfObjects2[2] > 20) {
  console.log(arrayOfObjects2[1].name, arrayOfObjects2[2].name);
} else {
  console.log("either marco is older than 30 or kaiser is younger than 20");
}

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

// problem 1:  print the 2nd category for french fries
// problem 2:  print the price for cola.  price is in cents
// problem 3:  Print "A cheeseburger is $3"
console.log(foods[2].categories[1]);
console.log(foods[3].price);
console.log("A", foods[1].name, "is", "$" + foods[1].price / 100);

let score2 = 85;

if (score2 >= 90) {
  console.log("Grade: A");
} else if (score2 >= 80) {
  console.log("Grade: B");
} else if (score2 >= 70) console.log("Grade: C");
else {
  console.log("Grade: D");
}

// using a for loop, print `foo` if the number is divisible by 2, print `bar` if
// number is divisible by 3 and print `foobar` if number is divisbile by 2 && 3
const numbers1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i < numbers1.length; i++)
  if (numbers1[i] % 2 === 0 && numbers1[i] % 3 === 0) {
    console.log(numbers1[i], "foobar");
  } else if (numbers1[i] % 2 === 0) {
    console.log(numbers1[i], "foo");
  } else if (numbers1[i] % 3 === 0) {
    console.log(numbers1[i], "bar");
    // } else {
    //   console.log("This is impossible");
  }

// const foobar = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];

// for (let i = 0; i < foobar.length; i++) {
//   if (foobar[i] % 2 === 0 && foobar[i] % 3 === 0) {
//     console.log(foobar[i], "foobar");
//   } else if (foobar[i] % 3 === 0) {
//     console.log(foobar[i], "bar");
//   } else if (foobar[i] % 2 === 0) {
//     console.log(foobar[i], "foo");
//   }
// }

// for (const barfoo of foobar) {
//   console.log(barfoo);
// }
// for (const barfoo of foobar) {
//   if (barfoo % 2 === 0 && barfoo % 3 === 0) {
//     console.log(barfoo, "barfoo");
//   } else if (barfoo % 3 === 0) {
//     console.log(barfoo, "foo");
//   } else if (barfoo % 2 === 0) {
//     console.log(barfoo, "bar");
//   }
// }

// const scores1 = [93, 28, 49, 90, 100, 54, 98, 89, 38, 75, 67, 77, 80];

// for (let i = 0; i < scores1.length; i++) {
//   if (scores1[i] >= 94) {
//     console.log(scores1[i], "A");
//   } else if (scores1[i] >= 85) {
//     console.log(scores1[i], "B");
//   } else if (scores1[i] >= 75) {
//     console.log(scores1[i], "C");
//   } else if (scores1[i] >= 65) {
//     console.log(scores1[i], "D");
//   } else {
//     console.log(scores1[i], "F");
//   }
// }

// for (const grading of scores1) {
//   if (grading >= 94) {
//     console.log(grading, "Grade A");
//   } else if (grading >= 85) {
//     console.log(grading, "Grade B");
//   } else if (grading >= 75) {
//     console.log(grading, "Grade C");
//   } else if (grading >= 65) {
//     console.log(grading, "Grade D");
//   } else {
//     console.log(grading, "Grade F");
//   }
// }

// const songs = [
//   {
//     title: "bang bang bang",
//     artist: "big bang",
//     songCount: 48273,
//   },
//   {
//     title: "hello",
//     artist: "adele",
//     songCount: 4827,
//   },
//   {
//     title: "bye bye bye",
//     artist: "nsync",
//     songCount: 48272,
//   },
//   {
//     title: "gone",
//     artist: "justin timberlake",
//     songCount: 27374,
//   },
// ];

// for (let i = 0; i < songs.length; i++) {
//   if (songs[i].songCount >= 20000 && songs[i].songCount % 2 === 0) {
//     console.log(songs[i]);
//   }
// }

// for (const hitsongs of songs) {
//   if (hitsongs.songCount >= 20000 && hitsongs.songCount % 2 === 0) {
//     console.log(hitsongs);
//   }
// }

// songs.forEach((song) => {
//   console.log(song.title);
// });
