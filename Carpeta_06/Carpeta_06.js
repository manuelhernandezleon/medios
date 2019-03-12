var c1 = 0;
var c2 = 0;
var c3 = 0;
var segundo;
var minuto;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  angleMode(DEGREES);
}

function draw() {
  segundo = second();
  minuto = minute();
  segundomap = map(segundo, 0, 59, 0, width);
  minutomap = map(minuto, 0, 59, 0, width);
  c3 = minutomap
  c2 = segundomap

  // línea de los minutos
  push();
  noFill();
  stroke(c1, 0, c3);
  bezier(0, 0, minutomap, minutomap, -minutomap, minutomap, width, height);
    if (c3 > width) {
    c3 = 0
  }
  pop();

  //espiral de los segundos
  push();
  translate(width/ 2, height / 2);
  rotate(segundomap);
  stroke(c1, c2, 0);
  point(random(segundomap), random(segundomap));
  if (c2 > width) {
    c2 = 0
  }
  pop();
}
