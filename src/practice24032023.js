// Написати генератор яки повертае всі числа Фибоначчи до заданного числа
function generateFibonacciNumbersUntil(limit) {
  let fib = [0, 1];
  let next = 1;
  while (next <= limit) {
    fib.push(next);
    next = fib[fib.length - 1] + fib[fib.length - 2];
  }
  return fib;
}
const fibonacciNumbers = generateFibonacciNumbersUntil(100); // здесь 100 - це ліміт
console.log(fibonacciNumbers); // повертае [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// Написати генератор який повертає всі парні значення масив
function generateEvenNumbers(array) {
  const evenNumbers = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNumbers.push(array[i]);
    }
  }
  return evenNumbers;
}
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = generateEvenNumbers(inputArray);
console.log(evenNumbers); // Виведе [2, 4, 6, 8, 10]
