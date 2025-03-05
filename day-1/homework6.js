const numArr = [3, 7, 2, 9, 5, 8, 5, 3, 6, 4, 2];
let evenSum = 0;
let oddSum = 0;
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 === 0) {
    evenSum += numArr[i];
    evenCount++;
  } else {
    oddSum += numArr[i];
    oddCount++;
  }
}
console.log("The sum of even is", evenSum);
console.log("The sum of odd is", oddSum);
console.log("The number of even numbers in the array is", evenCount);
console.log("The number of odd numbers in the array is", oddCount);
console.log(
  "Total amount numbers of both even and odds is",
  evenCount + oddCount
);

let highest = 0;
let lowest = 0;
for (let i = 0; i < numArr.length; i++) {
  if (highest < numArr[i]) {
    highest = numArr[i];
  } else {
    lowest < numArr[i] && highest > lowest;
    lowest = numArr[i];
  }
}
console.log("The highest number is", highest);
console.log("The lowest number is", lowest);
