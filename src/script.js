// Завдання 1: Створити ітератор, який повертає всі парні числа від 0 до заданого числа.

function evenNumbersIterator(limit) {
  let num = 0;
  return {
    next: function() {
      while (num <= limit) {
        let current = num;
        num += 2;
        if (current <= limit && current % 2 === 0) {
          return {value: current, done: false};
        }
      }
      return {done: true};
    }
  };
}

let iterator = evenNumbersIterator(10);

console.log(iterator.next()); // {value: 0, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: 6, done: false}
console.log(iterator.next()); // {value: 8, done: false}
console.log(iterator.next()); // {value: 10, done: false}
console.log(iterator.next()); // {done: true}



// Завдання 2: Створити ітератор, який повертає всі ключі об'єкта.
let person = {
  name: "John",
  age: 30,
  gender: "male"
};

function keysIterator(obj) {
  let keys = Object.keys(obj);
  let index = 0;
  return {
    next: function() {
      if (index < keys.length) {
        return {value: keys[index++], done: false};
      } else {
        return {done: true};
      }
    }
  };
}

let iterator = keysIterator(person);

console.log(iterator.next()); // {value: "name", done: false}
console.log(iterator.next()); // {value: "age", done: false}
console.log(iterator.next()); // {value: "gender", done: false}
console.log(iterator.next()); // {done: true}



// Завдання 3: Створити ітератор, який повертає всі елементи масиву, які менші за задане число.
let arr = [1, 5, 7, 10, 2, 4];

function lessThanIterator(array, limit) {
  let index = 0;
  return {
    next: function() {
      while (index < array.length) {
        let current = array[index++];
        if (current < limit) {
          return {value: current, done: false};
        }
      }
      return {done: true};
    }
  };
}

let iterator = lessThanIterator(arr, 6);

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 5, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {done: true}



// Завдання 1: Написати генератор, який повертає всі числа Фібоначчі до заданого числа.
function* fibonacciGenerator(limit) {
  let prev = 0, curr = 1;
  while (prev + curr <= limit) {
    yield prev + curr;
    curr = prev + curr;
    prev = curr - prev;
  }
}

let generator = fibonacciGenerator(20);

for (let num of generator) {
  console.log(num);
}
// 1 2 3 5 8 13


// Завдання 2: Написати генератор, який повертає всі парні числа масиву.
function* evenNumbersGenerator(array) {
  for (let num of array) {
    if (num % 2 === 0) {
      yield num;
    }
  }
}

let generator = evenNumbersGenerator([1, 2, 3, 4, 5, 6]);

for (let num of generator) {
  console.log(num);
}
// 2 4 6



// Завдання 3: Написати генератор, який повертає кожну другу літеру рядка.
function* everyOtherLetterGenerator(str) {
  for (let i = 1; i < str.length; i += 2) {
    yield str[i];
  }
}

let generator = everyOtherLetterGenerator("hello world");

for (let letter of generator) {
  console.log(letter);
}
// e l o w r d




// Написати функцію, яка повертає Promise, що резолвиться через певний проміжок часу (наприклад, 1 секунду).
function waitOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Finished waiting one second');
    }, 1000);
  });
}

waitOneSecond().then(result => console.log(result));
// 'Finished waiting one second' (виведеться через 1 секунду)




// Написати функцію, яка приймає колбек і викликає його через 1 секунду.
function callAfterOneSecond(callback) {
  setTimeout(() => {
    callback();
  }, 1000);
}

callAfterOneSecond(() => console.log('Called after one second'));
// 'Called after one second' (виведеться через 1 секунду)



// Написати функцію, яка повертає Promise, який резолвиться, якщо число, передане в аргументах, є парним.
function isEven(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`${num} is even`);
    } else {
      reject(`${num} is not even`);
    }
  });
}

isEven(4)
  .then(result => console.log(result), 
        error => console.error(error) )
// '4 is even'

isEven(3)
  .then(result => console.log(result))
  .catch(error => console.error(error));
// '3 is not even'





// Написати функцію, яка повертає Promise, який резолвиться через 1 секунду. Обгорнути її в async/await.
function waitOneSecond() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Finished waiting one second');
    }, 1000);
  });
}

async function exampleAsyncFunction() {
  const result = await waitOneSecond();
  console.log(result);
}

exampleAsyncFunction();
// 'Finished waiting one second' (виведеться через 1 секунду)





// Написати функцію, яка приймає колбек і викликає його через задану кількість мілісекунд.
function callWithDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay);
}

callWithDelay(1000, () => console.log('Called after one second'));
// 'Called after one second' (виведеться через 1 секунду)




// Написати функцію, яка приймає масив чисел і повертає Promise, який резолвиться з їх сумою. Обгорнути її в async/await.
function sumNumbers(numbers) {
  return new Promise(resolve => {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    resolve(sum);
  });
}

async function exampleAsyncFunction() {
  const numbers = [1, 2, 3, 4, 5];
  const sum = await sumNumbers(numbers);
  console.log(sum);
}

exampleAsyncFunction();
// 15





// Написати функцію, яка повертає Promise, який резолвиться через заданий час, або реджектиться з помилкою, якщо час, переданий в аргументах, більший за 5 секунд.
function timeoutPromise(time) {
  return new Promise((resolve, reject) => {
    if (time <= 5000) {
      setTimeout(() => {
        resolve('Finished waiting');
      }, time);
    } else {
      reject('Timeout error');
    }
  });
}

timeoutPromise(3000)
  .then(result => console.log(result))
  .catch(error => console.error(error));
// 'Finished waiting' (виведеться через 3 секунди)

timeoutPromise(6000)
  .then(result => console.log(result))
  .catch(error => console.error(error));
// 'Timeout error'





// Написати функцію, яка приймає колбек і викликає його через 1 секунду, а потім повертає Promise з результатом виконання колбека. Обгорнути її в async/await.
function callWithCallback(callback) {
  setTimeout(() => {
    const result = callback();
    return Promise.resolve(result);
  }, 1000);
}

async function exampleAsyncFunction() {
  const result = await callWithCallback(() => 'Called with callback');
  console.log(result);
}

exampleAsyncFunction();
// 'Called with callback' (виведеться через 1 секунду)
