//bacterias
var bacterias = [];
var numBacterias = 10;

//virus
var viruss = [];
var numViruss = 3;

//microbios
var microbios = [];
var numMicrobios = 20;

//protozoo
var protozoos = [];
var numProtozoo = 20;

//gusano
var gusanos = [];
var numGusanos = 20;


function setup() {
  createCanvas(700, 700);

  for (var i = 0; i < numBacterias; i = i + 1) {
    bacterias[i] = new bacteria(random(width), random(height));
  }

  for (var e = 0; e < numViruss; e = e + 1) {
    viruss[e] = new virus(random(width), random(height));
  }

  for (var m = 0; m < numMicrobios; m = m + 1) {
    microbios[m] = new microbio(random(width), random(height));
  }

  for (var p = 0; p < numProtozoo; p = p + 1) {
    protozoos[p] = new protozoo(random(width), random(height));
  }

  for (var g = 0; g < numGusanos; g = g + 1) {
    gusanos[g] = new gusano(random(width), random(height));
  }
}



function draw() {
  background(0);

  //////////////////////bacterias//////////////////////

  for (var i = 0; i < bacterias.length; i = i + 1) {
    bacterias[i].dibujarse();
    bacterias[i].moverse();

    //Cuando las bacterias tocan un virus se vuelven rojas
    for (var r = 0; r < viruss.length; r = r + 1) {
      if (dist(viruss[r].posX, viruss[r].posY, bacterias[i].posX, bacterias[i].posY) < 30) {
        bacterias[i].estaInfectado();
      }
    }
  }

  //////////////////////virus//////////////////////

  for (var e = 0; e < viruss.length; e = e + 1) {
    viruss[e].dibujarse();
    viruss[e].moverse();

    if (frameCount % 200 == 0) {
       viruss[e].edad()
     //viruss.push(new virus(random(width), random(height)));
     }
  }

  //////////////////////microbios//////////////////////


  for (var m = 0; m < numMicrobios; m = m + 1) {
    microbios[m].dibujarse();
    microbios[m].moverse();

    if (dist(mouseX, mouseY, microbios[m].posX, microbios[m].posY) < 15) {
      microbios[m].morirse();
    }

    //Cuando un microbio se come una bacteria, crece y la bacteria muere
    for (var q = 0; q < bacterias.length; q = q + 1) {
      if (dist(bacterias[q].posX, bacterias[q].posY, microbios[m].posX, microbios[m].posY) < 5) {
        microbios[m].crecer();
        bacterias[q].morirse();
        
         // si la bacteria muere, nace otra en un lugar aleatorio
        //for (var h = 0; h < 2; h = h + 1) {
          
         // bacterias[h].nuevaBacteria();
     // }
      }
    }
  }

  //////////////////////protozoo//////////////////////

  for (var p = 0; p < numProtozoo; p = p + 1) {
    protozoos[p].dibujarse();
    protozoos[p].moverse();
  }


  //////////////////////gusano//////////////////////

  for (var g = 0; g < numGusanos; g = g + 1) {
    gusanos[g].dibujarse();
    gusanos[g].moverse();
    for (var k = 0; k < numProtozoo; k = k + 1) {
      if (dist(gusanos[g].posX, gusanos[g].posY, protozoos[k].posX, protozoos[k].posY) < 10) {
        gusanos[g].crecer();
        protozoos[k].morirse();
      }
    }

    for (var b = 0; b < viruss.length; b = b + 1) {
      if (dist(viruss[b].posX, viruss[b].posY, gusanos[g].posX, gusanos[g].posY) < 30) {
        gusanos[g].estaInfectado();
      }
    }
  }
}


//////////////////////////////////////////////////////////////////////

function bacteria(_x, _y) {
  //características
  this.colorSano = color(162, 247, 181)
  this.posX = _x;
  this.posY = _y;
  this.dir = 1;
  this.estaViva = true;

  //Habilidades

  this.dibujarse = function() {

    if (this.estaViva == true) {
      noFill();
      stroke(this.colorSano);
      strokeWeight(7);
      ellipse(this.posX - 10, this.posY, 30, 5);
      bezier(this.posX + random(30), this.posY + random(20), this.posX + random(10), this.posY + random(20), this.posX + random(30), this.posY + random(30), this.posX + random(5), this.posY + random(5));
    }
  }

  var dirX = 1
  var dirY = 1
  this.moverse = function() {
    this.posX = this.posX + random(0, -dirX);
    this.posY = this.posY + random(0, dirY);
    if (this.posX < 0) {
      dirX = dirX * -1
    } else if (this.posY < 0) {
      dirY = dirY * -1
    } else if (this.posY >= height) {
      dirY = dirY * -1
    } else if (this.posX >= width) {
      dirX = dirX * -1
    }
  }

  this.morirse = function() {
    this.estaViva = false;
  }
  this.estaInfectado = function() {
    this.colorSano = color(238, 77, 78)
    //cambia de verde a rojo cuando se infecta
  }
  this.nuevaBacteria = function() {
  bacterias.push (new bacteria(random(width), random(height)));
  }  
}



/////////////////////////////////////////////////////

function virus(_x, _y) {
  //características

  this.posX = _x;
  this.posY = _y;
  this.dir = 1;
  this.edad1 = 238;
  this.edad2 = 77;
  this.edad3 = 78;
  this.nace = 1;

  //Habilidades

  this.dibujarse = function() {

    noStroke();
    fill(this.edad1, this.edad2, this.edad3);
    beginShape();
    vertex(this.posX, this.posY);
    vertex(this.posX + 10, this.posY);
    vertex(this.posX + 15, this.posY + 5);
    vertex(this.posX + 10, this.posY + 15);
    vertex(this.posX, this.posY + 15);
    vertex(this.posX - 5, this.posY + 5);
    endShape(CLOSE);

    stroke(this.edad1, this.edad2, this.edad3);
    noFill();
    line(this.posX + 5, this.posY + 15, this.posX + 5, this.posY + 25);

    strokeWeight(2);
    beginShape();
    vertex(this.posX - 10, this.posY + 30);
    vertex(this.posX - 5, this.posY + 20);
    vertex(this.posX + 5, this.posY + 25);
    vertex(this.posX + 15, this.posY + 20);
    vertex(this.posX + 20, this.posY + 30);
    endShape();

  }

  this.edad = function() {
    this.edad1 = this.edad1 - 30
    this.edad2 = this.edad2 - 30
    this.edad3 = this.edad3 - 10
    
    if (this.edad1 == 0) {
      viruss.push(new virus(random(width), random(height)));
  }
  }

  // this.nace = function() {
  // push(new virus(random(width), random(height)));
  //}

  //this.morirse = function() {
  // this.estaViva = false;
  //}

  var dirX = 1
  var dirY = 1
  this.moverse = function() {
    this.posX = this.posX + random(0, dirX);
    this.posY = this.posY + random(0, dirY);
    if (this.posX > width) {
      dirX = dirX * -1
    } else if (this.posY > height) {
      dirY = dirY * -1
    } else if (this.posX < 0) {
      dirX = dirX * -1
    } else if (this.posY < 0) {
      dirY = dirY * -1
    }
  }
}

/////////////////////////////////////////////////////

function microbio(_x, _y) {
  //características
  this.posX = _x;
  this.posY = _y;
  this.dir = 1;
  this.estaViva = true;
  this.tamano1 = 15
  this.tamano2 = 17
  this.tamano3 = 7
  this.tamano4 = 8
  this.tamano5 = 10
  this.tamano6 = 12

  //Habilidades

  this.dibujarse = function() {

    if (this.estaViva == true) {
      fill(241, 154, 62);
      noStroke();
      ellipse(this.posX, this.posY, random(this.tamano1, this.tamano2), random(this.tamano1, this.tamano2));
      ellipse(this.posX + this.tamano3, this.posY + this.tamano4, random(this.tamano3, this.tamano4), random(this.tamano3, this.tamano4));
      ellipse(this.posX - this.tamano3, this.posY + this.tamano4, random(this.tamano3, this.tamano4), random(this.tamano3, this.tamano4));
      stroke(241, 154, 62);
      line(this.posX - random(this.tamano5, this.tamano6), this.posY - random(this.tamano5, this.tamano6), this.posX + random(this.tamano5, this.tamano6), this.posY + random(this.tamano5, this.tamano6));
      line(this.posX + random(this.tamano5, this.tamano6), this.posY - random(this.tamano5, this.tamano6), this.posX - random(this.tamano5, this.tamano6), this.posY + random(this.tamano5, this.tamano6));
    }
  }

  this.moverse = function() {
    this.posX = this.posX + random(-1, 1);
    this.posY = this.posY + random(-1, 1);
  }

  this.crecer = function() {
    this.tamano1 = this.tamano1 + 0.3
    this.tamano2 = this.tamano2 + 0.3
    this.tamano3 = this.tamano3 + 0.3
    this.tamano4 = this.tamano4 + 0.3
    this.tamano5 = this.tamano5 + 0.3
    this.tamano6 = this.tamano6 + 0.3

  }

  this.morirse = function() {
    this.estaViva = false;
  }
}

/////////////////////////////////////////////////////

function protozoo(_x, _y) {
  //características
  this.posX = _x;
  this.posY = _y;
  this.dir = 1;
  this.estaViva = true;

  //Habilidades

  this.dibujarse = function() {
    if (this.estaViva == true) {
noStroke();
      fill(62, 146, 204);
      bezier(this.posX, this.posY, this.posX + random(15), this.posY, this.posX + random(25), this.posY + 15, this.posX, this.posY + 5);
      bezier(this.posX, this.posY, this.posX - random(15), this.posY, this.posX - random(25), this.posY + 15, this.posX, this.posY + 5);
    }
  }

  var dirX = 1
  var dirY = 1
  this.moverse = function() {
    this.posX = this.posX + random(0, -dirX);
    this.posY = this.posY + random(0, dirY);
    if (this.posX < 0) {
      dirX = dirX * -1
    } else if (this.posY < 0) {
      dirY = dirY * -1
    } else if (this.posY >= height) {
      dirY = dirY * -1
    } else if (this.posX >= width) {
      dirX = dirX * -1
    }
  }

  this.morirse = function() {
    this.estaViva = false;
  }

}

/////////////////////////////////////////////////////

function gusano(_x, _y) {
  //características
  this.posX = _x;
  this.posY = _y;
  this.dir = 1;
  this.tamano = 1
  this.colorSano = color(255)

  //Habilidades

  this.dibujarse = function() {
   
    fill(this.colorSano);
    bezier(this.posX, this.posY, this.posX + random(20, 30), this.posY, this.posX + random(20, 30), this.posY + 15, this.posX, this.posY + 15);
    stroke(this.colorSano);
    strokeWeight(this.tamano);
    line(this.posX, this.posY + 10, this.posX - 20, this.posY - random(10, 20));
    line(this.posX, this.posY + 10, this.posX - 20, this.posY + random(10, 20));
    line(this.posX, this.posY + 10, this.posX - 20, this.posY + random(0, 10));

  }

  var dirX = 1
  var dirY = 1
  this.moverse = function() {
    this.posX = this.posX + random(0, -dirX);
    this.posY = this.posY + random(0, dirY);
    if (this.posX < 0) {
      dirX = dirX * -1
    } else if (this.posY < 0) {
      dirY = dirY * -1
    } else if (this.posY >= height) {
      dirY = dirY * -1
    } else if (this.posX >= width) {
      dirX = dirX * -1
    }
  }

  this.crecer = function() {
    this.tamano = this.tamano + 0.01
  }

  this.estaInfectado = function() {
    this.colorSano = color(238, 77, 78)
    //cambia de verde a rojo cuando se infecta
  }

}
