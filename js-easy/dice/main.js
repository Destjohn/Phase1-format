const startBtn = document.getElementById("Btn");
const body = document.querySelector("body");

const dise = document.createElement("img");

body.appendChild(dise);
dise.style.width = "100px";
dise.style.height = "100px";

let diseNum = "./img/saikoro.png";
dise.setAttribute("src",diseNum);
const random = function(){
    diseNum = "./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png";
    dise.setAttribute("src", diseNum);
};
var timer;
timer = setInterval("random()",100);
