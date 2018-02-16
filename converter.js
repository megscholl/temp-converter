console.log("I'm working");

let userInput = document.getElementById("userDegreeInput");
let cel = document.getElementById("celsius");
let fahr = document.getElementById("fahrenheit");
let button = document.getElementById("converter");
let clear = document.getElementById("clearBtn");
let result = document.getElementById("outputTemp");
let merp = document.getElementById("index");


 function checkedTemp(event) {
  // debugger;
  console.log("checkedTemp is working");
  if(cel.checked === true) {
    event.preventDefault();
    toCelsius();
    // console.log("celsius is checked");
  } else if(fahr.checked === true){
    event.preventDefault();
    toFahrenheit();
    // console.log("fahr is checked");
  }
};

function toCelsius() {
  let celsiusMath = (userInput.value - 32) * 5 / 9;
  result.innerHTML = `${celsiusMath.toFixed()} &#176;C`;
  // console.log("C is working", celsiusMath.toFixed());
  if(celsiusMath > 32){
    result.style.color = "red";
  } else if(celsiusMath < 0) {
    result.style.color = "blue";
  } else if(celsiusMath <= 32 && celsiusMath >= 0) {
    result.style.color = "green";
  }
};

function toFahrenheit () {
  let fahrMath = (userInput.value * 1.8) + 32;
  result.innerHTML = `${fahrMath.toFixed()} &#176;F`;
  // console.log("F is working", fahrMath.toFixed());
  if(fahrMath > 90){
    result.style.color = "red";
  } else if(fahrMath < 32) {
    result.style.color = "blue";
  } else if(fahrMath <= 90 && fahrMath >= 32) {
    result.style.color = "green";
  }
};

merp.addEventListener("keyup", function enter(e) { 
  console.log("enter code", e);
      if (e.keyCode == 13) {
        console.log("enter key works");
        checkedTemp(event);
  }
});



function removeMsg() {
  result.innerHTML = "";
  userInput.value = ""
}

button.addEventListener("click", checkedTemp);

clear.addEventListener("click", removeMsg);