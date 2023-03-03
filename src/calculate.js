'use strict';
// Калькулятор
// Створіть простий калькулятор, який може виконувати основні математичні операції.
// Він має мати кнопки для додавання, віднімання, множення та ділення.
// Калькулятор можна розширити, додавши функції, такі як додавання пам'яті, ділення на дроби та інше.
let savedResult = null;
console.log('savedResult');
function addToDisplay(value) {
  document.querySelector('#display').value += value;
}
function clearDisplay() {
  document.querySelector('#display').value = '';
}
function calculate() {
  let displayValue = document.querySelector('#display').value;
  let result = eval(displayValue);
  document.querySelector('#display').value = result;
  savedResult = null;
}
function calculatePercentage() {
  let displayValue = document.querySelector('#display').value;
  let result = eval(displayValue) / 100;
  document.querySelector('#display').value = result;
}
function changeSign() {
  let displayValue = document.querySelector('#display').value;
  let result = eval(displayValue) * -1;
  document.querySelector('#display').value = result;
}
function calculateSquareRoot() {
  let displayValue = document.querySelector('#display').value;
  let result = Math.sqrt(eval(displayValue));
  document.querySelector('#display').value = result;
}
function saveResult() {
  let displayValue = document.querySelector('#display').value;
  savedResult = eval(displayValue);
  document.querySelector('#display').value = '';
}
function recallResult() {
  if (savedResult !== null) {
    document.querySelector('#display').value = savedResult;
  }
}
function clearResult() {
  savedResult = null;
}
function deleteLastDigit() {
  let displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}
