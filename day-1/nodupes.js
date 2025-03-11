const nums10 = [1, 1, 2, 2, 3, 4, 4, 5];
let noDupes = [];
let noDupesCheck = 0;
const printNoDup = (dupes1) => {
  if (dupes1 !== noDupesCheck) {
    noDupes.push(dupes1);
    noDupesCheck = dupes1;
  }
};
nums10.forEach(printNoDup);
console.log(noDupes);

let noDupes2 = [];
const lastNum = nums10.pop();
let noDupesCheck2 = 0;
const printNoDupe2 = (dupes2) => {
  if (dupes2 !== lastNum && dupes2 !== noDupesCheck2) {
    noDupes2.push(dupes2);
    noDupesCheck2 = dupes2;
  }
};
nums10.forEach(printNoDupe2);
noDupes2.push(5);
console.log(noDupes2);
