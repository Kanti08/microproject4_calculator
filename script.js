const display = document.querySelector(".display-area input");
const buttons = document.querySelectorAll(".calculator-area button");

let currentInput = "";
let currentOperation = null;

function updateDisplay() {
  display.value = currentInput || "0";
}

function handleButtonClick(event) {
  const buttonValue = event.target.textContent;

  if (!isNaN(buttonValue) || buttonValue === ".") {
    currentInput += buttonValue;
  } else if (buttonValue === "DEL") {
    currentInput = currentInput.slice(0, -1);
  } else if (buttonValue === "RESET") {
    r;
    currentInput = "0";
    currentOperation = null;
  } else if (buttonValue === "=") {
    if (currentOperation && currentInput !== "") {
      try {
        const result = eval(currentInput);
        currentInput = result.toString();
        currentOperation = null;
      } catch (error) {
        currentInput = "Error";
      }
    }
  } else {
    currentOperation = buttonValue;
    if (currentInput !== "") {
      currentInput += " " + currentOperation + " ";
    }
  }

  updateDisplay();
}

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

updateDisplay();