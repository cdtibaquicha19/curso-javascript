let contador = 0;
while (contador < 3) {
    console.log(contador);
    contador++;  
}
console.log("fin de ciclo while ");
contador = 0 ;
do {
    console.log(contador);
    contador++;  
    
} while (contador <3);
console.log("fin de ciclo Do while ");

contador = [4,5,6,7,8] ;
for(contador = 0 ; contador < 5 ; contador ++){
    console.log(contador);
}
console.log("fin de cliclo for")

contador = 0 ;
for(contador ; contador<=10 ;contador++){
    if(contador % 2 == 0 ){
        console.log(contador);
        break;
    }
}
inicio: // etiquetas en ciclos de javascrit

for(contador=0; contador<=10 ; contador++){
    if(contador % 2 !== 0 ){
        continue inicio;
    }else{
        console.log(contador);
    }
}
