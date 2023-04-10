const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const snowflakes = [];

function createSnowflakes() {
  for (let i = 0; i < 100; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      opacity: Math.random(),
      speedX: Math.random(),
      speedY: Math.random() * 5 + 1,
      radius: Math.random() * 2 + 1,
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.beginPath();
  for (let i = 0; i < snowflakes.length; i++) {
    const snowflake = snowflakes[i];
    ctx.moveTo(snowflake.x, snowflake.y);
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  }
  ctx.fill();
}

function moveSnowflakes() {
  for (let i = 0; i < snowflakes.length; i++) {
    const snowflake = snowflakes[i];
    snowflake.x += snowflake.speedX;
    snowflake.y += snowflake.speedY;

    if (snowflake.y > canvas.height) {
      snowflake.y = 0;
    }

    if (snowflake.x > canvas.width) {
      snowflake.x = 0;
    }
  }
}

function update() {
  drawSnowflakes();
  moveSnowflakes();
  requestAnimationFrame(update);
}

createSnowflakes();
update();
