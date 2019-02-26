var tamRectCol = -20;
var tamRecHer = 30;
var colSel = 0;
var herSel = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
}

function draw() {
  noStroke();
  fill(255);

  // Botones de Herramientas
  rect(10, 10, tamRecHer, tamRecHer);
  rect(10, 50, tamRecHer, tamRecHer);
  rect(10, 90, tamRecHer, tamRecHer);
  rect(10, 130, tamRecHer, tamRecHer);
  rect(10, 170, tamRecHer, tamRecHer);
  rect(10, 210, tamRecHer, tamRecHer);
  rect(10, 250, tamRecHer, tamRecHer);
  rect(10, 290, tamRecHer, tamRecHer);
  rect(10, 330, tamRecHer, tamRecHer);

  //Herramienta Borrar Todo
  rect(10, height-50, tamRecHer, tamRecHer);
  fill(0);
  quad(20, height-25, 30, height-25, 33, height-40, 17, height-40);
  rect(17, height-44, 16, 3);
  rect(22, height-47, 6, 3);

  //Base tablero de colores
  fill(255);
  rect(width-20, height-20, -160, -70);

  // Imagenes Botones de colores
  //Magenta
  fill(255, 0, 100);
  rect(width-30, height-30, tamRectCol, tamRectCol);

  //Blanco
  stroke(0);
  fill(255);
  rect(width-30, height-60, tamRectCol, tamRectCol);

  //Negro
  noStroke();
  fill(0);
  rect(width-60, height-60, tamRectCol, tamRectCol);

  //Púrpura
  fill(190, 184, 235);
  rect(width-90, height-60, tamRectCol, tamRectCol);

  //Amarillo
  fill(255, 215, 0);
  rect(width-60, height-30, tamRectCol, tamRectCol);

  //Cyan
  fill(0, 255, 255);
  rect(width-90, height-30, tamRectCol, tamRectCol);

  //Verde
  fill(35, 211, 141);
  rect(width-120, height-30, tamRectCol, tamRectCol);

  //Naranja
  fill(252, 157, 15);
  rect(width-120, height-60, tamRectCol, tamRectCol);

  //Café
  fill(167, 109, 96);
  rect(width-150, height-60, tamRectCol, tamRectCol);

  //Verde Gris
  fill(103, 146, 116);
  rect(width-150, height-30, tamRectCol, tamRectCol);


  // Seleccion Color
  if (colSel == 0) {
    // Blanco
    fill(255);
    stroke(255);
  } else if (colSel == 1) {
    // Magenta
    fill(255, 0, 100);
    stroke(255, 0, 100);
  } else if (colSel == 2) {
    // Negro
    fill(0);
    stroke(0);
  } else if (colSel == 3) {
    // Púrpura
    fill(190, 184, 235);
    stroke(190, 184, 235);
  } else if (colSel == 4) {
    // Amarillo
    fill(255, 215, 0);
    stroke(255, 215, 0);
  } else if (colSel == 5) {
    // Cyan
    fill(0, 255, 255);
    stroke(0, 255, 255);
  } else if (colSel == 6) {
    // Verde
    fill(35, 211, 141);
    stroke(35, 211, 141);
  } else if (colSel == 7) {
    // Naranja
    fill(252, 157, 15);
    stroke(252, 157, 15);
  } else if (colSel == 8) {
    // Café
    fill(167, 109, 96);
    stroke(167, 109, 96);
  } else if (colSel == 9) {
    // Verde Gris
    fill(103, 146, 116);
    stroke(103, 146, 116)
  }

  //Herramientas
  if (mouseIsPressed == true) {
    // Seleccion Herramienta
    if (herSel == 0) {
      noFill();
      bezier(width/2, height/2, mouseX, mouseY, 90, 90, width/2, height/2);
    } else if (herSel == 1) {
      noFill();
      bezier(mouseX, mouseY, 10, 10, 90, 90, width, height/2);
    } else if (herSel == 2) {
      line(mouseX, mouseY, width/3, height/3);
      line(mouseX, mouseY, -width/3+200, -height/3);
    } else if (herSel == 3) {
      fill(255);
      point(mouseX, mouseY);
      point(mouseX-10, mouseY+10);
      point(mouseX-20, mouseY-20);
      point(mouseX+20, mouseY+20);
    } else if (herSel == 4) {
      point(mouseX+random(20), mouseY-random(20));
      point(mouseX+random(40), mouseY-random(40));
      point(mouseX+random(60), mouseY-random(60));
    } else if (herSel == 5) {
      line(mouseX+random(20), mouseY-random(20), mouseX+random(40), mouseY-random(40));
    } else if (herSel == 6) {
      noFill();
      quad(mouseX+random(20), mouseY-random(50), mouseX+random(30), mouseY-random(60), mouseX+random(10), mouseY-random(80), mouseX+random(90), mouseY-random(70));
    } else if (herSel == 7) {
      line(mouseX, mouseY, width, height);
      line(mouseX, mouseY, 0, 0);
    } else if (herSel == 8) {
      noFill();
      bezier(0, 0, mouseX, mouseY, mouseX, mouseY, width, height);
    }

    // Zona Sensible de los botones Colores
    //Magenta
    if (mouseX > width-50
      && mouseX < width-30
      && mouseY > height-50
      && mouseY < height-30) {
      colSel = 1;
    }
    //Blanco
    if (mouseX > width-50
      && mouseX < width-30
      && mouseY > height-80
      && mouseY < height-60) {
      colSel = 0;
    }
    //Negro
    if (mouseX > width-80
      && mouseX < width-60
      && mouseY > height-80
      && mouseY < height-60) {
      colSel = 2;
    }
    //Púrpura
    if (mouseX > width-110
      && mouseX < width-90
      && mouseY > height-80
      && mouseY < height-60) {
      colSel = 3;
    }
    //Amarillo
    if (mouseX > width-80
      && mouseX < width-60
      && mouseY > height-50
      && mouseY < height-30) {
      colSel = 4;
    }
    //Cyan
    if (mouseX > width-110
      && mouseX < width-90
      && mouseY > height-50
      && mouseY < height-30) {
      colSel = 5;
    }
    //Verde
    if (mouseX > width-140
      && mouseX < width-120
      && mouseY > height-50
      && mouseY < height-30) {
      colSel = 6;
    }
    //Naranja
    if (mouseX > width-140
      && mouseX < width-120
      && mouseY > height-80
      && mouseY < height-60) {
      colSel = 7;
    }
    //Cafe
    if (mouseX > width-170
      && mouseX < width-150
      && mouseY > height-80
      && mouseY < height-60) {
      colSel = 8;
    }
    //Verde Gris
    if (mouseX > width-170
      && mouseX < width-150
      && mouseY > height-50
      && mouseY < height-30) {
      colSel = 9;
    } 

    // Zona Sensible de los botones Herramientas
    if (mouseX > 10
      && mouseX < 41
      && mouseY > 10
      && mouseY < 41) {
      herSel = 1;
    }
    if (mouseX > 10
      && mouseX < 41
      && mouseY > 50
      && mouseY < 81) {
      herSel = 2;
    }
    if (mouseX > 10
      && mouseX < 41
      && mouseY > height-50
      && mouseY < height-20) {
      background(100);
    }
    if (mouseX > 10
      && mouseX < 41
      && mouseY > 90
      && mouseY < 121) {
      herSel = 0;
    }
    if (mouseX > 10
      && mouseX < 41
      && mouseY > 130
      && mouseY < 161) {
      herSel = 3;
    }
    if (mouseX > 10
      && mouseX < 41
      && mouseY > 170
      && mouseY < 201) {
      herSel = 4;
    }
    if (mouseX > 10
      && mouseX < 41
      && mouseY > 210
      && mouseY < 241) {
      herSel = 5;
    }
    if (mouseX > 10
      && mouseX < 41
      && mouseY > 250
      && mouseY < 281) {
      herSel = 6;
    }
    if (mouseX > 10
      && mouseX < 41
      && mouseY > 290
      && mouseY < 321) {
      herSel = 7;
    }
    if (mouseX > 10
      && mouseX < 41
      && mouseY > 330
      && mouseY < 361) {
      herSel = 8;
    }
  }
}
