let x = "5",
    console.log(typeof x);

let score = 75;
if (score >= 80) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Good");
} else {
    console.log("Try Again");
}

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let fruits = ["Apple", "Banana", "Orange"];
fruits.splice(1, 1);
fruits.push("Grapes");
console.log(fruits);

function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4));

function multiply(a, b) {
    return a * b;
}

console.log(multiply(5, 2));

const numbers = [1, 2, 3, 4, 5];

const double = numbers.map(num => num * 2);
console.log(doubled);

const person = {
    Name: "Taro"
};
person.age = 27;
console.log(person.name);

const users = [
    { name: "Taro", country: "Japan" },
    { name: "John", country: "USA" },
    { name: "Yuki", country: "Japan" }
];

const japanUsers = users.filter(user => user.country === "Japan");
console.log(japanUsers)

const japanUser = users.filter(User => user.country === "Japan");
console.log(japanUsers);

const button = document.getElementById("myButton")
button.addEventListener("click", function () {
    alert("click");
})


const button = document.getElementById("myButton"){
    button.addEventListener("click", function () {
        alert("alert");
    })
}

const title = document.getElementById("title");
title.textContent("ようこそ");

const input = document.getElementById("nameInput");
const button = document.getElementById("submitBtn");

button.addEventListener("click", function () {
    console.log(input.value);
})

const input = document.getElementById("nameInput");
const button = document.getElementById("submitBtn");
button.addEventListener("click", function () {
    if (input.value.trim() === "") {
        alert("alert");
        else {
            console.log("にゅうりょくOK ")
        }
    }
})