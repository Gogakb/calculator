function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  // Retrieve the expression from the display
  var expression = document.getElementById("display").value;
  var result = 0;

  // if-else statements
  if (expression.includes("+")) {
    var numbers = expression.split("+");
    result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
  } else if (expression.includes("-")) {
    var numbers = expression.split("-");
    result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
  } else if (expression.includes("*")) {
    var numbers = expression.split("*");
    result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
  } else if (expression.includes("/")) {
    var numbers = expression.split("/");
    result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
  }

  // Update the display with the calculated result
  document.getElementById("display").value = result;
}
