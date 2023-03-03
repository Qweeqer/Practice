// let container = document.querySelector('.container');
// let loader = document.querySelector('.block');
// let percent = document.querySelector(".percent");
// let startBtn = document.querySelector('.start');
// let stopBtn = document.querySelector('.stop');
// let intervalId;
// let containerWidth = container.getBoundingClientRect().width;
// startBtn.addEventListener('click', function () {
//   if (intervalId === undefined) {
//     intervalId = setInterval(function () {
//       let currentWidth = parseInt(loader.style.width || 0) + 10;
//       if (currentWidth > 400) {
//         currentWidth = 400;
//       }
//       loader.style.width = currentWidth + 'px';
//       let currentPercent = Math.round((currentWidth / 400) * 100);
//             percent.innerHTML = currentPercent + "%";
//       if (currentWidth >= 400) {
//         clearInterval(intervalId);
//         intervalId = undefined;
//       }
//     }, 100);
//   }
// });

// stopBtn.addEventListener('click', function () {
//   clearInterval(intervalId);
//   intervalId = undefined;
//   if (parseInt(loader.style.width) === 400) {
//     loader.style.width = 0;
//     percent.innerHTML = "0%";
//   }
// });
// document.querySelector('.block').style.width += 0 + 'px';
// // реалізувати функціонал завантаження лоадера
let container = document.querySelector('.container');
let loader = document.querySelector('.block');
let loaderWidth = (loader.style.width = '0px');
let percent = document.querySelector('.percent');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let intervalId;
let containerWidth = container.offsetWidth;

startBtn.addEventListener('click', () => {
  if (intervalId === undefined) {
    intervalId = setInterval(() => {
      let currentWidth = loader.offsetWidth + 10;
      if (currentWidth > containerWidth) {
        currentWidth = containerWidth;
      }
      loader.style.width = currentWidth + 'px';
      let currentPercent = Math.round((currentWidth / containerWidth) * 100);
      percent.innerHTML = currentPercent + '%';
      if (currentWidth >= containerWidth) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    }, 100);
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  intervalId = undefined;
  if (loader.offsetWidth === containerWidth) {
    loader.style.width = 0;
    percent.innerHTML = '0%';
  }
});
