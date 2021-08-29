
var mapa = [0, 0, 0, 0, 0, 0, 0, 0, 0,];
var jugador = 1;

function marcar() {
	
	for(i=0; i<9; i++) {
		
		if(mapa[i] == 0) document.getElementById("c"+i).style="background-color: #FDFEDB";
		if(mapa[i] == 1) document.getElementById("c"+i).style="background-image: url(Imagenes/equis.png)";
		if(mapa[i] == 2) document.getElementById("c"+i).style="background-image: url(Imagenes/circulo.png)"; 
	}
}

function pcelda(celda) {
	
	if(mapa[celda]==0) {
		
		if (jugador==1) {
			
			mapa[celda]=1;
			jugador=2;
		}else {
			
			mapa[celda]=2;
			jugador=1; 
		}
	}else {
		
		window.alert("La celda ya esta ocupada, escoge otra celda");
	}
	
	marcar();
	var r = ganador();
	
	switch(r) {
    
		case 1:
		window.alert("El rojo(X) es el Ganador");
		break;
		
		case 2:
		window.alert("El azul(O) es el Ganador");
		break;
		
		case 3:
		window.alert("Empate");
		break; 
	}
}

function ganador() {
	
	var numEspacios=0;
	
	for(i=0; i<9; i++) {
		
		if(mapa[i] == 0) numEspacios++;
	}
	
	if(mapa[0] == mapa[1] && mapa[1] == mapa[2] && mapa[0] !=0) return mapa[0];
	if(mapa[3] == mapa[4] && mapa[4] == mapa[5] && mapa[3] !=0) return mapa[3];
	if(mapa[6] == mapa[7] && mapa[7] == mapa[8] && mapa[6] !=0) return mapa[6];

	if(mapa[0] == mapa[3] && mapa[3] == mapa[6] && mapa[0] !=0) return mapa[0];
	if(mapa[1] == mapa[4] && mapa[4] == mapa[7] && mapa[1] !=0) return mapa[1];
	if(mapa[2] == mapa[5] && mapa[5] == mapa[8] && mapa[2] !=0) return mapa[2];

	if(mapa[0] == mapa[4] && mapa[4] == mapa[8] && mapa[0] !=0) return mapa[0];
	if(mapa[2] == mapa[4] && mapa[4] == mapa[6] && mapa[2] !=0) return mapa[2];

	if (numEspacios > 0) {
		
		return 0;
	
	}else {
		
		return 3;
	}
}