var tablaMalaria;
var numFilas;

///////////// Carga la tabla /////////////
function preload() {
  tablaMalaria = loadTable('Malaria.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);

  numFilas = tablaMalaria.getRowCount();

  ///////// Crea los círculos
  for (var j = 0; j < numFilas; j = j + 1) {

    var muertes = tablaMalaria.getNum(j, 2);
    var ano = tablaMalaria.getNum(j, 1);
    var textoAno = tablaMalaria.getString(j, 1);

    var diametro = map(muertes, 0, 80, 0, height);

    stroke(255);
    strokeWeight(1)
    noFill();
    ellipse(width / 2, height / 2, diametro, diametro);

    textStyle(BOLD);
    textSize(20);
    textAlign(CENTER);

  }
  //////////// AQUI SELECCIONA CADA CIRCULO //////////////////
  var distancia1 = map(tablaMalaria.getNum(0, 2), 0, 80, 0, height);
  var distancia2 = map(tablaMalaria.getNum(1, 2), 0, 80, 0, height);
  var distancia3 = map(tablaMalaria.getNum(2, 2), 0, 80, 0, height);
  var distancia4 = map(tablaMalaria.getNum(3, 2), 0, 80, 0, height);
  var distancia5 = map(tablaMalaria.getNum(4, 2), 0, 80, 0, height);
  var distancia6 = map(tablaMalaria.getNum(5, 2), 0, 80, 0, height);
  var distancia7 = map(tablaMalaria.getNum(6, 2), 0, 80, 0, height);
  var distancia8 = map(tablaMalaria.getNum(7, 2), 0, 80, 0, height);
  var distancia9 = map(tablaMalaria.getNum(8, 2), 0, 80, 0, height);
  var distancia10 = map(tablaMalaria.getNum(9, 2), 0, 80, 0, height);
  var distancia11 = map(tablaMalaria.getNum(10, 2), 0, 80, 0, height);
  var distancia12 = map(tablaMalaria.getNum(11, 2), 0, 80, 0, height);
  var distancia13 = map(tablaMalaria.getNum(12, 2), 0, 80, 0, height);
  fill(250, 0, 0, 100);

  if (dist(mouseX, mouseY, width / 2, height / 2) < distancia4 / 2) {
    ellipse(width / 2, height / 2, distancia4, distancia4);
    text("2009", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia2 / 2) {
    ellipse(width / 2, height / 2, distancia2, distancia2);
    text("2011", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia6 / 2) {
    ellipse(width / 2, height / 2, distancia6, distancia6);
    text("2007", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia1 / 2) {
    ellipse(width / 2, height / 2, distancia1, distancia1);
    text("2012", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia5 / 2) {
    ellipse(width / 2, height / 2, distancia5, distancia5);
    text("2008", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia3 / 2) {
    ellipse(width / 2, height / 2, distancia3, distancia3);
    text("2010", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia10 / 2) {
    ellipse(width / 2, height / 2, distancia10, distancia10);
    text("2003", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia9 / 2) {
    ellipse(width / 2, height / 2, distancia9, distancia9);
    text("2004", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia8 / 2) {
    ellipse(width / 2, height / 2, distancia8, distancia8);
    text("2005", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia11 / 2) {
    ellipse(width / 2, height / 2, distancia11, distancia11);
    text("2002", width / 2, height / 2 - 10);
  } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia13 / 2) {
    ellipse(width / 2, height / 2, distancia13, distancia13);
    text("2000", width / 2, height / 2 - 10);
    } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia7 / 2) {
    ellipse(width / 2, height / 2, distancia7, distancia7);
    text("2006", width / 2, height / 2 - 10);
     } else if (dist(mouseX, mouseY, width / 2, height / 2) < distancia12 / 2) {
    ellipse(width / 2, height / 2, distancia12, distancia12);
    text("2001", width / 2, height / 2 - 10); 
  }

  /////////////////////////////////////////////////////////////////////




  ///// Línea de recta de muertes /////
  fill( 147, 229, 171);
  ellipse(width / 2, height / 2, 6, 6);
  strokeWeight(3);
  stroke( 147, 229, 171);
  line(width / 2, height / 2, width / 2 + 300, height / 2);

  //Barras de la recta
  for (var i = 1; i < 7; i = i + 1) {
    line(width / 2 + (i * 50), height / 2 + 5, width / 2 + (i * 50), height / 2 - 5);
  }

  ///// Numeros de la recta de muertes /////
  strokeWeight(1);

  text("10", width / 2 + 50, height / 2 - 10);
  text("20", width / 2 + 100, height / 2 - 10);
  text("30", width / 2 + 150, height / 2 - 10);
  text("40", width / 2 + 200, height / 2 - 10);
  text("50", width / 2 + 250, height / 2 - 10);
  text("60", width / 2 + 300, height / 2 - 10);
  textSize(15);
  text("muertes", width / 2 + 340, height / 2+5);

  ///// Titulo /////
  fill(255);
  strokeWeight(0);
  textStyle(BOLD);
  textSize(20);
  textAlign(CENTER);
  text("MUERTES ANUALES POR MALARIA", width / 2, 55);
  text("Año", width / 2, height / 2 + 20);
  textSize(15);
  textAlign(RIGHT);
  text("2000 - 2012", width - 15, height - 30);
}