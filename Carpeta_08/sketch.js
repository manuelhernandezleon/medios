//para bacteria
var posX1 = [];
var posY1 = [];

//para anemona
var posX2 = [];
var posY2 = [];

//para virus
var posX3 = [];
var posY3 = [];

var cant = 20;
var cant3 = 60;

function setup() {
  createCanvas(800, 800);

  for (var i = 0; i < cant; i = i + 1) {
    posX1[i] = random(width);
    posY1[i] = random(height);
  }

  for (var f = 0; f < cant; f = f + 1) {
    posX2[f] = random(width);
    posY2[f] = random(height);
  }

  for (var v = 0; v < cant3; v = v + 1) {
    posX3[v] = random(width);
    posY3[v] = random(height);
  }
}

function draw() {

  // bacteria con cola

  background(0);
  noFill();
  stroke(162, 247, 181);
  strokeWeight(7);

  for (var i = 0; i < cant; i = i + 1) {
    ellipse(posX1[i] - 10, posY1[i], 30, 5);
    bezier(posX1[i] + random(30), posY1[i] + random(20), posX1[i] + random(10), posY1[i] + random(20), posX1[i] + random(30), posY1[i] + random(30), posX1[i] + random(5), posY1[i] + random(5));

    posX1[i] = posX1[i] + random(-1, 0);
    posY1[i] = posY1[i] + random(-1, 1);

    if (posX1[i] < -width) {
      posX1[i] = posX1[i] * -1;
    }
  }

  //tipo anémona gigante

  for (var f = 0; f < cant; f = f + 1) {
    noStroke();
    stroke(47, 156, 149);
    strokeWeight(5);
    line(posX2[f], posY2[f], posX2[f] + random(20), posY2[f] + random(30));

    vertex(posX2[f], posY2[f]);
    bezierVertex(posX2[f], 230, 500, 400, 400, 390);
    endShape(CLOSE);


    posX2[f] = posX2[f] + random(0, 1);
    posY2[f] = posY2[f] + random(-1, 1);

    if (posX2[f] > width) {
      posX2[f] = posX2[f] * -1;
    }
  }
//Virus rojo
  for (var v = 0; v < cant3; v = v + 1) {
    noStroke();
    fill(238, 77, 78);
    beginShape();
    vertex(posX3[v], posY3[v]);
    vertex(posX3[v] + 10, posY3[v]);
    vertex(posX3[v] + 15, posY3[v] + 5);
    vertex(posX3[v] + 10, posY3[v] + 15);
    vertex(posX3[v], posY3[v] + 15);
    vertex(posX3[v] - 5, posY3[v] + 5);
    endShape(CLOSE);
    
    stroke(238, 77, 78);
    noFill();
    line(posX3[v]+5, posY3[v]+15, posX3[v]+5, posY3[v]+25);

  strokeWeight(2);
    beginShape();
     vertex(posX3[v]-10, posY3[v]+30);
    vertex(posX3[v]-5, posY3[v]+20);
    vertex(posX3[v]+5, posY3[v]+25);
    vertex(posX3[v]+15, posY3[v]+20);
      vertex(posX3[v]+20, posY3[v]+30);
    endShape();

    posX3[v] = posX3[v] + random(-1, 1);
    posY3[v] = posY3[v] + random(0, 1);

if (posY3[v] > height) {
      posY3[v] = posY3[v] * -1;
    }
  }
}
