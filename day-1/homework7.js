const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i], "is even");
  } else {
    numbers[i] % 3 === 0;
    console.log(numbers[i], "is Odd");
  }
}

const numbers1 = [1, 3, 5, 10, 15, 18, 20, 30];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 3 === 0 && numbers1[i] % 5 === 0) {
    console.log(numbers1[i], "Baum Academy");
  } else if (numbers1[i] % 5 === 0) {
    console.log(numbers1[i], "Phil");
  } else {
    numbers[i] % 3 === 0;
    console.log(numbers1[i], "Marco");
  }
}

const numbers2 = [3, 5, 6, 9, 10, 12, 15, 18, 20, 30];
let sumthree = 0;
let sumfive = 0;
let sumthreecount = 0;
let sumfivecount = 0;
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] % 3 === 0 && numbers2[i] % 5 === 0) {
    sumthree += numbers2[i];
    sumthreecount++;
    sumfive += numbers2[i];
    sumfivecount++;
  } else if (numbers2[i] % 5 === 0) {
    sumfive += numbers2[i];
    sumfivecount++;
  } else if (numbers2[i] % 3 === 0) {
    sumthree += numbers2[i];
    sumthreecount++;
  }
}

console.log("The sum of three is", sumthree);
console.log("The count of divisible by 3 is", sumthreecount);
console.log("The sum of five is", sumfive);
console.log("The count of disivible by five is", sumfivecount);
