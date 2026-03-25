"use strict";

let tabContent = document.querySelectorAll(".tabcontent");
console.log(tabContent.length);

for(let i = 0; i<tabContent.length; i++){
    tabContent[i].style.display = "none";
}

tabContent.forEach(tab =>{
    tab.style.display = "block";
});






let tablinks = document.querySelectorAll(".tablinks");