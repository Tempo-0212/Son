let currentNumber = 0;

function setNumber() {
  const input = document.getElementById('numberInput').value;
  currentNumber = parseInt(input) || 0;
  updateDisplay();
}

function increase() {
  currentNumber++;
  updateDisplay();
}

function decrease() {
  currentNumber--;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').textContent = currentNumber;
}

function changeColor() {
  const selectedColor = document.getElementById('colorSelect').value;
  document.getElementById('display').style.color = selectedColor;
}

changeColor(); 