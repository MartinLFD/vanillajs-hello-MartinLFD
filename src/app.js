/* eslint-disable */


let pica = ["♦","♥","♠","♣"];
let numbers = ["2","3","4","5","6","7","8","9","10","J","Q","K"];


window.onload = function() {
  RandomCardGenerator();
}


function RandomCardGenerator() {
  
  const picaGenerator = pica[Math.floor(Math.random() * pica.length)];
  const NumberGenerator = numbers[Math.floor(Math.random() * numbers.length)];

  document.querySelector("#UpPica").innerHTML = picaGenerator;
  document.querySelector("#NumberCenter").innerHTML = NumberGenerator;
  document.querySelector("#BottomPica").innerHTML = picaGenerator;

  if(picaGenerator === "♦" || picaGenerator === "♥"){
      document.querySelector("#UpPica").style.color = "red";
      document.querySelector("#BottomPica").style.color = "red";
  }

}

