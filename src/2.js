// task2
// Реалізувати функцію знаходження факторіалу числа за допомогою циклу та рекурсивної функції.
// Дослідити швидкодію виконання за допомогою методу time() об'єкта console.
// Зробити виклик для різних вхідних параметрів(4, 6, 13, 20).
// Що буде результатом виконання ?

// function factorial(n) {
//     console.log('n', n)
//     return n < 2 ? 1 : n * factorial(n - 1);
// }

// console.time('factorial');
// console.log('factorial(13)', factorial(13));
// console.timeEnd('factorial');

// function factorialLoop(fact) {
//   let result = 1;
//   for (let i = 2; i <= fact; i++){
//         result *= i;
//     }
//     return result;
// }

// console.time('factorialLoop');
// console.log('factorialLoop(13)', factorialLoop(13));
// console.timeEnd('factorialLoop');

// task5
// Дано структуру функцій:
// function a(b) {b()}
// function b(){}
// function c(a){a()}
// За допомогою console.trace() дізнатись стек виклику функції b()
// function a() {
//   b();
// }

// function b() {
//   console.trace();
// }

// function c() {
//   a();
// }

// c(b);

// task6
// Реалізувати функцію авторизації по правилах. Функція повинна приймати ПІБ юзера, його вік та статус (адмін, модератор, юзер),
// якщо вік менше 18 і більше  70-ти то генерити виняткову ситуацію (типу RangeError), якщо помилка в статусі,
// тобто помилка в самому слові або помилка полягає в тому що такого слова не існує то генеруємо виняткову ситуацію типу EvalError,
// якщо жодні дані не введено або тільки ПІБ не введено то генеруємо виняткову ситуацію типу Error///

// function authorize(name, age, status) {
//   try {
//     if (!name || !status || !age) {
//       throw new Error('Name, Age or Status must be');
//     }
//     if (age < 18 || age > 70) {
//       throw new RangeError('Вік має бути більше 18 і менше  70-ти');
//     }
//     switch (status.toLowerCase()) {
//       case 'admin':
//         break;
//       case 'moderator':
//         break;
//       case 'user':
//         break;
//       default:
//         throw new EvalError('Status is not found');
//     }
//     console.log('Вітаємо');
//   } catch (err) {
//     console.error('err', err);
//   }
// }
// authorize('Artur', '30', 'moderator');
// authorize('30', 'user1'); //err Error: Name, Age or Status must be
