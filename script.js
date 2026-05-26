//your JS code here. If required.
let line = document.getElementById("line");
let deg = 0;
setInterval(function (){
line.style.transform = `rotate(${deg}2deg)`;
	deg += 2
} , 20)