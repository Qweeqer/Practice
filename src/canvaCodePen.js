// const canvas = document.getElementById('cnv1');
// const ctx = canvas.getContext('2d');
// const colorInput = document.querySelector('#color');
// const eras = document.querySelector('#eraser');

// let Color = '';
// const Pi = Math.PI;
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
//   let isDrawing = false;

//   canvas.onmousedown = function (event) {
//     const { offsetX: x, offsetY: y } = event;
//     ctx.beginPath();
//     ctx.moveTo(x, y);
//     ctx.lineTo(x, y);
//     ctx.stroke();
//     isDrawing = true;
//   };

//   canvas.onmousemove = function DrawPen(e) {
//     const { offsetX: x, offsetY: y, movementX: dx, movementY: dy, buttons } = e;
//     ctx.strokeStyle = Color;
//     if (isDrawing) {
//       ctx.beginPath();
//       ctx.moveTo(x, y);
//       ctx.lineTo(x - dx, y - dy);
//       ctx.stroke();
//       ctx.closePath();
//     }
//   };

//   canvas.onmouseup = function (event) {
//     isDrawing = false;
//   };
// };

// document.getElementById('circle').onclick = function circle() {
//   const savedImage = ctx.getImageData(0, 0, canvas.width, canvas.height); // сохранить текущее изображение

//   canvas.onmousemove = function (event) {
//     const { offsetX: x, offsetY: y } = event;
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.putImageData(savedImage, 0, 0); // нарисовать сохраненное изображение
//     ctx.beginPath();
//     const radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);
//     ctx.arc(200, 100, radius, 0, Pi, false);
//     ctx.strokeStyle = Color;
//     ctx.fillStyle = Color;
//     ctx.stroke();
//     ctx.fill();
//   };

//   canvas.onmouseup = function () {
//     canvas.onmousemove = null;
//   };
// };

// document.getElementById('text').onclick = function text() {
//   ctx.fillStyle = Color;
//   ctx.font = '35px Arial';
//   ctx.fillText('Hello World !!!', 100, 100);
// };

// function eraser() {
//   canvas.onmousedown = function (event) {
//     canvas.onmousemove = function (event) {
//       const { offsetX: x, offsetY: y } = event;
//       const size = 20; // розмір квадрата
//       ctx.strokeStyle = '#FFFFFF'; // колір лінії
//       ctx.fillStyle = '#FFFFFF'; // колір фона
//       ctx.fillRect(x - size / 2, y - size / 2, size, size); // малюємо білий квадрат
//       ctx.strokeRect(x - size / 2, y - size / 2, size, size); // обводимо його білим кольорои
//     };
//     canvas.onmouseup = function () {
//       canvas.onmousemove = null;
//     };
//   };
// }
const canvas = document.getElementById('cnv1');
const ctx = canvas.getContext('2d', { willReadFrequently: true });

const colorInput = document.querySelector('#color');
const eras = document.querySelector('#eraser');

let Color = '';
const Pi = Math.PI;
ctx.lineCap = 'round';
ctx.lineWidth = 5;

colorInput.addEventListener('input', () => {
  Color = colorInput.value;
});

eras.addEventListener('click', eraser);

document.getElementById('clearCanvas').addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('pen').addEventListener('click', () => {
  let isDrawing = false;

  canvas.addEventListener('mousedown', event => {
    const { offsetX: x, offsetY: y } = event;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    isDrawing = true;
  });

  canvas.addEventListener('mousemove', e => {
    const { offsetX: x, offsetY: y, movementX: dx, movementY: dy, buttons } = e;
    ctx.strokeStyle = Color;
    if (isDrawing) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - dx, y - dy);
      ctx.stroke();
      ctx.closePath();
    }
  });

  canvas.addEventListener('mouseup', event => {
    isDrawing = false;
  });
});

document.getElementById('circle').addEventListener('click', () => {
  const savedImage = ctx.getImageData(0, 0, canvas.width, canvas.height); // сохранить текущее изображение

  canvas.addEventListener('mousemove', event => {
    const { offsetX: x, offsetY: y } = event;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(savedImage, 0, 0); // нарисовать сохраненное изображение
    ctx.beginPath();
    const radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);
    ctx.arc(200, 100, radius, 0, Pi, false);
    ctx.strokeStyle = Color;
    ctx.fillStyle = Color;
    ctx.stroke();
    ctx.fill();
  });

  canvas.addEventListener('mouseup', () => {
    canvas.removeEventListener('mousemove', mousemoveHandler);
  });

  function mousemoveHandler(event) {
    const { offsetX: x, offsetY: y } = event;
    const size = 20; // розмір квадрата
    ctx.strokeStyle = '#FFFFFF'; // колір лінії
    ctx.fillStyle = '#FFFFFF'; // колір фона
    ctx.fillRect(x - size / 2, y - size / 2, size, size); // малюємо білий квадрат
    ctx.strokeRect(x - size / 2, y - size / 2, size, size); // обводимо його білим кольорои
  }

  canvas.addEventListener('mousedown', event => {
    canvas.addEventListener('mousemove', mousemoveHandler);
    canvas.addEventListener('mouseup', () => {
      canvas.removeEventListener('mousemove', mousemoveHandler);
    });
  });
});

document.getElementById('text').addEventListener('click', () => {
  ctx.fillStyle = Color;
  ctx.font = '35px Arial';
  ctx.fillText('Hello World !!!', 100, 100);
});

function eraser() {
  canvas.addEventListener('mousedown', event => {
    canvas.addEventListener('mousemove', event => {
      const { offsetX: x, offsetY: y } = event;
      const size = 20; // розмір квадрата
      ctx.strokeStyle = '#FFFFFF'; // колір лінії
      ctx.fillStyle = '#FFFFFF'; // колір фона
      ctx.fillRect(x - size / 2, y - size / 2, size, size); // малюємо білий квадрат
      ctx.strokeRect(x - size / 2, y - size / 2, size, size); // обводимо його білим кольорои
    });
    canvas.addEventListener('mouseup', () => {
      canvas.removeEventListener('mousemove');
    });
  });
}
