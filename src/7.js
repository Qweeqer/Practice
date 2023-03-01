const windowElem = document.querySelector('.window');
const closeButton = document.querySelector('.window-close');
const jsCodeElem = document.querySelector('#js-code');
const dragBar = document.querySelector('.window-header');

// Отримати код на сторінці
const jsCode = document.documentElement.innerHTML;

// Екранувати спеціальні символи HTML
const escapeHtml = str => {
  const tagsToReplace = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
  };
  return str.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag);
};

// Відобразити код на сторінці в елементі code
jsCodeElem.innerHTML = escapeHtml(jsCode);

// Функція для перетягування вікна
const dragElement = elem => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const dragMouseDown = e => {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  const elementDrag = e => {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elem.style.top = elem.offsetTop - pos2 + 'px';
    elem.style.left = elem.offsetLeft - pos1 + 'px';
  };

  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  dragBar.onmousedown = dragMouseDown;
};

dragElement(windowElem);

closeButton.addEventListener('click', () => {
  windowElem.style.display = 'none';
});
// -------------------------------------------------------------------------------
// const runButton = document.querySelector('#run-button');
// const htmlUrlInput = document.querySelector('#html-url');
// const jsCodeElem = document.querySelector('#js-code');
// const dragBar = document.querySelector('.window-header');

// // Отримати код на сторінці
// const getJsCode = async url => {
//   const response = await fetch(`http://localhost:3000/?url=${url}`);
//   const html = await response.text();
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');
//   return doc.documentElement.innerHTML;
// };

// // Екранувати спеціальні символи HTML
// const escapeHtml = str => {
//   const tagsToReplace = {
//     '&': '&amp;',
//     '<': '&lt;',
//     '>': '&gt;',
//   };
//   return str.replace(/[&<>]/g, tag => tagsToReplace[tag] || tag);
// };

// // Функція для перетягування вікна
// const dragElement = elem => {
//   let pos1 = 0,
//     pos2 = 0,
//     pos3 = 0,
//     pos4 = 0;

//   const dragMouseDown = e => {
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
//   };

//   const elementDrag = e => {
//     e.preventDefault();
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     elem.style.top = elem.offsetTop - pos2 + 'px';
//     elem.style.left = elem.offsetLeft - pos1 + 'px';
//   };

//   const closeDragElement = () => {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   };

//   dragBar.onmousedown = dragMouseDown;
// };

// dragElement(document.querySelector('.window'));

// // Обробник події для кнопки
// runButton.addEventListener('click', async () => {
//   const htmlUrl = htmlUrlInput.value;
//   const jsCode = await getJsCode(htmlUrl);
//   jsCodeElem.innerHTML = escapeHtml(jsCode);
// });
