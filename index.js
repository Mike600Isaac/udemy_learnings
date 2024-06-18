let randNum1 = Math.floor(Math.random() * 6) + 1;
let randNum2 = Math.floor(Math.random() * 6) + 1;

let firstQuery = document.querySelector(".img1");
let secondQuery = document.querySelector(".img2");

let display_1 = "images/dice" + randNum1 + ".png";
let display_2 = "images/dice" + randNum2 + ".png";

firstQuery.setAttribute("src", display_1);
secondQuery.setAttribute("src", display_2);

if (randNum1 < randNum2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins🚩"
} else if (randNum1 > randNum2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins"
} else if (randNum1 == randNum2) {
  document.querySelector("h1").innerHTML = "draws!"
}