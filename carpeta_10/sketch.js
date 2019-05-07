////////TABLA DE DATOS //////////
var tablaHurto;
var numFilas;

////////CONTADORES DE DATOS //////////
var contadorMujeres = 0;
var contadorHombres = 0;
var contadorMoto = 0;
var contadorPublico = 0;
var contadorVehVictima = 0;
var contadorSolteros = 0;
var contadorMarca = 0;
var contadorArma = 0;
var contadorSitio = 0;

////////// IMAGENES ///////////
var papaya;

////////// VARIABLES DE SEGMENTOS /////////

var INTRODUCCION = 0;
var ANIMACION = 1;
var INTERACCION = 2;
var INFORMACION = 3;
var estado = INTRODUCCION;
var tiempoAnterior;
var M = 5330; //tiempo animación (milli segundos)

////////// VARIABLES DE BARRAS /////////

var controles;

var xNOCHE, yNOCHE; //variables para posicion de la papaya de noche
var tamNOCHE; //variable para tamano de la papaya de noche

var xDIA, yDIA; //variables para posicion de la papaya de día
var tamDIA; //variable para tamano de la papaya de día

////////// VARIABLES DE DATOS /////////
var genero;
var hora;
var agresion;

function preload() {
  papaya = loadImage('papaya.png');
  tablaHurto = loadTable('HURTOS FINAL.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    
  //INCIO DE TABLA

  numFilas = tablaHurto.getRowCount();

  for (var i = 0; i < numFilas; i = i + 1) {

    var generos = tablaHurto.getString(i, 6);
    var movil1 = tablaHurto.getString(i, 4);
    var movil2 = tablaHurto.getString(i, 5);
    var civil = tablaHurto.getString(i, 7);
    var estudios = tablaHurto.getString(i, 8);
    var marca = tablaHurto.getString(i, 9);
    var arma = tablaHurto.getString(i, 3);
    var sitio = tablaHurto.getString(i, 2);

    //DATOS DE GENERO

    if (generos == 'FEMENINO') {
      contadorMujeres = contadorMujeres + 1;

    } else if (generos == 'MASCULINO') {
      contadorHombres = contadorHombres + 1;
    }

    // DATOS DE MOTO AGRESOR

    if (movil1 == 'PASAJERO MOTOCICLETA' && generos == 'MASCULINO') {
      contadorMoto = contadorMoto + 1;
    }

    //DATOS DE ROBOS A HOMBRES EN TRANSMILENIO

    if (sitio == 'TRANSPORTE PUBLICO' && generos == 'MASCULINO') {
      contadorPublico = contadorPublico + 1;
    }
    //DATOS DE ESTADO CIVIL

    if (civil == 'SOLTERO' && movil1 == 'A PIE' && generos == 'MASCULINO') {
      contadorSolteros = contadorSolteros + 1;
    }

    // DATOS ROBOS A MUJERES POR MARCA

    if (generos == 'FEMENINO' && marca == 'HUAWEI') {
      contadorMarca = contadorMarca + 1;
    }

    //DAROS ROBOS A MUJERES ARMAS

    if (generos == 'FEMENINO' && arma == 'SIN EMPLEO DE ARMAS') {
      contadorArma = contadorArma + 1;
    }

    print("Mujeres: " + contadorMujeres + " Hombres: " + int((100 * contadorHombres) / 165));
    print("Asaltante en moto: " + int((100 * contadorMoto) / 84));
    print("A pie hombre: " + int((100 * contadorPublico) / 84));
    print("Soltero: " + int((100 * contadorSolteros) / 84));
    print("Robos Huawei:" + contadorMarca + "Sin armas:" + contadorArma);
  }


  ///Coloca la papaya en el punto incial de la barra
  xNOCHE = width / 2 - width / 4 - 100;
  yNOCHE = height / 2 + height / 4
  tamNOCHE = 100;

  xDIA = width / 2 - width / 4 - 100;
  yDIA = height / 4
  tamDIA = 100;

  tiempoAnterior = millis();
  genero = new sexo();
  controles = new barra();

}


function draw() {

  /////////////////INTRODUCCION//////////////////////////////////////// 
  if (estado == INTRODUCCION) {
    background(110, 220, 170);

    fill(255);
    image(papaya, width / 2 + 100, height / 2 + 100, 600, 890);

    textSize(90);
    textFont('Noto Serif');
    text("¿Quién da\n más PAPAYA?", 50, height / 2 - 200);

    /////////////////INTERMEDIO//////////////////////////////////////// 
  } else if (estado == ANIMACION) {
    background(255, 147, 74);
    text("¿Te gusta tocar\nlo que no es tuyo?\n\nMuchos no se \nresisten a lo ajeno\nen Bogotá", 50, height / 2 - 300);

    if (millis() - tiempoAnterior > M) {
      estado = INTERACCION;
    }

    /////////////////INTERACCION//////////////////////////////////////// 
  } else if (estado == INTERACCION) {
    background(239, 131, 84);

    fill(255);
    textAlign(CENTER);
    textSize(90);
    text("Hurtos de celulares\nen Bogotá", width / 2, 200)

    textSize(30);
    textLeading(sin(frameCount * 0.01) * 50);
    text("Arrastra\nInclina", width / 2 - 90, height / 2 - 50, 200, 200);

    image(papaya, width / 2 - 350, height / 2 + height / 4 - 150, 700, 1000);

    giroX = map(rotationY, -90, 90, -10, 10);
    giroY = map(rotationX, -90, 90, -10, 10);

    if (giroX < -2) {
      genero.apareceM();
    } else if (giroX > 2) {
      genero.apareceH();
    }

    if (giroY < -2) {
      controles.apareceNOCHE();

      // Controlador de NOCHE
      noStroke();
      fill(200, 200, 200);
      ellipse(xNOCHE, yNOCHE, tamNOCHE, tamNOCHE);
      image(papaya, xNOCHE - 50, yNOCHE - 100, tamNOCHE, tamNOCHE + 50);

      ////// ZONAS SENSIBLES NOCHE /////
      if (xNOCHE >= 0 && xNOCHE <= width / 2 - width / 4 - 75) {
        textSize(120);
        textAlign(CENTER);
        text("6p.m. - 9p.m.", width / 2, 250);
        textSize(40);
        text("¡Camina con cuidado!,\n" + int((100 * 31) / 165) + "% de los asaltantes prefieren este horario", width / 2, height / 2 - 100);
      } else if (xNOCHE >= width / 2 - 145 && xNOCHE <= width / 2 - 95) {
        textSize(120);
        text("9p.m. - 12 p.m.", width / 2, 250);
        textSize(40);
        text("Ve bajo tu propio riesgo,\n" + int((100 * 24) / 165) + "% de los robos sucedieron en este horario", width / 2, height / 2 - 100);
      } else if (xNOCHE >= width / 2 + 95 && xNOCHE <= width / 2 + 145) {
        textSize(120);
        text("12m.n. - 3a.m.", width / 2, 250);
        textSize(40);
        text("¡No hay donde esconderse!\nel porcetaje de robos (" + int((100 * 25) / 165) + "%)\nno baja en la madrugada", width / 2, height / 2 - 100);
      } else if (xNOCHE >= width / 2 + width / 4 + 75 && xNOCHE <= width / 2 + width / 4 + 125) {
        textSize(120);
        text("3a.m - 6a.m.", width / 2, 250);
        textSize(40);
        text("El crimen también descansa...\nmientras la mayoría duerme,\n" + int((100 * 5) / 165) + "% roba en horas extra", width / 2, height / 2 - 100);
      }


      } else if (giroY > 2) {
        controles.apareceDIA();

        // Controlador de DIA
        noStroke();
        fill(35, 22, 81);
        ellipse(xDIA, yDIA, tamDIA, tamDIA);
        image(papaya, xDIA - 50, yDIA - 100, tamDIA, tamDIA + 50);
        
          ////// ZONAS SENSIBLES DIA /////
        if (xDIA >= 0 && xDIA <= width / 2 - width / 4 - 75) {
        textSize(120);
        textAlign(CENTER);
        text("6a.m. - 9a.m.", width / 2, height - 250);
        textSize(40);
        text("¡NO SALGAS SOLO!,\nA esta hora se registraron el " + int((100 * 38) / 165) + "% de robos", width / 2, height / 2+100);
      } else if (xDIA >= width / 2 - 145 && xDIA <= width / 2 - 95) {
        textSize(120);
        text("9a.m. - 12 a.m.", width / 2,height - 250);
        textSize(40);
        text("Baja a la mitad el porcentaje,\n en este horario fue el " + int((100 * 19) / 165) + "% de los robos", width / 2, height / 2+100);
      } else if (xDIA >= width / 2 + 95 && xDIA <= width / 2 + 145) {
        textSize(120);
        text("12m.d. - 3p.m.", width / 2, height - 250);
        textSize(40);
        text("¡No permiten bajar el almuerzo!\n" + int((100 * 21) / 165) + "% de los celulares fueron robados", width / 2, height / 2+100);
      } else if (xDIA >= width / 2 + width / 4 + 75 && xDIA <= width / 2 + width / 4 + 125) {
        textSize(120);
        text("3p.m - 6p.m.", width / 2, height - 250);
        textSize(40);
        text("Es constante...\ndurante lo último del día,\n se mantiene " + int((100 * 19) / 165) + "% de robos", width / 2, height / 2+100);

      }
    }
  }
}

function touchEnded() {

  // Aquí se detecta si el usuario empieza a interactuar con el iPad
  if (estado == INTRODUCCION) {
    estado = ANIMACION;
    tiempoAnterior = millis();

  } else if (estado == INFORMACION) {
    estado = INTRODUCCION;

  }

  ////// INTERACCION CON BARRA NOCHE //////

  //HORARIO DE 6 A 9PM

}


// Aquí se mueven la papaya entre las barras
function touchMoved() {

  //BARRA DE NOCHE
  if (dist(touches[0].x, touches[0].y, xNOCHE, yNOCHE) < tamNOCHE / 2) {

    //actualiza la posicion de la papaya con la posicion del toque
    xNOCHE = touches[0].x;

    if (xNOCHE < width / 2 - width / 4 - 100) {
      xNOCHE = width / 2 - width / 4 - 100
    } else if (xNOCHE > width / 2 + width / 4 + 100) {
      xNOCHE = width / 2 + width / 4 + 100
    }
    return false;
  }


  //BARRA DE DIA
  if (dist(touches[0].x, touches[0].y, xDIA, yDIA) < tamDIA / 2) {

    xDIA = touches[0].x;

    if (xDIA < width / 2 - width / 4 - 100) {
      xDIA = width / 2 - width / 4 - 100
    } else if (xDIA > width / 2 + width / 4 + 100) {
      xDIA = width / 2 + width / 4 + 100
    }
    return false;
  }

}


/////INFO COSTADOS/////
function sexo() {
  this.colorM = color(235, 81, 96);
  this.colorH = color(64, 61, 88);
  this.seleccionado = true

  this.apareceM = function() {
    if (this.seleccionado == true) {
      noStroke();
      fill(this.colorM);
      rect(0, 0, width / 2, height);
      fill(239, 131, 84);
      rect(width / 2, 0, width, height);
      fill(255);
      textAlign(CENTER);
      textSize(50);
      text("No hay género preferido\npara asaltar", width / 2, 150);
      textSize(170);
      text(int((100 * contadorMujeres) / 165) + "%", width / 4 - 10, height / 2);
      ellipse(width / 2, height / 2 + 200, 35, 35); //Cabeza icono mujer
      triangle(width / 2, height / 2 + 210, width / 2 - 25, height / 2 + 290, width / 2 + 25, height / 2 + 290); //Cuerpo icono mujer
      rect(width / 2 - 15, height / 2 + 290, 30, 20); // Piernas icono mujer
      textSize(20);
      text("de asaltos en noviembre 2018\nfueron a mujeres", width / 4 - 20, height / 2 + 50);
      text("Al " + int((100 * contadorMarca) / 80) + "% de mujeres\nles robaron Huawei", width / 2 + width / 4, height / 2 - 100);
      text("Samsung es la mejor opción,\n0% de robos a mujeres", width / 2 + width / 4, height / 2);
      text("Solo el " + int((100 * contadorArma) / 80) + "% de robos a mujeres\nfueron sin armas", width / 2 + width / 4, height / 2 + 100);

    }
  }

  this.apareceH = function() {
    if (this.seleccionado == true) {
      noStroke();
      fill(this.colorH);
      rect(width / 2, 0, width, height);
      fill(239, 131, 84);
      rect(0, 0, width / 2, height);
      fill(255);
      textAlign(CENTER);
      textSize(50);
      text("No hay género preferido\npara asaltar", width / 2, 150);
      textSize(170);
      text(int((100 * contadorHombres) / 165) + "%", width / 2 + width / 4 + 10, height / 2);
      ellipse(width / 2, height / 2 + 200, 35, 35); //Cabeza icono hombre
      rect(width / 2 - 25, height / 2 + 230, 50, 90); //Cuerpo icono hombre
      textSize(20);
      text("de asaltos en noviembre 2018\nfueron a hombres", width / 2 + width / 4 + 10, height / 2 + 50);
      text("Al " + int((100 * contadorSolteros) / 84) + "% de hombres solteros\nles robaron el celular a pie", width / 4, height / 2 - 100);
      text("A los hombres les roban menos\nen transporte público (" + int((100 * contadorPublico) / 80) + "%) ", width / 4, height / 2);
      text("Solo el " + int((100 * contadorMoto) / 80) + "% de hombres fueron\nabordados desde una moto", width / 4, height / 2 + 100);
    }
  }

  this.escondeM = function() {
    this.seleccionado = false;
  }

  this.escondeH = function() {
    this.seleccionado = false;
  }
}


/////BARRAS PARA CONTROLAR/////

function barra() {
  this.seleccionado = true

  //Control NOCHE
  this.apareceNOCHE = function() {
    //Fondo
    if (this.seleccionado == true) {
      
      rectMode(CORNER);
      noStroke();
      fill(35, 22, 81);
      rect(0, 0, width, height);

      //Barra 
      rectMode(CENTER);
      fill(209, 122, 34);
      rect(width / 2, height / 2 + height / 4, width - 250, 20),
        ellipse(width / 2 - 120, height / 2 + height / 4, 50, 50);
      ellipse(width / 2 - width / 4 - 100, height / 2 + height / 4, 50, 50);
      ellipse(width / 2 + 120, height / 2 + height / 4, 50, 50);
      ellipse(width / 2 + width / 4 + 100, height / 2 + height / 4, 50, 50);
      
      rectMode(CORNER);
    }
  }

  //Control DIA
  this.apareceDIA = function() {
    //Fondo
    if (this.seleccionado == true) {
      
      rectMode(CORNER);
      noStroke();
      fill(132, 188, 218);
      rect(0, 0, width, height);

      //Barra 
      rectMode(CENTER);
      fill(209, 122, 20);
      rect(width / 2, height / 4, width - 250, 20),
        ellipse(width / 2 - 120, height / 4, 50, 50);
      ellipse(width / 2 - width / 4 - 100, height / 4, 50, 50);
      ellipse(width / 2 + 120, height / 4, 50, 50);
      ellipse(width / 2 + width / 4 + 100, height / 4, 50, 50);
      
      rectMode(CORNER);
    }
  }

}