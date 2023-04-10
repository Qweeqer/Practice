const canvas = document.getElementById('sun');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const sunRadius = 100;
const rayCount = 12;

let gradientOffset = 0;
const gradientSpeed = 0.02;

function drawSun() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Сонце
  const sunGradient = ctx.createRadialGradient(
    centerX,
    centerY,
    sunRadius * 0.6,
    centerX,
    centerY,
    sunRadius * 1.2
  );

  sunGradient.addColorStop(0, 'rgba(255, 255, 0, 1)');
  sunGradient.addColorStop(0.8, `rgba(255, 255, 0, 0.8)`);
  sunGradient.addColorStop(1, 'rgba(255, 255, 0, 0)');

  ctx.beginPath();
  ctx.arc(centerX, centerY, sunRadius, 0, Math.PI * 2);
  ctx.fillStyle = sunGradient;
  ctx.fill();

  // Промені
  const rayLength = sunRadius * 1.5;
  for (let i = 0; i < rayCount; i++) {
    const rayAngle = Math.PI * 2 * (i / rayCount) + gradientOffset;
    const x1 = centerX + Math.cos(rayAngle) * sunRadius;
    const y1 = centerY + Math.sin(rayAngle) * sunRadius;
    const x2 = centerX + Math.cos(rayAngle) * (sunRadius + rayLength);
    const y2 = centerY + Math.sin(rayAngle) * (sunRadius + rayLength);

    const rayGradient = ctx.createLinearGradient(x1, y1, x2, y2);
    rayGradient.addColorStop(0, 'rgba(255, 255, 0, 0)');
    rayGradient.addColorStop(0.5, 'rgba(255, 255, 0, 0.5)');
    rayGradient.addColorStop(1, 'rgba(255, 255, 0, 0)');

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 10;
    ctx.strokeStyle = rayGradient;
    ctx.stroke();
  }
}

function update() {
  drawSun();
  gradientOffset += gradientSpeed;
  requestAnimationFrame(update);
}

update();
