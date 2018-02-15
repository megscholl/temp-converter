console.log("I'm working");

let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheight");

function toCelsius(event){ 
  if(event.keycode === 13 && celcius.checked === true) {
    toCelcius();
    console.log("toCelcius is working");
  }  else{
    alert("please enter temperature value");
}};

function toFahrenheit(event) { // if user chooses C to convert to F, then this function will run
  if(event.keycode === 13 && fahrenheit.checked === true) {
    toFahrenheit();
    console.log("toCelcius is working");
  }  else{
    alert("please enter temperature value");
  console.log("converting to C");
}

//display what the user inputted to the div

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);