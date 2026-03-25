"use strict";

//single line comment
/* multi
line 
comment
*/
// ctrl or cmd + / is the keyboard command

let message = "Hello world!";
console.log(message);
alert(message);

document.querySelector("#heading").innerText = message; //this is more general
document.getElementById("heading").innerText = message; //this is more specific
//both do the same things

