// "1) https://codepen.io/misha_klymenko/pen/abzLvqo
// - перебрати кожен елемент, і вибрати його data-anim значення
// - вибране значення додати як клас за допомогою classList до цього елемента.
// - перевірити чи застосувались анімації"
// - вибрати всі теги із класом cirkle
// -------------------------------------------------------------------------------------
//1 - вибрати всі теги із класом cirkle
const circles = document.querySelectorAll('.cirkle');

circles.forEach(circle => {
  //2 - перебрати кожен елемент, і вибрати його data-anim значення
  // const animationClass = circle.getAttribute('data-anim');
  // або
  const animationClass = circle.dataset.anim;
  //3 - вибране значення додати як клас за допомогою classList до цього елемента.
  circle.classList.add(animationClass);
  //4 - Перевірка, чи застосувались анімації
  console.log(circle.classList.contains(animationClass));
});
// або
//4 - Перевірка, чи застосувались анімації
// circles.forEach(circle => {
//   console.log(circle.classList.contains(circle.getAttribute('data-anim')));
// });

// /HTML
//   < ol >
//   <li>0</li>
//   <li>1</li>
//   <li>1</li>
// </ol>/

// let temp = ol.innerHTML;
// ol.innerHTML = 'prepend' + temp;
// ol.innerHTML += 'append';
// ------------------------------------------------------
{
  /* <input type="text" id="input1" value="Value 1">
<input type="text" id="input2" value="Value 2">
<button id="swapBtn">Swap values</button> */
}
// const input1 = document.getElementById("input1");
// const input2 = document.getElementById("input2");
// const swapBtn = document.getElementById("swapBtn");

// swapBtn.addEventListener("click", () => {
//   const temp = input1.value;
//   input1.value = input2.value;
//   input2.value = temp;
// });
// У цьому прикладі, на кнопку з ідентифікатором "swapBtn" прикріплюється подія "click",
//   яка виконує функцію обміну значень двох інпутів місцями.Спочатку зберігається
//   значення першого інпуту в змінну temp.Потім значення першого інпуту замінюється на значення другого інпуту,
//   а значення другого інпуту - на значення temp.Таким чином, значення двох інпутів міняються місцями.
