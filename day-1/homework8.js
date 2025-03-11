const books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, year: 1937 },
  { title: "Harry Potter", author: "J.K. Rowling", pages: 500, year: 1997 },
  { title: "Atomic Habits", author: "James Clear", pages: 250, year: 2018 },
  { title: "The Alchemist", author: "Paulo Coelho", pages: 208, year: 1988 },
  { title: "Deep Work", author: "Cal Newport", pages: 304, year: 2016 },
];

for (let i = 0; i < books.length; i++) {
  if (books[i].pages > 300) {
    console.log("These books have more than 300 pages", books[i]);
  }
}

for (const after of books) {
  if (after.year < 2015) {
    console.log("These books are after 2015", after);
  }
}

books.forEach((titles) => {
  console.log(titles.title);
});

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    rating: 8.8,
    year: 2010,
  },
  { title: "The Matrix", director: "Lana Wachowski", rating: 8.7, year: 1999 },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    rating: 9.2,
    year: 1972,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    rating: 8.6,
    year: 2014,
  },
  { title: "Titanic", director: "James Cameron", rating: 7.8, year: 1997 },
];

for (let i = 0; i < movies.length; i++) {
  if (movies[i].rating > 8) {
    console.log("These movies have rating higher than 8", movies[i]);
  }
}
for (before of movies) {
  if (before.year < 2000) {
    console.log("Theses movies came out before 2000", before);
  }
}

//Function 1
const addNumbers = (num1, num2) => {
  console.log("The result is", num1 + num2);
};
addNumbers(4, 8);

//Function 2
const printName = (names) => {
  console.log("My name is", names);
};
printName("Tae");
printName("Andrew");
printName("Sam");

const printName1 = (names1) => {
  console.log("The names are", names1);
};
const names2 = ["Tae", "Andrew", "Sam"];
names2.forEach(printName1);

//Function 3
const printBookTitle = (book) => {
  console.log(book.title, book.author, book.pages);
};
const book1 = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
  year: 1937,
};
const book2 = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  pages: 500,
  year: 1997,
};
const book3 = {
  title: "Atomic Habits",
  author: "James Clear",
  pages: 250,
  year: 2018,
};
printBookTitle(book1);
printBookTitle(book2);
printBookTitle(book3);

const printBookTitle2 = (book1) => {
  console.log(
    "Theses books are my favorites",
    book1.title,
    book1.author,
    book1.pages,
    book1.year
  );
};
const books1 = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: 310, year: 1937 },
  { title: "Harry Potter", author: "J.K. Rowling", pages: 500, year: 1997 },
  { title: "Atomic Habits", author: "James Clear", pages: 250, year: 2018 },
];
books1.forEach(printBookTitle2);

//Function challenge 1
const numbers = [1, 2, 3, 4, 5, 6];
const oddorEven = (nums) => {
  if (nums % 2 === 1) {
    console.log(nums, "odd");
  } else if (nums % 2 === 0) {
    console.log(nums, "even");
  }
};
numbers.forEach(oddorEven);

//Function challenge 2
const theNames = ["Alice", "Bob", "Charlie", "David"];
const printNames = (names) => {
  console.log("Hello", names + "!");
};
theNames.forEach(printNames);
