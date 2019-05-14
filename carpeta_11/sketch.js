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
var informacion;
var botoninfo;
var flechas;

////////// VARIABLES DE SEGMENTOS /////////

var INTRODUCCION = 0;
var ANIMACION = 1;
var ANIMADOS = 2;
var INTERACCION = 3;
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
var instruccion;
var genero;
var hora;
var agresion;

function preload() {
  papaya = loadImage('papaya.png');
  informacion = loadImage('Info papaya.jpg')
  botoninfo = loadImage('botoninfo.png')
  flechas = loadImage('flechas.png')
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

  instruccion = new instrucciones();
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

    textSize(80);
    text("¿Te gusta tomar\nlo que no es tuyo?\n\n\nHay muchas personas\nque tampoco resisten\ntomar lo ajeno.", 20, height / 2 - 300);

    if (millis() - tiempoAnterior > M) {
      estado = INTERACCION;
    }

    /////////////////INTERACCION//////////////////////////////////////// 
  } else if (estado == INTERACCION) {
    background(239, 131, 84);

    fill(255);
    textAlign(CENTER);
    textSize(90);
    text("Hurto de celulares\nen Bogotá", width / 2, 200)

    textSize(30);
    textLeading(sin(frameCount * 0.01) * 50);
    text("-\nINCLINA", width / 2 - 90, height / 2 - 50, 200, 200);

    image(papaya, width / 2 - 350, height / 2 + height / 4 - 150, 700, 1000);

    ///////INSTRUCCIONES/////

   if(frameCount > 360 && frameCount < 820) {
        instruccion.apareceInstruccion();
   }    
        /////// RELOJ /////////////
    
    var hora = hour();
    var minuto = minute();
    
textAlign(CENTER);
        textSize(160);
    text(hora + ":" + minuto, width/2, height/2+240);
    if ( minuto < 10){
      text("0" + minuto);
    }
    
     textSize(40);
    if(hora == 9 || 10 || 11) {
    text("Llegaste en las horas\ncon menos robos", width / 2, height - 270);
    } else if (hora == 12 || 13 || 14) {
    text("¡No permiten bajar el almuerzo!\n" + int((100 * 21) / 165) + "% de los celulares fueron robados", width / 2, height - 270);
    } else if (hora == 15 || 16 || 17) {
    text("¡Sal ahora!\nEs cuando menos roban", width / 2, height - 270);
    }

    ////// BOTON DE INFO /////

    image(botoninfo, 10, height - 60, 50, 50);

    for (var j = 0; j < touches.length; j++) {

      if (dist(touches[j].x, touches[j].y, 25, height - 25) < 20) {

        //si el boton es presionado borra la pantalla
        image(informacion, 100, 100, width - 200, height - 200);
      }
    }
    

    ////// CONTROLES DE HOMBRE Y MUJER /////

    giroX = map(rotationY, -90, 90, -10, 10);
    giroY = map(rotationX, -90, 90, -10, 10);

    if (giroX < -2) {
      genero.apareceM();
    } else if (giroX > 2) {
      genero.apareceH();
    }

    ////// CONTROLES DIA Y NOCHE /////

    if (giroY < -2) {
      controles.apareceNOCHE();

      // Controlador de NOCHE
      noStroke();
      fill(200, 200, 200);
      ellipse(xNOCHE, yNOCHE, tamNOCHE, tamNOCHE);
      image(papaya, xNOCHE - 50, yNOCHE - 100, tamNOCHE, tamNOCHE + 50);

      ////// ZONAS SENSIBLES NOCHE /////
      if (xNOCHE >= 0 && xNOCHE <= width / 2 - width / 4 - 75) {
              fill(35, 22, 81);
        rect(width/2-150, height/4, 300, 396);
              fill(255);
        textSize(120);
        textAlign(CENTER);
        text("6p.m. - 9p.m.", width / 2, 250);
        textSize(40);
        text("¡Camina con cuidado!,\n" + int((100 * 31) / 165) + "% de los asaltantes prefieren este horario", width / 2, height / 2 - 100);
      } else if (xNOCHE >= width / 2 - 145 && xNOCHE <= width / 2 - 95) {
        fill(35, 22, 81);
        rect(width/2-150, height/4+396, 300, 70);
         rect(width/2-150, height/4, 300, 375);
        fill(255);
        textSize(120);
        text("9p.m. - 12 p.m.", width / 2, 250);
        textSize(40);
        text("Ve bajo tu propio riesgo,\n" + int((100 * 24) / 165) + "% de los robos sucedieron en este horario", width / 2, height / 2 - 100);
      } else if (xNOCHE >= width / 2 + 95 && xNOCHE <= width / 2 + 145) {
         fill(35, 22, 81);
        rect(width/2-150, height/4+375, 300, 140);
         rect(width/2-150, height/4, 300, 307);
        fill(255);
        textSize(120);
        text("12m.n. - 3a.m.", width / 2, 250);
        textSize(40);
        text("¡No hay donde esconderse!\nel porcetaje de robos (" + int((100 * 25) / 165) + "%)\nno baja en la madrugada", width / 2, height / 2 - 100);
      } else if (xNOCHE >= width / 2 + width / 4 + 75 && xNOCHE <= width / 2 + width / 4 + 125) {
           fill(35, 22, 81);
        rect(width/2-150, height/4+307, 300, 300);
         rect(width/2-150, height/4, 300, 293);
        fill(255);
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
      ellipse(xDIA, yDIA-100, tamDIA, tamDIA);
      image(papaya, xDIA - 50, yDIA - 200, tamDIA, tamDIA + 50);

      ////// ZONAS SENSIBLES DIA /////
      if (xDIA >= 0 && xDIA <= width / 2 - width / 4 - 75) {
        fill(132, 188, 218);
        rect(width/2-150, height/4, 300, 347);
        fill(255);
        textSize(120);
        textAlign(CENTER);
        text("6a.m. - 9a.m.", width / 2, height - 250);
        textSize(40);
        text("¡NO SALGAS SOLO!,\nA esta hora se registraron el " + int((100 * 38) / 165) + "% de robos", width / 2, height / 2 + 100);
      } else if (xDIA >= width / 2 - 145 && xDIA <= width / 2 - 95) {
fill(132, 188, 218);
        rect(width/2-150, height/4+347, 300, 150);
        rect(width/2-150, height/4, 300, 297);
        fill(255);
        textSize(120);
        text("9a.m. - 12 a.m.", width / 2, height - 250);
        textSize(40);
        text("Baja a la mitad el porcentaje,\n en este horario fue el " + int((100 * 19) / 165) + "% de los robos", width / 2, height / 2 + 100);
      } else if (xDIA >= width / 2 + 95 && xDIA <= width / 2 + 145) {
        fill(132, 188, 218);
        rect(width/2-150, height/4+297, 300, 250);
        rect(width/2-150, height/4, 300, 243);
        fill(255);
        textSize(120);
        text("12m.d. - 3p.m.", width / 2, height - 250);
        textSize(40);
        text("¡No permiten bajar el almuerzo!\n" + int((100 * 21) / 165) + "% de los celulares fueron robados", width / 2, height / 2 + 100);
      } else if (xDIA >= width / 2 + width / 4 + 75 && xDIA <= width / 2 + width / 4 + 125) {
         fill(132, 188, 218);
        rect(width/2-150, height/4+243, 300, 300);
        rect(width/2-150, height/4, 300, 193);
        fill(255);
        textSize(120);
        text("3p.m - 6p.m.", width / 2, height - 250);
        textSize(40);
        text("Es constante...\ndurante lo último del día,\n se mantiene " + int((100 * 19) / 165) + "% de robos", width / 2, height / 2 + 100);

      }
    }
  }
}

function touchEnded() {

  // Aquí se detecta si el usuario empieza a interactuar con el iPad
  if (estado == INTRODUCCION) {
    estado = ANIMACION;
    tiempoAnterior = millis();
  }
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
  if (dist(touches[0].x, touches[0].y, xDIA, yDIA-100) < tamDIA / 2) {

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
      image(papaya, width/2-150, height/4, 300, 450);

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
       image(papaya, width/2-150, height/4, 300, 450);
    

      //Barra 
      rectMode(CENTER);
      fill(209, 122, 20);
      rect(width / 2, height / 4-100, width - 250, 20),
        ellipse(width / 2 - 120, height / 4-100, 50, 50);
      ellipse(width / 2 - width / 4 - 100, height / 4-100, 50, 50);
      ellipse(width / 2 + 120, height / 4-100, 50, 50);
      ellipse(width / 2 + width / 4 + 100, height / 4-100, 50, 50);

      rectMode(CORNER);
    }
  }

}

function instrucciones() {
  this.visible = true

  this.apareceInstruccion = function() {
    if (this.visible == true) {
      image(flechas, 50, 50, width - 100, height - 100);
    }
  }

  this.esconde = function() {
    this.visible = false;

  }
}

