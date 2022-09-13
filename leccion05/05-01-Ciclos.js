let contador = 0 ; 

while ( contador < 3 ) {
    console.log( contador )
    contador++ ;  
}



contador = 0 ;

do {
    console.log( contador );
    contador++;
} while ( contador < 3 );


// for 


contador = 0 ; 

for (contador = 0; contador < 3; contador++) {
    console.log(contador);
}



contador = 0 ;

for(contador = 0 ; contador <= 10 ; contador ++  ){
    
    if ( contador % 2 == 0 ) {
        console.log(contador);
        break;    
    }
    
}


for (contador=0; contador<=10;contador++ ){ 
    if( contador % 2 !== 0 ){
        continue;
    }
    console.log(contador);
    
}





