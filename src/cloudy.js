const canvas = document.getElementById('cloudy');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const sunRadius = 100;

let sunX = centerX;
let sunSpeed = 2;

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    ctx.bezierCurveTo(
      this.x - 40,
      this.y - 20,
      this.x - 40,
      this.y - 70,
      this.x + 60,
      this.y - 70
    );
    ctx.bezierCurveTo(
      this.x + 80,
      this.y - 100,
      this.x + 150,
      this.y - 100,
      this.x + 170,
      this.y - 70
    );
    ctx.bezierCurveTo(
      this.x + 250,
      this.y - 70,
      this.x + 250,
      this.y - 40,
      this.x + 220,
      this.y
    );
    ctx.bezierCurveTo(
      this.x + 260,
      this.y + 40,
      this.x + 200,
      this.y + 50,
      this.x + 170,
      this.y + 30
    );
    ctx.bezierCurveTo(
      this.x + 150,
      this.y + 80,
      this.x + 80,
      this.y + 80,
      this.x + 60,
      this.y + 30
    );
    ctx.bezierCurveTo(
      this.x + 30,
      this.y + 75,
      this.x - 20,
      this.y + 60,
      this.x,
      this.y
    );

    ctx.fillStyle = 'rgba(200, 200, 200, 0.9)';
    ctx.fill();
  }
}

const cloud = new Cloud(sunX - 110, centerY - 100);

function drawSun(x) {
  const sunGradient = ctx.createRadialGradient(
    x,
    centerY - 150,
    sunRadius * 0.6,
    x,
    centerY - 150,
    sunRadius * 1.2
  );

  sunGradient.addColorStop(0, 'rgba(255, 255, 0, 1)');
  sunGradient.addColorStop(0.8, `rgba(255, 255, 0, 0.8)`);
  sunGradient.addColorStop(1, 'rgba(255, 255, 0, 0)');

  ctx.beginPath();
  ctx.arc(x, centerY - 150, sunRadius, 0, Math.PI * 2);
  ctx.fillStyle = sunGradient;
  ctx.fill();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  sunX += sunSpeed;
  if (sunX + sunRadius > canvas.width || sunX - sunRadius < 0) {
    sunSpeed *= -1;
  }

  drawSun(sunX);
  cloud.x = sunX - 110;
  cloud.draw();

  requestAnimationFrame(update);
}



update();
