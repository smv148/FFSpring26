"use strict";

let themeButton = document.getElementById("themeButton");
let titleButton = document.getElementById("titleButton");
let messageButton = document.getElementById("messageButton");

let mainTitle = document.getElementById("mainTitle");
let specialMessage = document.getElementById("specialMessage");

let cakeCard = document.getElementById("cakeCard");
let cookieCard = document.getElementById("cookieCard");
let croissantCard = document.getElementById("croissantCard");

/* Interactive element 1 */
themeButton.addEventListener("click", function () {
    document.querySelector("body").classList.toggle("dark-theme");
});

/* Interactive element 2 */
titleButton.addEventListener("click", function () {
    mainTitle.innerHTML = "Moonlight Bakery Specials";
    mainTitle.style.color = "#b76e79";
});

/* Interactive element 3 */
messageButton.addEventListener("click", function () {
    specialMessage.innerHTML = "Today's special is a Midnight Berry Tart!";
    specialMessage.classList.add("large-text");
});

/* Extra hover interactions */
cakeCard.addEventListener("mouseover", function () {
    cakeCard.classList.add("highlight");
});

cakeCard.addEventListener("mouseout", function () {
    cakeCard.classList.remove("highlight");
});

cookieCard.addEventListener("mouseover", function () {
    cookieCard.classList.add("highlight");
});

cookieCard.addEventListener("mouseout", function () {
    cookieCard.classList.remove("highlight");
});

croissantCard.addEventListener("mouseover", function () {
    croissantCard.classList.add("highlight");
});

croissantCard.addEventListener("mouseout", function () {
    croissantCard.classList.remove("highlight");
});