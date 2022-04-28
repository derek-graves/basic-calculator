let operand1 = "";
let operand2 = "";
let operation = "";
let inActiveOperation = false;
let display = document.querySelector('#display');

function add (a, b) {
  return a + b;
}

function subtract (a, b) {
  return a - b;
}

function multiply (a, b) {
  return a * b;
}

function divide (a, b) {
  if (b === 0) {
    return "ERROR";
  }
  return a / b;
}

function operate (operator, a, b) {
  switch (operator) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '×':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      console.log("The operate() function has failed");
  }
}

const numbers = Array.from(document.querySelectorAll('.numeric'));
numbers.forEach((button) => {
  button.addEventListener('click', () => {
    if (display.textContent === operand1) {
      display.textContent = button.textContent;
    } else if (display.textContent === "ERROR") {
      clearAll();
      display.textContent = button.textContent;
    } else {
      if (display.textContent.length < 11) {
       display.textContent += button.textContent;
      }
    }
  });
});

function countDecimal () {
  return (display.textContent.match(/\./g) || []).length;
}

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
  const decimalCount = countDecimal();
  if (decimalCount === 0) {
    display.textContent += ".";
  }
});

const backspaceButton = document.querySelector('#erase');
backspaceButton.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0,-1);
});

function clearAll () {
  display.textContent = "";
  operand1 = "";
  operand2 = "";
  operation = "";
  inActiveOperation = false;
}

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearAll)

const operationButtons = Array.from(document.querySelectorAll('.operation'));
operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    inActiveOperation = true;
    operand1 = display.textContent;
    operation = button.textContent;
  });
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
  if (!inActiveOperation) {
    display.textContent = "ERROR";
  } else {
    operand2 = display.textContent;
    display.textContent = operate(operation, Number(operand1), Number(operand2));
    operand1 = "";
    operand2 = "";
    operation = "";
    inActiveOperation = false;
  }
}); 


