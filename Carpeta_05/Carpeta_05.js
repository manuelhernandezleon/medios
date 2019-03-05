//Para empezar a jugar se debe presionar barra espaciadora

//variable jugador 1
var x1 = 0
var y1 = 0
var tam1 = 5
var color1 = 255

//variables jugador 2
var x2 = 0
var y2 = 0
var tam2 = 5
var color2 = 0

//variables comida
var xc = 0
var yc = 0


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120);

  //Jugador 1
  fill(255, color1, color1);
  stroke(0);
  rect(0, height / 2 - 50, 20, 100);
  ellipse(x1, y1, tam1, tam1);
  line(20, height / 2 - 50, x1, y1);
  line(20, height / 2 + 50, x1, y1);

  //Jugador 2
  fill(color2, 255, color2);
  stroke(255);
  rect(width - 20, height / 2 - 50, 20, 100);
  ellipse(x2, y2, tam2, tam2);
  line(width - 20, height / 2 - 50, x2, y2);
  line(width - 20, height / 2 + 50, x2, y2);

  //Comida
  fill(255, 0, 50);
  stroke(255, 0, 50);
  line(width / 2, 0, xc, yc);
  line(width / 2, height, xc, yc);
  ellipse(xc, yc, 5, 5);


  //Comer
  if (dist(x1, y1, xc, yc) < 15) {
    xc = random(0, width);
    yc = random(0, height);
    tam1 = tam1 + 10
  } else if (dist(x2, y2, xc, yc) < 15) {
    xc = random(0, width);
    yc = random(0, height);
    tam2 = tam2 + 10

    //color para aletar fase final
  } else if (tam1 > 95) {
    color1 = random(30, 250);
  } else if (tam2 > 95) {
    color2 = random(30, 250);

  }

  //ganar comiendo al jugador contrario
  if (tam1 > 95 && dist(x1, y1, x2, y2) < 15) {
    background(255, color1, color1);
  } else if (tam2 > 25 && dist(x2, y2, x1, y1) < 15)
    background(color2, 255, color2);
}


function keyTyped() {
  if (key === 'd') {
    x1 = x1 + 10;
  }
  if (key === 'a') {
    x1 = x1 - 10;
  }
  if (key === 'w') {
    y1 = y1 - 10;
  }
  if (key === 's') {
    y1 = y1 + 10;
  }

  // Iniciar del lado contrario de la pantalla jugador 1
  if (x1 > width) {
    x1 = -tam1
  }

  if (x1 < -tam1) {
    x1 = width
  }
  if (y1 > height) {
    y1 = -tam1
  }
  if (y1 < -tam1) {
    y1 = height
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x2 = x2 + 10;
  }
  if (keyCode == LEFT_ARROW) {
    x2 = x2 - 10;
  }
  if (keyCode == UP_ARROW) {
    y2 = y2 - 10;
  }
  if (keyCode == DOWN_ARROW) {
    y2 = y2 + 10;
  }

  // iniciar - reiniciar partida
  if (key == ' ') {
    y1 = height / 2;
    x1 = 100;
    y2 = height / 2;
    x2 = width - 100;
    tam1 = 5
    tam2 = 5
  }

  // Ir al lado contrario de la pantalla jugador 2
  if (x2 > width) {
    x2 = -tam2
  }

  if (x2 < -tam2) {
    x2 = width
  }
  if (y2 > height) {
    y2 = -tam2
  }
  if (y2 < -tam2) {
    y2 = height
  }
}
