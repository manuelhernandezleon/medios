var k = 1
var l = 1
var p = 125/8
function setup() {
  createCanvas(500, 500);
 background(10);
 noStroke();
 
 //cuadrado amarillo
 fill(252, 200, 25);
 rect(125, 125, 250, 250);
 
 //triangulos blancos
 fill(255)
 for(var j = 0; j < 32; j = j + 1) {
  if(l == 1 || l == 5|| l == 17 || l == 21){
	for(var i = 0; i < 32; i= i + 1) {
  	//triangulos arriba primera y quinta fila
	if(k == 3 || k == 4 || k == 7 || k == 8 || k == 19 || k == 20|| k == 23 || k == 24){
 	triangle(p * i, j*p , p * (i + 1), p*(j+1), p*i, (j + 1) * p);
  	}
  	//triangulos arriba segunda y sexta fila
  	if(k == 1 || k == 2 || k == 5 || k == 6 || k == 17 || k == 18|| k == 21 || k == 22){
  	triangle(p * (i+2), (j+2)*p , p * (i + 1), p*(j+2), p*(i+1), (j + 1) * p)
  	}
  	//triangulos arriba primera y cuarta fila
    	if(k == 1 || k == 2 || k == 5 || k == 6 || k == 17 || k == 18|| k == 21 || k == 22){
 	triangle(p * i, j*p, p * (i + 1), p*(j+1), p*(i+1), j * p);
  	}
  	//triangulos abajo segunda y sexta fila
    	if(k == 1 || k == 4 || k == 5 || k == 8|| k == 17 || k == 20|| k == 21 || k == 24){
 	triangle(p * (i+1), (j+2)*p , p * (i + 1), p*(j+1), p*i, (j + 1) * p);
 	}
  	//triangulos abajo cuarta y octava fila
    	if(k == 2 || k == 3 || k == 6 || k == 7 || k == 18 || k == 19|| k == 22 || k == 23){
 	triangle(p * i, (j+3)*p, p * (i + 1), p*(j+3), p*(i+1), (j+4) * p);
 	}
  	//tríangulos arriba cuarta y octava fila
  	if(k == 1 || k == 4 || k == 5 || k == 8 || k == 17 || k == 20|| k == 21 || k == 24){
 	triangle(p * i, (j+4)*p , p * (i + 1), p*(j+4), p*i, (j + 3) * p);
 	}
  	//tríangulos abajo tercera y septima fila
    	if(k == 3 || k == 4 || k == 7 || k == 8 || k == 19 || k == 20 || k == 23 || k == 24){
 	triangle(p * (i+1), (j+3)*p , p * (i + 1), p*(j+2), p*i, (j + 2) * p);
 	}
  	//tríangulos arriba tercera y septima fila
  	if(k == 1 || k == 2 || k == 5 || k == 6 || k == 17 || k == 18|| k == 21 || k == 22){
 	triangle(p * i, (j+3)*p , p * (i + 1), p*(j+3), p*i, (j + 2) * p);
 	}
	k++;
   }
  k=1;  
  }
  l++
 }
}
