let desenhando = false;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  if (desenhando) {
    // Defina a cor de preenchimento como preto
    fill(0);
    // Desenhe um círculo onde o mouse está
    ellipse(mouseX, mouseY, 10, 10);
  }
}

function mousePressed() {
  // Comece a desenhar quando o mouse é pressionado
  desenhando = true;
}

function mouseReleased() {
  // Pare de desenhar quando o mouse é liberado
  desenhando = false;
}
