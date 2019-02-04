function setup() {
createCanvas(600, 620);
}

function draw() {
 
//Marco
noFill();
stroke(198, 124, 49);
strokeWeight(30);
rect(0, 0, 599, 619);

strokeWeight(4);
stroke(221, 183, 77);
rect(2, 2, 596, 616);

 //primero van los cuadriláteros para ubicar los otros elementos a partir de estos

noStroke();

//cuadrilátero verde lima
fill(155, 149, 57, 140);
  quad(120, 270, 340, 145, 462 , 340, 290, 472);

//Triángulo amarillo
fill(249, 215, 62, 90);
triangle(100, 60, 190, 270, 268, 220);

//triángulo rojo
fill(188, 41, 48, 50);
triangle(60, 225, 125, 340, 240, 230);
//blendMode(NORMAL);

//trapecio amarillo-naranja
fill(229, 169, 57, 100);
quad(270, 545, 270, 400, 340, 350, 415, 430);

//trapecio celeste
fill(71, 149, 209, 70);
quad(170, 360, 200, 335, 250, 385, 180, 405);

// Líneas de la esquina inferios derecha
strokeWeight(6);
strokeCap(SQUARE);
stroke(0);
line(425, 453, 530, 540);
line(415, 465, 520, 550);
line(403, 476, 510, 565);

// Cículo grande
fill(255);
strokeWeight(13);
ellipse(355, 215, 80, 80);
noStroke();
fill(184, 41, 48);
ellipse(358, 210, 13, 13);

// ARCOS
//Arcos Periferia
stroke(0);
strokeWeight(1);
noFill();
arc(173, 228, 100, 100, 3.17, 4.28);
arc(173, 228, 120, 140, 3.17, 4.28);
arc(250, 210, 120, 280, 3.50, 4.50);
arc(250, 210, 130, 330, 3.50, 4.50);

//Arcos de la figura central
//Arcos Grandes
strokeWeight(3);
fill(255, 100);
arc(120, 430, 140, 150, 6, 2.05, CHORD);
arc(200, 362, 140, 150, 6, 2.05, CHORD);
arc(285, 305, 90, 100, 6, 2.05, CHORD);

//Arcos medianos
strokeWeight(2);
stroke(71,149, 209);
arc(135, 425, 110, 100, 6, 2.05, CHORD);
arc(215, 357, 110, 100, 6, 2.05, CHORD);
arc(300, 300, 60, 100, 6, 2.05, CHORD);

//Arcos pequeños
stroke(241, 89, 70);
arc(160, 415, 55, 50, 6, 2.05, CHORD);
arc(125, 445, 75, 55, 6, 2.05, CHORD);
arc(95, 465, 75, 65, 6, 2.05, CHORD);
arc(190, 390, 75, 55, 6, 2.05, CHORD);
arc(230, 355, 75, 55, 6, 2.05, CHORD);
arc(279, 320, 50, 30, 6, 2.05, CHORD);
arc(269, 335, 40, 30, 6, 2.05, CHORD);
arc(285, 125, 15, 20, 2.30, 5.97);

//Líneas Centrales
strokeWeight(2)
line(265, 130, 250, 160);
stroke(0);
strokeWeight(2);
line(285, 125, 350, 205);
strokeWeight(1);
line(100, 200, 135, 210);
line(105, 180, 140, 205);
line(120, 165, 145, 200);

//Figuras negras del centro
fill(0);
quad(45, 510, 56, 523, 510, 140, 570, 80);
beginShape();
vertex(170, 255);
vertex(185, 190);
vertex(280, 280);
vertex(305, 260);
vertex(350, 285);
vertex(560, 500);
vertex(340, 310);
vertex(250, 310);
vertex(192, 227);
vertex(190, 273);
endShape(CLOSE);

triangle(330, 120, 320, 110, 380, 20);
fill(241, 89, 70);
noStroke()
quad(280, 60, 325, 30, 380, 110, 326, 50);


//Formas curvas bezier
fill(139, 102, 173);
noStroke();
beginShape();
vertex(490, 230);
bezierVertex(530, 230, 500, 400, 400, 390);
bezierVertex(350, 380, 350, 390, 400, 380);
bezierVertex(480, 380, 500, 260, 425, 265);
bezierVertex(420, 265, 420, 230, 425, 230);
endShape(CLOSE);

//Otras formas cerca al morado
fill(255);
ellipse(475, 250, 20, 20);

fill(229, 169, 57);
triangle(480, 247, 530, 235, 530, 220);

noFill();
stroke(255);
strokeCap(ROUND);
strokeWeight(10);
arc(350, 390, 35, 35, 1.80, 4.50);
arc(310, 410, 35, 35, 1.80, 4.50);
arc(370, 430, 20, 20, 1.80, 4.50);
arc(330, 450, 25, 20, 1.80, 4.50);
arc(300, 480, 15, 10, 1.80, 4.50);

//cuadros como ajedrez
stroke(0);
strokeWeight(1);
fill(255);
rect(385, 270, 50, 50);

fill(255, 255, 255, 50);
rect(490, 270, 50, 50);

//líneas de los cuadrados ajedrez - izquierdo
//horizontales
line(385, 282.5, 435, 282.5);
line(385, 295, 435, 295);
line(385, 307.5, 435, 307.5);
//verticales
line(397.5, 270, 397.5, 320);
line(410, 270, 410, 320);
line(422.5, 270, 422.5, 320);

//líneas de los cuadrados ajedrez - derecho
//horizontales
line(490, 282.5, 540, 282.5);
line(490, 295, 540, 295);
line(490, 307.5, 540, 307.5);
//verticales
line(502.5, 270, 502.5, 320);
line(515, 270, 515, 320);
line(527.5, 270, 527.5, 320);

//Rellenos - Ajedrez
noStroke();
fill(0, 150);
rect(490, 270, 12.5, 12.5);
rect(527.5, 307.5, 12.5, 12.5);
fill(0, 50);
rect(515, 270, 12.5, 12.5);
rect(527.5, 282.5, 12.5, 12.5);
rect(502.5, 282.5, 12.5, 12.5);
rect(490, 295, 12.5, 12.5);
rect(515, 295, 12.5, 12.5);
rect(502.5, 307.5, 12.5, 12.5);
	
}
