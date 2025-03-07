const myConsoleLog = () => {
  //function syntax
  //code goes here
  console.log("hello");
};
myConsoleLog(); //calling the function

const add2Plus2 = () => {
  console.log(2 + 2);
};
add2Plus2();

const callMyName = (firstName, lastName) => {
  console.log(firstName, lastName);
};
callMyName("Tae", "Cho");
callMyName("Marco", "Seo");
callMyName("Phil", "Lee");
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

const printSongTitle = (song) => {
  console.log(song.songCount);
};
// printSongTitle({
//   title: "Gone",
//   artist: "Justin Timberlake",
//   songCount: 27374,
// });
// songs.forEach(printSongTitle);

const largerNum = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1);
  } else {
    console.log(num2);
  }
};
largerNum(1, 5);
largerNum(100, 2000);
