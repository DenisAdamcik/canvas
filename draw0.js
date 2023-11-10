let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, canvas.width, canvas.height);

document.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }

  switch (event.code) {
    case "KeyS":
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      let size = Math.random() * 100 + 50;
      let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      drawRectangle(x, y, size, size, col);
      break;
    case "KeyE":
      drawRandomHexagon();
      break;
    case "KeyR":
      drawRandomStar();
      break;
    case "KeyT":
      drawRandomTrefoil();
      break;
  
  }
});


function drawRandomHexagon() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let size = Math.random() * 50 + 20;
  let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawHexagon(x, y, size, col);
}
function drawHexagon(x, y, size, col) {
  ctx.fillStyle = col;
  ctx.beginPath();
  ctx.moveTo(x + size * Math.cos(0), y + size * Math.sin(0));
  for (let i = 1; i <= 6; i++) {
      ctx.lineTo(x + size * Math.cos(i * 2 * Math.PI / 6), y + size * Math.sin(i * 2 * Math.PI / 6));
  }
  ctx.closePath();
  ctx.fill();
}

function drawTrefoil(x, y, size, col) {
  ctx.fillStyle = col;
  ctx.beginPath();


  ctx.arc(x + size * Math.cos(0), y + size * Math.sin(0), size, 0, 2 * Math.PI);

  ctx.arc(x + size * Math.cos(2 * Math.PI / 3), y + size * Math.sin(2 * Math.PI / 3), size, 0, 2 * Math.PI);

  ctx.arc(x + size * Math.cos(4 * Math.PI / 3), y + size * Math.sin(4 * Math.PI / 3), size, 0, 2 * Math.PI);

  ctx.closePath();
  ctx.fill();
}

function drawRandomTrefoil() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let size = Math.random() * 50 + 20;
  let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawTrefoil(x, y, size, col);
}
function drawRandomStar() {
  let x = Math.random() * canvas.width;
  let y = Math.random() * canvas.height;
  let size = Math.random() * 50 + 20;
  let col = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  drawStar(x, y, size, col);
}

function drawStar(x, y, size, col) {
  ctx.fillStyle = col;
  ctx.beginPath();

  for (let i = 0; i < 5; i++) {
    ctx.lineTo(x + size * Math.cos((i * 2 * Math.PI) / 5), y + size * Math.sin((i * 2 * Math.PI) / 5));
    ctx.lineTo(x + (size / 2) * Math.cos(((i + 0.5) * 2 * Math.PI) / 5), y + (size / 2) * Math.sin(((i + 0.5) * 2 * Math.PI) / 5));
  }

  ctx.closePath();
  ctx.fill();
}
