const canvas = document.getElementById('cnv1');
const ctx = canvas.getContext('2d');
const colorInput = document.querySelector('#color');
const eras = document.querySelector('#eraser');

let Color = '';
const Pi = Math.PI;
ctx.lineCap = 'round';
ctx.lineWidth = 5;

colorInput.addEventListener('input', function () {
  Color = this.value;
});

eras.addEventListener('click', eraser);

document.getElementById('clearCanvas').onclick = function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

document.getElementById('pen').onclick = function Draw() {
  let isDrawing = false;

  canvas.onmousedown = function (event) {
    const { offsetX: x, offsetY: y } = event;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
    isDrawing = true;
  };

  canvas.onmousemove = function DrawPen(e) {
    const { offsetX: x, offsetY: y, movementX: dx, movementY: dy, buttons } = e;
    ctx.strokeStyle = Color;
    if (isDrawing) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - dx, y - dy);
      ctx.stroke();
      ctx.closePath();
    }
  };

  canvas.onmouseup = function (event) {
    isDrawing = false;
  };
};

document.getElementById('circle').onclick = function circle() {
  canvas.onmousemove = function (event) {
    const { offsetX: x, offsetY: y } = event;
    const circleCanvas = document.createElement('canvas');
    const circleCtx = circleCanvas.getContext('2d');
    circleCanvas.width = canvas.width;
    circleCanvas.height = canvas.height;

    circleCtx.drawImage(canvas, 0, 0); // копіювати вже намальоване на новий холст

    circleCtx.beginPath();
    const radius = Math.pow(Math.pow(x - 100, 2) + Math.pow(y - 100, 2), 0.5);
    circleCtx.arc(200, 100, radius, 0, Pi, false);
    circleCtx.strokeStyle = Color;
    circleCtx.fillStyle = Color;
    circleCtx.stroke();
    circleCtx.fill();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(circleCanvas, 0, 0); // намалювати нове поверх старого
  };

  canvas.onmouseup = function () {
    canvas.onmousemove = null;
  };
};

document.getElementById('text').onclick = function text() {
  ctx.fillStyle = Color;
  ctx.font = '35px Arial';
  ctx.fillText('Hello World !!!', 100, 100);
};

function eraser() {
  canvas.onmousedown = function (event) {
    canvas.onmousemove = function (event) {
      const { offsetX: x, offsetY: y } = event;
      const size = 20; // розмір квадрата
      ctx.strokeStyle = '#FFFFFF'; // колір лінії
      ctx.fillStyle = '#FFFFFF'; // колір фона
      ctx.fillRect(x - size / 2, y - size / 2, size, size); // малюємо білий квадрат
      ctx.strokeRect(x - size / 2, y - size / 2, size, size); // обводимо його білим кольорои
    };
    canvas.onmouseup = function () {
      canvas.onmousemove = null;
    };
  };
}
