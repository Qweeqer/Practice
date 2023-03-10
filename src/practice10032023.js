// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.
// Отримуємо посилання на елементи сторінки
// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// const button3 = document.getElementById('button3');
// const link = document.getElementById('link');
// const body = document.body;

// // Додаємо обробники подій для кожного елемента
// button1.addEventListener('click', function() {
//     body.style.backgroundColor = 'blue';
// });
// // hover button
// // Додаємо обробник події для кнопки
// button1.addEventListener('mouseover', function() {
//     button1.style.backgroundColor = 'green';
// });

// // Додаємо обробник події для кнопки
// button1.addEventListener('mouseout', function() {
//     button1.style.backgroundColor = '';
// });
// /////////////
// button2.addEventListener('dblclick', function() {
// 	body.style.backgroundColor = 'pink';
// });

// button3.addEventListener('mousedown', function() {
// 	body.style.backgroundColor = 'brown';
// });

// button3.addEventListener('mouseup', function() {
// 	body.style.backgroundColor = 'white';
// });

// link.addEventListener('mouseover', function() {
//     body.style.backgroundColor = 'yellow';
//     button1.style.backgroundColor = 'green';
//     console.log('button1', button1)
// });

// link.addEventListener('mouseout', function() {
// 	body.style.backgroundColor = 'white';
// });
// ************ Akardeon *******************
// // Отримуємо посилання на елементи сторінки
//   const items = document.querySelectorAll('.acrd-item-name');
//   // Додаємо обробники подій для кожного елемента аккордеону
//   items.forEach((item) => {
//     item.addEventListener('click', () => {
//       // Перевіряємо, чи має елемент клас "active"
//       const isActive = item.classList.contains('active');
//       // Знімаємо клас "active" у всіх елементів акордеону
//       items.forEach((el) => {
//         el.classList.remove('active');
//       });
//       // Додаємо або знімаємо клас "active" в залежності від того, чи має елемент клас "active"
//       item.classList.toggle('active', !isActive);
//     });
//   });

// 1) Зробити поле для введення тексту. Після натиснення кнопки addPost введений текст вставляти в блок нижче поля для введення тексту.
// Зробити додатково вивід кнопки збільшити та зменшити розмір шрифту, змінити колір шрифту та
// селект де можна вибрати тип форматування тексту(Uppercase і тд).
const inputText = document.getElementById('input-text');
const addPostBtn = document.getElementById('add-post');
const postContainer = document.getElementById('post-container');
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
const fontSize = document.getElementById('font-size');
const textFormat = document.getElementById('text-format');
const textColor = document.getElementById('text-color');

let currentFontSize = 16;

// Додаємо обробник події для кнопки Add Post
addPostBtn.addEventListener('click', () => {
  // Отримуємо введений текст з поле введення
  const text = inputText.value;
  // Створюємо новий елемент div з текстом
  const post = document.createElement('div');
  post.innerText = text;
  post.style.fontSize = `${currentFontSize}px`;
  // Застосовуємо форматування тексту
  switch (textFormat.value) {
    case 'uppercase':
      post.style.textTransform = 'uppercase';
      break;
    case 'lowercase':
      post.style.textTransform = 'lowercase';
      break;
    case 'capitalize':
      post.style.textTransform = 'capitalize';
      break;
    default:
      post.style.textTransform = 'none';
      break;
  }
  // Застосовуємо колір тексту
  post.style.color = textColor.value;
  // Додаємо елемент в контейнер
  postContainer.appendChild(post);
  // Очищаємо поле введення
  inputText.value = '';
});
// Додаємо обробники подій для кнопок Increase Font та Decrease Font
increaseFontBtn.addEventListener('click', () => {
  currentFontSize += 1;
  fontSize.innerText = `${currentFontSize}px`;
});
decreaseFontBtn.addEventListener('click', () => {
  if (currentFontSize > 1) {
    currentFontSize -= 1;
    fontSize.innerText = `${currentFontSize}px`;
  }
});
