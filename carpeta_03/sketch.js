var x=300;
var h=0
var direccion=1;

function setup() {
  createCanvas(800, 500);
}

function draw() 
{
  background(255);
  noStroke();
  
  // cielo
  fill(39+x/8, 38+x/6, 53+x/3);
  rect(0,0,width, height/2);
  
  // sol
  fill(200+x/2,100+x/5,0);
  ellipse(600, 2*height/3-x/3, 200-x/8,200-x/8);
  
  // paredes
  fill(222-x/8, 124+x/8, 90+x/12);
  rect(0, 0, 500, height);
  rect(0, 0, width, 70);
  rect(width/2, height/2, width, 300);
  rect(630, 0, 200, height);
  
  // marco
  noFill();
  stroke(200+x/5);
  strokeWeight(10);
  rect(497, 70, 135, 180);
  
  // mesa
  noStroke();
  fill(177, 20+x/8, 46+x/12);
  quad(100, 370, 700, 370, 800, 500, 0, 500);
 
  // sombra
  fill(80, 80, 80, 0+x/5);
  ellipse(400, 440, 270, 10+x/14);
  
  //Plato
  fill(220-x/15, 220-x/15, 220-x/15);
  ellipse(400, 430, 150, 40);
  quad(280, 330, 520, 330, 475, 430, 325, 430);
  fill(220+x/15, 220+x/15, 220+x/15);
  ellipse(400, 330, 239.5, 50);
  fill(200-x/13, 200-x/13, 200-x/13);
  ellipse(400, 330, 225, 40);
  
  // sopa
  fill(158+x/13, 54+x/13, 4+x/13);
  ellipse(400, 333, 213, 31);
  fill(158+x/10, 54+x/10, 4+x/10);
  ellipse(390, 333, 193, 25);
  
  // mosca
  h = h + random(-2, 2);
  fill(30);
  rect(x, h + 270, 10, 10);
  
  // alas de mosca
  fill(250);
  ellipse(x+4, h + 265, 5, 10);
  
  x = x+1*direccion;
  if((x>500)||(x<0)) {
  direccion = direccion * -1;
  }
}
