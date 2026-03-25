"use strict";

let themeButton = document.getElementById("themeButton");
let storyButton = document.getElementById("storyButton");
let endingText = document.getElementById("endingText");

let miloCard = document.getElementById("miloCard");
let saffyCard = document.getElementById("saffyCard");
let percyCard = document.getElementById("percyCard");

/* Button 1: change theme */
themeButton.addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#fff8dc";
    document.querySelector("body").style.color = "#5a3d00";
    document.querySelector("header").style.backgroundColor = "#ffd6e7";
    document.querySelector("header").style.borderRadius = "12px";
});

/* Button 2: change title */
storyButton.addEventListener("click", function () {
    document.querySelector("h1").innerHTML = "The Rainbow Rally: A Super Fun Tennis Adventure!";
    document.querySelector("h1").style.color = "purple";
});

/* Listener 3: double click ending text */
endingText.addEventListener("dblclick", function () {
    endingText.innerHTML = "<mark>🌈 Friendship always wins! 🌈</mark>";
    endingText.style.fontSize = "24px";
    endingText.style.color = "purple";
});

/* Milo card hover */
miloCard.addEventListener("mouseover", function () {
    miloCard.style.backgroundColor = "#f0f8ff";
    miloCard.style.transform = "scale(1.05)";
});

miloCard.addEventListener("mouseout", function () {
    miloCard.style.backgroundColor = "white";
    miloCard.style.transform = "scale(1)";
});

/* Saffy card hover */
saffyCard.addEventListener("mouseover", function () {
    saffyCard.style.backgroundColor = "#f0f8ff";
    saffyCard.style.transform = "scale(1.05)";
});

saffyCard.addEventListener("mouseout", function () {
    saffyCard.style.backgroundColor = "white";
    saffyCard.style.transform = "scale(1)";
});

/* Percy card hover */
percyCard.addEventListener("mouseover", function () {
    percyCard.style.backgroundColor = "#f0f8ff";
    percyCard.style.transform = "scale(1.05)";
});

percyCard.addEventListener("mouseout", function () {
    percyCard.style.backgroundColor = "white";
    percyCard.style.transform = "scale(1)";
});