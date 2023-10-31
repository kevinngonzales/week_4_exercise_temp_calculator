const celsiusToFahrenheit = (temp) => (temp - 32) / 1.8; // created arrow function to convert temp from  C to F
const fahrenheitToCelsius = (temp) => (temp * 1.8) + 32; // created arrow function to convert temp from  F to C

function convertTemperature (temp) {  // created a function to determine which appropriate function to use 
  if (temp.endsWith ("C")) {  // if inputted temp ends with C
    celsiusToFahrenheit(temp); // <-- run this function
    return celsiusToFahrenheit(parseFloat(temp)); // use parseFloat to convert string to a number
  }
  else (temp.endsWith ("F"))  
    fahrenheitToCelsius(temp); 
    return fahrenheitToCelsius(parseFloat(temp)); 
  }

console.log(convertTemperature("42C")) // log conversion to console
