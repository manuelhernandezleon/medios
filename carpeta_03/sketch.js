var x=0;
var direccion=1;

function setup() {
  createCanvas(800, 500);
}

function draw() 
{
  background(255);
  noStroke();
  // cielo
  fill(x/6, x/4, 150+x/4);
  rect(0,0,width, height/2);
  // sol
  fill(100+x/2,100+x/4,0);
  ellipse(600, 2*height/3-x/3, 200-x/8,200-x/8);
  // mar
  fill(0, 20, 100+x/6);
  rect(0,height/2, width, height);
  // base barco
  fill(50);
  quad(x, height/2-20, x+120,height/2-20,x+100,height/2,x+20,height/2  );
  // vela del barco
  fill(150);
  triangle(x+60,height/2-23,x+120,height/2-23,x+60,height/2-103   );
 
  x = x+1*direccion;
  if((x>width)||(x<0)) {
    direccion = direccion * -1;
  }
}