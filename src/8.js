// const canvas = document.getElementById('cnv1');
// var ctx = canvas.getContext('2d');
// let colorInput = document.querySelector('#color');
// let eras = document.querySelector('#eraser');

// var Color = '';
// var Pi = Math.PI;
// ctx.lineCap = 'round';
// ctx.lineWidth = 5;

// colorInput.addEventListener('input', function () {
//   Color = this.value;
// });

// eras.addEventListener('click', eraser);

// document.getElementById('clearCanvas').onclick = function clearCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// };

// document.getElementById('pen').onclick = function Draw() {
//   canvas.onmousedown = function () {
//     // зробити рефакторинг
//     canvas.onmousedown = null;
//   };
//   canvas.onmousemove = function DrawPen(e) {
//     var x = e.offsetX;
//     var y = e.offsetY;
//     var dx = e.movementX;
//     var dy = e.movementY;
//     ctx.strokeStyle = Color;
//     if (e.buttons > 0) {
//       ctx.beginPath();
//       ctx.moveTo(x, y);
//       ctx.lineTo(x - dx, y - dy);
//       ctx.stroke();
//       ctx.closePath();
//     }
//   };
// };

// canvas.onmousemove = function DrawPen(e) {
//   var x = e.offsetX;
//   var y = e.offsetY;
//   var dx = e.movementX;
//   var dy = e.movementY;
//   ctx.strokeStyle = Color;
//   if (e.buttons > 0) {
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x - dx, y - dy);
//     ctx.stroke();
//     ctx.closePath();
//   }
// };

// document.getElementById('circle').onclick = function circle() {
//   canvas.onmousemove = function (event) {
//     var x = event.offsetX;
//     var y = event.offsetY;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.beginPath();
//     var radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);
//     ctx.arc(200, 100, radius, 0, Pi, false);
//     ctx.stroke();
//     ctx.fill();
//   };
//   canvas.onmouseup = function () {
//     canvas.onmousemove = null;
//   };
// };

// document.getElementById('text').onclick = function text() {
//   ctx.strokeStyle = '#589';
//   ctx.font = '35px Arial';
//   ctx.fillText('Hellow World !!!', 100, 100);
// };

// function eraser() {
//   canvas.onmousedown = function (event) {
//     canvas.onmousemove = function (event) {
//       var x = event.offsetX;
//       var y = event.offsetY;
//       ctx.clearRect(x - 5, y - 5, 100, 10);
//     };
//     canvas.onmouseup = function () {
//       canvas.onmousemove = null;
//     };
//   };
// }
// REFACTORING
const canvas = document.getElementById('cnv1');
const ctx = canvas.getContext('2d');

let colorInput = document.querySelector('#color');
let eraser = document.querySelector('#eraser');

let Color = '';
let Pi = Math.PI;

ctx.lineCap = 'round';
ctx.lineWidth = 5;

colorInput.addEventListener('input', function () {
  Color = this.value;
});

eraser.addEventListener('click', function () {
  canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event) {
      let x = event.offsetX;
      let y = event.offsetY;
      ctx.clearRect(x - 5, y - 5, 100, 10);
    };
    canvas.onmouseup = function () {
      canvas.onmousemove = null;
    };
  };
});

document.getElementById('clearCanvas').onclick = function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

document.getElementById('pen').onclick = function Draw() {
  canvas.onmousedown = function () {
    canvas.onmousedown = null;
  };
  canvas.onmousemove = function DrawPen(e) {
    let x = e.offsetX;
    let y = e.offsetY;
    let dx = e.movementX;
    let dy = e.movementY;
    ctx.strokeStyle = Color;
    if (e.buttons > 0) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - dx, y - dy);
      ctx.stroke();
      ctx.closePath();
    }
  };
};

canvas.onmousemove = function DrawPen(e) {
  let x = e.offsetX;
  let y = e.offsetY;
  let dx = e.movementX;
  let dy = e.movementY;
  ctx.strokeStyle = Color;
  if (e.buttons > 0) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - dx, y - dy);
    ctx.stroke();
    ctx.closePath();
  }
};

document.getElementById('circle').onclick = function circle() {
  canvas.onmousemove = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    let radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);
    ctx.arc(200, 100, radius, 0, Pi, false);
    ctx.stroke();
    ctx.fill();
  };
  canvas.onmouseup = function () {
    canvas.onmousemove = null;
  };
};

document.getElementById('text').onclick = function text() {
  ctx.strokeStyle = '#589';
  ctx.font = '35px Arial';
  ctx.fillText('Hello World !!!', 100, 100);
};
