const foobar = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

for (let i = 0; i < foobar.length; i++) {
  if (foobar[i] % 2 === 0 && foobar[i] % 3 === 0) {
    console.log(foobar[i], "foobar");
  } else if (foobar[i] % 3 === 0) {
    console.log(foobar[i], "bar");
  } else if (foobar[i] % 2 === 0) {
    console.log(foobar[i], "foo");
  }
}

for (const barfoo of foobar) {
  console.log(barfoo);
}
for (const barfoo of foobar) {
  if (barfoo % 2 === 0 && barfoo % 3 === 0) {
    console.log(barfoo, "barfoo");
  } else if (barfoo % 3 === 0) {
    console.log(barfoo, "foo");
  } else if (barfoo % 2 === 0) {
    console.log(barfoo, "bar");
  }
}

const scores1 = [93, 28, 49, 90, 100, 54, 98, 89, 38, 75, 67, 77, 80];

for (let i = 0; i < scores1.length; i++) {
  if (scores1[i] >= 94) {
    console.log(scores1[i], "A");
  } else if (scores1[i] >= 85) {
    console.log(scores1[i], "B");
  } else if (scores1[i] >= 75) {
    console.log(scores1[i], "C");
  } else if (scores1[i] >= 65) {
    console.log(scores1[i], "D");
  } else {
    console.log(scores1[i], "F");
  }
}

for (const grading of scores1) {
  if (grading >= 94) {
    console.log(grading, "Grade A");
  } else if (grading >= 85) {
    console.log(grading, "Grade B");
  } else if (grading >= 75) {
    console.log(grading, "Grade C");
  } else if (grading >= 65) {
    console.log(grading, "Grade D");
  } else {
    console.log(grading, "Grade F");
  }
}

const songs = [
  {
    title: "bang bang bang",
    artist: "big bang",
    songCount: 48273,
  },
  {
    title: "hello",
    artist: "adele",
    songCount: 4827,
  },
  {
    title: "bye bye bye",
    artist: "nsync",
    songCount: 48272,
  },
  {
    title: "gone",
    artist: "justin timberlake",
    songCount: 27374,
  },
];

for (let i = 0; i < songs.length; i++) {
  if (songs[i].songCount >= 20000 && songs[i].songCount % 2 === 0) {
    console.log(songs[i]);
  }
}

for (const hitsongs of songs) {
  if (hitsongs.songCount >= 20000 && hitsongs.songCount % 2 === 0) {
    console.log(hitsongs);
  }
}

songs.forEach((song) => {
  console.log(song.title);
});

const multiplyTwoNumbers = (num1, num2) => {
  console.log(num1 * num2);
};
multiplyTwoNumbers(2, 6);

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
numbers.forEach((num) => {
  multiplyTwoNumbers(num, num);
});

const sayHello = () => {
  console.log("Hello!!");
};
sayHello();

const callAnyFunction = (func) => {
  func(sayHello);
};

[1, 2, 3];
//first it looks at the array
// it starts to loop through it
//and then for each element in the array
//it executes the function that was passed in forEach

for (let i = 0; i < numbers.length; i++) {
  const num1 = numbers[i];
  const num2 = numbers[i];
  console.log(num1 * num2);
}

const oddOrEvenCheck = (num) => {
  if (num % 2 === 0) {
    console.log(num, "Even");
  } else if (num % 2 === 1) {
    console.log(num, "Odd");
  }
};

numbers.forEach(oddOrEvenCheck);

const songs1 = [
  {
    title: "bang bang bang",
    artist: "big bang",
    songCount: 48273,
  },
  {
    title: "hello",
    artist: "adele",
    songCount: 4827,
  },
  {
    title: "bye bye bye",
    artist: "nsync",
    songCount: 48272,
  },
  {
    title: "gone",
    artist: "justin timberlake",
    songCount: 27374,
  },
];

//Both are the same
const printTitleOfSong = (song) => {
  console.log("song data:", song.title);
};

songs.forEach(printTitleOfSong);
// console.log("song data:", song.title);

const printJustinTimberlake = (song) => {
  if (song.artist === "justin timberlake") {
    console.log("Justin Timberlake's", song.title);
  }
};
const printSongCount = (song) => {
  if (song.songCount > 20000) {
    console.log("These songs have over 20K songcounts", song.title);
  }
};

songs.forEach(printJustinTimberlake);
songs.forEach(printSongCount);

const testData = [
  {
    id: 1,
    title: "Implement Login",
    description: "Allow users to log in with email and password",
    status: "To Do",
    assignedTo: "user1@example.com",
    boardId: 1,
  },
  {
    id: 2,
    title: "Design Landing Page",
    description: "Create a responsive landing page with Tailwind CSS",
    status: "In Progress",
    assignedTo: "user2@example.com",
    boardId: 1,
  },
  {
    id: 3,
    title: "Set Up Database",
    description: "Configure Sequelize with SQLite for development",
    status: "Done",
    assignedTo: "user3@example.com",
    boardId: 2,
  },
  {
    id: 4,
    title: "Create Board Model",
    description: "Define the Board model with Sequelize",
    status: "In QA",
    assignedTo: "user4@example.com",
    boardId: 2,
  },
  {
    id: 5,
    title: "Implement Drag-and-Drop",
    description: "Enable moving work items between columns",
    status: "To Do",
    assignedTo: "user5@example.com",
    boardId: 3,
  },
  {
    id: 6,
    title: "Set Up Authentication",
    description: "Implement JWT-based authentication in the backend",
    status: "In Progress",
    assignedTo: "user1@example.com",
    boardId: 3,
  },
  {
    id: 7,
    title: "Optimize Database Queries",
    description: "Improve Sequelize queries for better performance",
    status: "Done",
    assignedTo: "user2@example.com",
    boardId: 4,
  },
  {
    id: 8,
    title: "Integrate File Uploads",
    description: "Allow users to upload attachments to work items",
    status: "In QA",
    assignedTo: "user3@example.com",
    boardId: 4,
  },
  {
    id: 9,
    title: "Create API Documentation",
    description: "Write API docs using Swagger or Postman",
    status: "To Do",
    assignedTo: "user4@example.com",
    boardId: 5,
  },
  {
    id: 10,
    title: "Implement WebSockets",
    description: "Enable real-time updates for work item status changes",
    status: "In Progress",
    assignedTo: "user5@example.com",
    boardId: 5,
  },
];

const printTestDataDone = (done) => {
  if (done.status === "Done" || done.status === "In Progress") {
    console.log("These datas are done or in progress", done.title);
  }
};
// const printTestDataInProgress = (progress) => {
//   if (progress.status === "In Progress") {
//     console.log("These dats are in progress", progress.title);
//   }
// };

testData.forEach(printTestDataDone);
// testData.forEach(printTestDataInProgress);

// let done = 0;
// const printTestDataDoneCount = (doneCount) => {
//   if (doneCount.status === "Done") {
//     done++;
//   }
// };
// testData.forEach(printTestDataDoneCount);
// console.log(done);

let doneCount = 0;
let todoCount = 0;
let progressCount = 0;
let inQACount = 0;
const printTestDataStatus = (status) => {
  if (status.status === "Done") {
    doneCount++;
  } else if (status.status === "To Do") {
    todoCount++;
  } else if (status.status === "In Progress") {
    progressCount++;
  } else {
    inQACount++;
  }
};
testData.forEach(printTestDataStatus);
console.log(
  "This many are done:",
  doneCount,
  "This many are To Do:",
  todoCount,
  "This many are in progress:",
  progressCount,
  "This many are in QA:",
  inQACount
);

//array methods
//array.forEach()
//array.push, it adds an element to the end of the array
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
//array.pop, it removes the last element in the array
arr.pop();
console.log(arr);

let inQAStatus = [];
const printTestDataQA = (testData) => {
  if (testData.status === "In QA") {
    inQAStatus.push(testData);
  }
};
let idboard2 = [];
const printIdBoard = (testData) => {
  if (testData.boardId === 2) {
    idboard2.push(testData.title);
  }
};

testData.forEach(printTestDataQA);
console.log(inQAStatus);
inQAStatus.forEach(printIdBoard);
console.log(idboard2);

const numbersarr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
let sumOdd = 0;
const printSumOfOdd = (oddSum) => {
  if (oddSum % 2 === 1) {
    sumOdd += oddSum;
  }
};
numbersarr.forEach(printSumOfOdd);
console.log("The sum of odd is", sumOdd);
