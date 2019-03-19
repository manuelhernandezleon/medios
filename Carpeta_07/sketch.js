var velocidad = 2;

//samples de sonido con sus variables

//primer beat
var b1;
var cuadrocolor1 = 104;
var areabeats1;

//segundo beat
var b2;
var cuadrocolor2 = 104;
var areabeats2;

//tercer beat
var b3;
var cuadrocolor3 = 104;
var areabeats3;

//misterio 1
var misterio1;
var misteriocolor1 = 157;
var areamisterio1;

//misterio 2
var misterio2;
var misteriocolor2 = 157;
var areamisterio2;

//misterio 3
var misterio3;
var misteriocolor3 = 157;
var areamisterio3;

//hit hat 1
var hithat1;
var hithatcolor1 = 73;
var areahithat1;

//hit hat 2
var hithat2;
var hithatcolor2 = 73;
var areahithat2;

//hit hat 3
var hithat3;
var hithatcolor3 = 73;
var areahithat3;

function preload() {
  b1 = loadSound('b1.mp3');
  b1.rate(velocidad);
  b2 = loadSound('b2.mp3');
  b3 = loadSound('b3.mp3');
  misterio1 = loadSound('misterio1.mp3');
   misterio2 = loadSound('misterio2.mp3');
  misterio3 = loadSound('misterio3.mp3');
  hithat1 = loadSound('hithat1.mp3');
  hithat2 = loadSound('hithat2.mp3');
  hithat3 = loadSound('hithat3.mp3');
}

function setup() {
  b1.loop();
  b1.stop();
  b2.loop();
  b2.stop();
  b3.loop();
  b3.stop();
   misterio1.loop();
   misterio1.stop();
  misterio2.loop();
   misterio2.stop();
  misterio3.loop();
   misterio3.stop();
  hithat1.loop();
   hithat1.stop();
  hithat2.loop();
   hithat2.stop();
  hithat3.loop();
   hithat3.stop();
  
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(0);
}

function draw() {

  ////////////// Rectángulos de fondo ///////////////////

  noStroke();
  
  //Beats
  fill (cuadrocolor1, 67, 173);
  rect(0, 0, width / 3, height/3);
  
  fill (cuadrocolor2, 67, 173);
  rect(0, height/3, width / 3, height/3);
  
  fill (cuadrocolor3, 67, 173);
  rect(0, height-267, width / 3, height/3);
  
  //////////////
  
  //misterioso 
  fill(44, 218, misteriocolor1);
  rect(width / 3, 0, width/3, height/3);
  
  fill(44, 218, misteriocolor2);
  rect(width / 3, height/3, width/3, height/3);
  
  fill(44, 218, misteriocolor3);
  rect(width / 3, height-267, width/3, height/3);
  
  //////////////
  
  //Hit hat
  fill(255, hithatcolor1, 92);
  rect(width, 0, -width / 3, height);
  
fill(255, hithatcolor2, 92);
  rect(width, height/3, -width / 3, height);

  fill(255, hithatcolor3, 92);
  rect(width, height-267, -width / 3, height);


  //////////////// Signo de interogación ///////////////////

  strokeWeight(10);
  noFill();
  stroke(255);
  arc(width / 2 - 10, height / 2 - 25, 80, 80, 240, 90, OPEN);
  strokeCap(ROUND);
  line(width / 2 - 10, height / 2 + 15, width / 2 - 10, height / 2 + 55);
  fill(255);
  noStroke();
  ellipse(width / 2 - 10, height / 2 + 75, 10, 10);

  ////////////// Tambor ///////////////////

  ellipse(90, height / 2 - 90, 15, 15);
  ellipse(165, height / 2 - 90, 15, 15);
  ellipse(130, height / 2 + 25, 70, 70);
  strokeWeight(10);
  noFill();
  stroke(255);
  ellipse(130, height / 2 + 25, 100, 100);
  ellipse(130, height / 2 + 25, 70, 70);
  strokeWeight(5);
  line(90, height / 2 - 45, 165, height / 2 - 90);
  line(90, height / 2 - 90, 165, height / 2 - 45);

  ////////////// Hit hat ///////////////////

  strokeWeight(10);
  ellipse(width - 130, height / 2, 140, 40);
  line(width - 130, height / 2 - 5, width - 130, height / 2 - 35);
  line(width - 130, height / 2 + 20, width - 130, height / 2 + 80);

  ////////////// áreas de acción ///////////////////
  
  //primer beat
  if (mouseX >= 0 && mouseX <= width/3 && mouseY >= 0 && mouseY <= height/3) 
  {
    areabeats1 = true;
  } else {
    areabeats1 = false;
  }
  
  //segundo beat
  if (mouseX >= 0 && mouseX <= width/3 && mouseY >= height/3 && mouseY <= height-266) 
  {
    areabeats2 = true;
  } else {
    areabeats2 = false;
  }
  
  //tercer beat
  if (mouseX >= 0 && mouseX <= width/3 && mouseY >= height-266 && mouseY <= height) 
  {
    areabeats3 = true;
  } else {
    areabeats3 = false;
  }
  
  //misterio1
  if (mouseX >= width/3 && mouseX <= width-267 && mouseY >= 0 && mouseY <= height/3) 
  {
    areamisterio1 = true;
  } else {
    areamisterio1 = false;
  }
  
  //misterio2
  if (mouseX >= width/3 && mouseX <= width-267 && mouseY >= height/3 && mouseY <= height-267 ) 
  {
    areamisterio2 = true;
  } else {
    areamisterio2 = false;
  }
  
  //misterio3
  if (mouseX >= width/3 && mouseX <= width-267 && mouseY >= height-267 && mouseY <= height ) 
  {
    areamisterio3 = true;
  } else {
    areamisterio3 = false;
  }
  
  //hithat1
  if (mouseX >= width-267 && mouseX <= width && mouseY >= 0 && mouseY <= height/3 ) 
  {
    areahithat1 = true;
  } else {
    areahithat1 = false;
  }
  
  //hithat2
  if (mouseX >= width-267 && mouseX <= width && mouseY >= height/3 && mouseY <= height-267 ) 
  {
    areahithat2 = true;
  } else {
    areahithat2 = false;
  }
  
  //hithat3
  if (mouseX >= width-267 && mouseX <= width && mouseY >= height-267 && mouseY <= height ) 
  {
    areahithat3 = true;
  } else {
    areahithat3 = false;
  }
  
  
  
}

  function mousePressed() {
  
    //primer beat
    if(areabeats1 == true)
  {
    
 if (b1.isPlaying()) {
    b1.stop();
    cuadrocolor1 = 104
  } else {
    b1.play();
    cuadrocolor1 = 222
  }
  }
      
    //segundo beat
    if(areabeats2 == true)
  {
    
 if (b2.isPlaying()) {
    // .isPlaying() returns a boolean
    b2.stop();
    cuadrocolor2 = 104
  } else {
    b2.play();
    cuadrocolor2 = 222
  }
  }
    
    //tercer beat
    if(areabeats3 == true)
  {
    
 if (b3.isPlaying()) {
    // .isPlaying() returns a boolean
    b3.stop();
    cuadrocolor3 = 104
  } else {
    b3.play();
    cuadrocolor3 = 222
  }
  }
    
      //misterio 1
    if(areamisterio1 == true)
  {
    
 if (misterio1.isPlaying()) {
    // .isPlaying() returns a boolean
    misterio1.stop();
    misteriocolor1 = 157
  } else {
    misterio1.play();
    misteriocolor1 = 220
  }
  }

        //misterio 2
   if(areamisterio2 == true)
  {
    
 if (misterio2.isPlaying()) {
    // .isPlaying() returns a boolean
    misterio2.stop();
    misteriocolor2 = 157
  } else {
    misterio2.play();
    misteriocolor2 = 220
  }
  }
    
    //misterio 3
   if(areamisterio3 == true)
  {
    
 if (misterio3.isPlaying()) {
    // .isPlaying() returns a boolean
    misterio3.stop();
    misteriocolor3 = 157
  } else {
    misterio3.play();
    misteriocolor3 = 220
  }
  }
    
    //hithat 1
    if(areahithat1 == true)
  {
    
 if (hithat1.isPlaying()) {
    // .isPlaying() returns a boolean
    hithat1.stop();
    hithatcolor1 = 73
  } else {
    hithat1.play();
    hithatcolor1 = 220
  }
  }
    
     //hithat 2
    if(areahithat2 == true)
  {
    
 if (hithat2.isPlaying()) {
    // .isPlaying() returns a boolean
    hithat2.stop();
    hithatcolor2 = 73
  } else {
    hithat2.play();
    hithatcolor2 = 220
  }
  }
    
     //hithat 3
    if(areahithat3 == true)
  {
    
 if (hithat3.isPlaying()) {
    hithat3.stop();
    hithatcolor3 = 73
  } else {
    hithat3.play();
    hithatcolor3 = 220
  }
  }
  }

function keyPressed(){
      if(keyCode === RIGHT_ARROW) {
        velocidad = velocidad + 0.1
      } else if (keyCode === LEFT_ARROW) {
        velocidad = velocidad - 0.1
      }
}
