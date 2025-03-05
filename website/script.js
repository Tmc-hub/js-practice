function changeText() {
  document.getElementById("message").innerText = "JavaScript is fun!";
  document.getElementById("greeting").innerText = "You are now code-master!";
}

const foods = ["Sphaghetti", "Pizza", "Ice Cream", "Burger", "Fried Chicken"];
function renderListFavoriteFoods() {
  const ul = document.getElementById("food-list");
  ul.innerHTML = null;
  for (let i = 0; i < foods.length; i++) {
    const li = document.createElement("li");
    li.textContent = foods[i];
    ul.appendChild(li);
  }
}
// renderListFavoriteFoods();
const classmates = ["Miran", "Kaiser", "Monica", "Esther", "DJ"];
function renderClassmatesList() {
  const ul = document.getElementById("classmates-list");
  ul.innerHTML = null;
  for (let i = 0; i < classmates.length; i++) {
    const li = document.createElement("li");
    li.textContent = classmates[i];
    ul.appendChild(li);
  }
}

const hobbies = ["Games", "Eating", "Movies"];
function renderListMyHobbies() {
  const ul = document.getElementById("hobby-list");
  ul.innerHTML = null;
  for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = hobbies[i];
    ul.appendChild(li);
  }
}
const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 22 },
  { name: "David", age: 23 },
  { name: "Eve", age: 24 },
  { name: "Frank", age: 25 },
  { name: "Grace", age: 26 },
  { name: "Hank", age: 27 },
  { name: "Ivy", age: 28 },
  { name: "Jack", age: 29 },
];
function renderListStudents() {
  const ul = document.getElementById("students-list");
  ul.innerHTML = null;
  for (let i = 0; i < students.length; i++) {
    const li = document.createElement("li");
    li.textContent = students[i].name + " " + students[i].age;
    ul.appendChild(li);
  }
}

function handleSubmit() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let agree = document.getElementById("agree").checked;

  const message = document.getElementById("message-3");
  message.innerText = `Username: ${username}, Password: ${password}`;

  return false;
}
