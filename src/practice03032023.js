// Є кілька способів, які дозволяють доступитися до елемента div і змінити його вміст. Ось декілька з них:

// За допомогою JavaScript:
// a) Використовуючи метод getElementById:

// php
// Copy code
// <script>
//     // Отримуємо посилання на елемент div за його ідентифікатором
//     var divElement = document.getElementById("test");

//     // Змінюємо вміст елемента
//     divElement.innerHTML = "Last";
// </script>
// b) Використовуючи метод querySelector:

// php
// Copy code
// <script>
//     // Отримуємо посилання на елемент div за допомогою CSS-селектора
//     var divElement = document.querySelector("#test");

//     // Змінюємо вміст елемента
//     divElement.innerHTML = "Last";
// </script>
// За допомогою jQuery:
// a) Використовуючи метод $ і селектор #test:

// php
// Copy code
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
// <script>
//     // Отримуємо посилання на елемент div за допомогою jQuery
//     var divElement = $("#test");

//     // Змінюємо вміст елемента
//     divElement.html("Last");
// </script>
// b) Використовуючи метод find і селектор #test:

// php
// Copy code
// <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
// <script>
//     // Отримуємо посилання на елемент div за допомогою jQuery
//     var divElement = $("body").find("#test");

//     // Змінюємо вміст елемента
//     divElement.html("Last");
// </script>

// 2. На сторінці є елемент зображення:
//      <body>
//                    <img class=""image"" src=""dog.jpg"">
//      </body>
// Потрібно змінити зображення dog.jpg на cat.jpg.
// Виведіть в модальному вікні вміст тегу img з новим зображенням.
// <title>Зміна зображення</title>
//     <script>
//       function changeImage() {
//         // Отримуємо посилання на елемент зображення
//         var imgElement = document.getElementsByClassName("image");

//         // Змінюємо значення атрибута src
//         imgElement[0].src = "cat.jpg";

//         // Виводимо вміст тегу img у модальному вікні
//         alert(imgElement[0].outerHTML);
//       }
//     </script>
//   </head>
//   <body>
//     <img class="image" src="dog.jpg">
//     <button onclick="changeImage()">Змінити зображення</button>
// 3. <body>
//         <h2>Article header</h2>
//       <div id=""text"">
//         <p>First paragraph</p>
//         <p>Second paragraph</p>
//         <p>Third paragraph</p>
//       </div>
//         <p>Another text</p>
//     </body>
// На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод document.querySelectorAll). І вивести їх вміст із вказанням номеру абзацу в такому форматі:
// Selector text 0: First paragraph
// Selector text 1: Second paragraph
// Selector text 2: Third paragraph
//  <script>
//       function getTextFromDiv() {
//         // Отримуємо всі елементи p всередині div
//         let pElements = document.querySelectorAll("#text p");
//  if (pElements.length)
//         // Проходимося по кожному елементу p та виводимо його вміст
//         for (let i = 0; i < pElements.length; i++) {
//           console.log("Selector text " + i + ": " + pElements[i].textContent);
//         }
//       }
//     </script>
//   </head>
//   <body>
//     <h2>Article header</h2>
//     <div id="text">
//       <p>First paragraph</p>
//       <p>Second paragraph</p>
//       <p>Third paragraph</p>
//     </div>
//     <p>Another text</p>
//     <button onclick="getTextFromDiv()">Отримати текст</button>
//   </body>
// 4. На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Зробіть завдання 2 різними способами.
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3
{
  /* <title>Ненумерований список</title>
    <script>
      function getListContent() {
        let listElement = document.querySelector("#list");
        let firstElement = listElement.querySelector("li:first-child");
        let lastElement = listElement.querySelector("li:last-child");
        let secondElement = listElement.querySelectorAll("li")[1];
        let fourthElement = listElement.querySelectorAll("li")[3];
        let thirdElement = listElement.querySelectorAll("li")[2];
        let result = firstElement.textContent + ", " + lastElement.textContent + ", " + secondElement.textContent + ", " + fourthElement.textContent + ", " + thirdElement.textContent;
        console.log(result);
      }
    </script>
  </head>
  <body>
    <ul id="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <button onclick="getListContent()">Вивести вміст</button> */
}
// let getLi = document.querySelectorAll('#list li');
// console.log('getLi', getLi);
// let flag = true;
// for (let i = 0; i < getLi.length, i += 1) {
//     if (flag) {
//         console.log(i);
//     }
// }
function getListContent() {
        let listElement = document.getElementById("list");
        let result = "";

        // Проходимося по кожному елементу списку та додаємо його вміст до змінної result
        listElement.querySelectorAll("li").forEach(function (element, index, array) {
          if (index === 0) {
            result += element.textContent + ", ";
          } else if (index === array.length - 1) {
            result += element.textContent;
          } else {
            result += element.textContent + ", ";
          }
        });

        console.log(result);
      }
// < --------------------------------->
//  function getListContent() {
//         let listElement = document.getElementById("list");
//         let result = "";

//         // Проходимося по кожному елементу списку та додаємо його вміст до змінної result
//         for (let i = 0; i < listElement.children.length; i++) {
//           if (i === 0) {
//             result += listElement.children[i].textContent + ", ";
//           } else if (i === listElement.children.length - 1) {
//             result += listElement.children[i].textContent;
//           } else {
//             result += listElement.children[i].textContent + ", ";
//           }
//         }

//         console.log(result);
//       }