const canvas = document.getElementById('rain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drops = [];

function createDrops() {
  for (let i = 0; i < 200; i++) {
    drops.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 12 + 5,
      speedY: Math.random() * 25 + 5,
      lineWidth: Math.random() * 2 + 1,
    });
  }
}

function drawDrops() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
  for (let i = 0; i < drops.length; i++) {
    const drop = drops[i];
    ctx.beginPath();
    ctx.moveTo(drop.x, drop.y);
    ctx.lineTo(drop.x, drop.y + drop.length);
    ctx.lineWidth = drop.lineWidth;
    ctx.stroke();
  }
}

function moveDrops() {
  for (let i = 0; i < drops.length; i++) {
    const drop = drops[i];
    drop.y += drop.speedY;

    if (drop.y > canvas.height) {
      drop.y = -drop.length;
      drop.x = Math.random() * canvas.width;
    }
  }
}

function update() {
  drawDrops();
  moveDrops();
  requestAnimationFrame(update);
}

createDrops();
update();
