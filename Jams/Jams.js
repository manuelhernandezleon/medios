var song;
var fft;
var button;

var w;

function preload(){
  song = loadSound("Jazz.mp3");
}

function setup(){
  createCanvas(1080,1920);
  
  background(0);
  colorMode(RGB);
  angleMode(DEGREES);
  song.play();
  fft = new p5.FFT(0.8, 32);
  w = width / 32;
}

function draw(){
 //background(0);
 fill(255,4);
 textSize(128);
 text("San José", 500, 140);
 textSize(200);
 text("JAMS", 500, 300);

 var spectrum = fft.analyze();
 noStroke();
 for(var i = 0; i < spectrum.length; i++){
   var amp = spectrum[i];
   var y = map(amp, 0, 256, height, 0);
   fill(i*10, i*15, 255);
   rect(i*w, y, w, height - y);
 }
 for(var negros = 0; negros < spectrum.length; negros++){
   var amp2 = spectrum[negros];
   var y2 = map(amp2, 0, 256, height, 8);
   fill(0);
   rect(negros*w, y2, w, height - y2);
 }
}
