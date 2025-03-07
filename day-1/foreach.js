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
