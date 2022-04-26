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
  return a / b;
}

function operate (operator, a, b) {
  switch (operator) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      console.log("The operate() function has failed");
  }
}

let display = document.querySelector('#display');

function one () {
  if (display.textContent.length < 11) {
    display.textContent += "1";
  }
}

function two () {
  if (display.textContent.length < 11) {
    display.textContent += "2";
  }
}

function three () {
  if (display.textContent.length < 11) {
    display.textContent += "3";
  }
}

function four () {
  if (display.textContent.length < 11) {
    display.textContent += "4";
  }
}

function five () {
  if (display.textContent.length < 11) {
    display.textContent += "5";
  }
}

function six () {
  if (display.textContent.length < 11) {
    display.textContent += "6";
  }
}

function seven () {
  if (display.textContent.length < 11) {
    display.textContent += "7";
  }
}

function eight () {
  if (display.textContent.length < 11) {
    display.textContent += "8";
  }
}

function nine () {
  if (display.textContent.length < 11) {
    display.textContent += "9";
  }
}

function zero () {
  if (display.textContent.length < 11) {
    display.textContent += "0";
  }
}

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', one);

const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', two);

const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', three);

const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', four);

const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', five);

const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', six);

const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', seven);

const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', eight);

const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', nine);

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', zero);
