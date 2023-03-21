// Приклади деструктуризації об’єктів приклади та специфіка
// Деструктуризація об'єктів - це зручний спосіб витягнути з об'єкта значення в окремі змінні. Деструктуризація використовується у JavaScript з метою скорочення коду та полегшення читання. Розглянемо приклади деструктуризації об'єктів.
// Приклад 1. Значення об'єкту записуються в змінні
// const person = { name: 'John', age: 30, gender: 'male' };

// const { name, age, gender } = person;

// console.log(name); // John
// console.log(age); // 30
// console.log(gender); // male
// // Приклад 2. Значення об'єкту можна замінити на іншу змінну
// const person2 = { name: 'John', age: 30, gender: 'male' };

// const { name: firstName, age: personAge, gender: personGender } = person2;

// console.log(firstName); // John
// console.log(personAge); // 30
// console.log(personGender); // male
// // У цьому прикладі ми використали альтернативні імена для змінних, які ми отримали з об'єкту.
// // Приклад 3. Значення за замовчуванням
// const person3 = { name3: 'John', age3: 30 };

// const { name3, age3, gender3 = 'male' } = person3;

// console.log(name3); // John
// console.log(age3); // 30
// console.log(gender3); // male
// // У цьому прикладі ми використали значення за замовчуванням для змінної gender.
// // Приклад 4. Використання деструктуризації в функціях
// const person4 = { name4: 'John', age4: 30 };

// function printPersonInfo({ name4, age4 }) {
//   console.log(`Name: ${name4}, Age: ${age4}`);
// }

// printPersonInfo(person4); // Name: John, Age: 30
// У цьому прикладі ми використали деструктуризацію в аргументах функції.
// Щоб використовувати деструктуризацію, потрібно використовувати фігурні дужки {} та назви змінних, в які потрібно записати значення об'єкту. За допомогою деструктуризації можна легко
// та швидко отримати доступ до значень об'єкту без потреби писати довгий код
// Приклад 5.
const cities = {
  kyiv: {
    population: 3000000,
    country: 'Ukraine',
    language: 'Ukrainian',
    area: 839,
    mayor: 'Vitali Klitschko',
  },
  london: {
    population: 8900000,
    country: 'United Kingdom',
    language: 'English',
    area: 1572,
    mayor: 'Sadiq Khan',
  },
  newyork: {
    population: 8400000,
    country: 'United States',
    language: 'English',
    area: 468.9,
    mayor: 'Bill de Blasio',
  },
};
// 1.Ми можемо витягнути окремі властивості кожного міста за допомогою деструктуризації об'єктів.
// Наприклад, виведемо на екран назву та населення міста Київ:
// const { kyiv: { population, mayor } } = cities;
// console.log(`Київ має населення ${population} та мера ${mayor}`);
// Output: "Київ має населення 3000000 та мера Vitali Klitschko"
// 2.Також ми можемо використовувати дефолтні значення, якщо властивості не існує в об'єкті:
// const { newyork: { population, timezone = "GMT-4" } } = cities;
// console.log(`Нью-Йорк має населення ${population} та часовий пояс ${timezone}`);
// Output: "Нью-Йорк має населення 8400000 та часовий пояс GMT-4"
// 3.Також можна використовувати деструктуризацію для передачі об'єктів як параметрів функції:
// function printCityInfo({ name, population }) {
//   console.log(`${name} має населення ${population}`);
// }

// printCityInfo(cities.kyiv);
const cityNames = Object.keys(cities);
console.log(cityNames); // Output: ["kyiv", "london", "newyork"]
const { population, country, language, area, mayor } = cities.kyiv;
console.log(population); // 3000000
console.log(country); // Ukraine
console.log(language); // Ukrainian
console.log(area); // 839
console.log(mayor); // Vitali Klitschko
function printCityInfo(
  cityName,
  { population, country, language, area, mayor }
) {
  console.log(
    `Місто: ${cityName.toUpperCase()}, Населення: ${population}, Країна: ${country}, Мова: ${language}, Площа: ${area}, Мер: ${mayor}`
  );
//   console.log(`Населення: ${population}`);
//   console.log(`Країна: ${country}`);
//   console.log(`Мова: ${language}`);
//   console.log(`Площа: ${area}`);
//   console.log(`Мер: ${mayor}`);
//   console.log('----------------------');
}

for (let cityName in cities) {
  printCityInfo(cityName, cities[cityName]);
}
// WeakMap - це колекція для зберігання ключів та даних, де ключі можуть бути тільки об'єкти, а значення можуть бути будь-якими даними. 
// Основна особливість WeakMap полягає в тому, що вона не утримує посилання на ключі, 
// які не використовуються в програмі.Це дозволяє автоматично видаляти непотрібні ключі з пам'яті.
const wm = new WeakMap();

class MyClass {
  constructor(name) {
    wm.set(this, { name });
  }

  getName() {
    return wm.get(this).name;
  }

  setName(name) {
    wm.set(this, { name });
  }
}

let obj1 = new MyClass('Object 1');
let obj2 = new MyClass('Object 2');

console.log(obj1.getName()); // Output: "Object 1"
console.log(obj2.getName()); // Output: "Object 2"

obj1 = null; // Очищаємо змінну obj1, тому об'єкт MyClass, створений за допомогою obj1, стає недоступним

setTimeout(() => console.log(obj2.getName()), 1000); // Output: "Object 2"
// В цьому прикладі ми створюємо новий WeakMap з іменем wm, та створюємо клас MyClass. 
// У конструкторі класу ми використовуємо wm.set для зберігання імені об'єкта в WeakMap. У методі getName() 
// ми використовуємо wm.get для отримання імені з WeakMap.У методі setName() ми також використовуємо wm.set, щоб оновити ім'я в WeakMap.

// У нашому коді ми створюємо два об'єкти класу MyClass - obj1 та obj2. 
// Ми можемо отримати імена об'єктів за допомогою методу getName().
// Коли ми встановлюємо obj1 в null, об'єкт MyClass, створений за допомогою obj1, стає недоступним, тому його можна автоматично видалити з пам'яті.
//     Після 1 секунди ми можемо викликати метод getName() на obj2, і він поверне правильне ім'я, оскільки obj2 ще існує в п