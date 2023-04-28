function kelvinToCelsius(kelvin) {
  return parseFloat ((kelvin - 273.15).toFixed(2));
}

function kelvinToFahrenheit(kelvin) {
  return parseFloat ((kelvin * 9 / 5 - 459.67).toFixed(2));
}

function celsiusToFahrenheit(celsius) {
  return parseFloat((celsius * 9 / 5 + 32).toFixed(2));
}

function celsiusToKelvin(celsius) {
  return parseFloat(( celsius + 273.15).toFixed(2));
}

function fahrenheitToKelvin(fahrenheit) {
  return parseFloat(((fahrenheit + 459.67) * 5 / 9).toFixed(2));
}

function fahrenheitToCelsius(fahrenheit) {
  return parseFloat(((fahrenheit - 32) * 5 / 9).toFixed(2));
}



function convertTemperature(temperature, initialUnit, finalUnit) {
  // your code here
  let result = null;

  if (initialUnit === 'K') {
    if (finalUnit === 'C') {
      result = kelvinToCelsius(temperature);
    } else if (finalUnit === 'F') {
      result = kelvinToFahrenheit(temperature);
    } else {
      result = temperature;
    }
  } else if (initialUnit === 'C') {
    if (finalUnit === 'K') {
      result = celsiusToKelvin(temperature);
    } else if (finalUnit === 'F') {
      result = celsiusToFahrenheit(temperature);
    } else {
      result = temperature;
    }
  } else if (initialUnit === 'F') {
    if (finalUnit === 'K') {
      result = fahrenheitToKelvin(temperature);
    } else if (finalUnit === 'C') {
      result = fahrenheitToCelsius(temperature);
    } else {
      result = temperature;
    }
  } else {
    result = temperature;
  }

  return result;
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};