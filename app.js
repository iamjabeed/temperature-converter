const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");
const btnEl = document.getElementById("btn");

function getTempVal(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (currentValue + 273.32).toFixed(0);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed();
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(0);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(0);
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.32).toFixed(0);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(0);
      break;
    default:
      break;
  }
}
btnEl.addEventListener("click", getTempVal);
