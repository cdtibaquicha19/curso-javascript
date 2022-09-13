let condicion = 5>2;

if (condicion) {
    console.log("condicion verdadera ")
} else {
    console.log("condicion falsa ")  
}

let numero = 5 ;

if ( numero == 1 ) {
    console.log("Numero uno")
    
} else  if ( numero == 2){
    console.log("numero 2 ")
} else if ( numero == 3 ){
    console.log("numero es igual a 3 ")

} else if ( numero == 4 ){
    console.log("numero es igual a 4 ")

}else{
    console.log("numero desconocido")
}


let mes = 13 ; 
let estacion;

if (mes == 1 || mes == 2 || mes == 12 ) {
    estacion = "Invierno";
} else if( mes == 3 || mes == 4 || mes == 5  ) {
    estacion =  "Primavera";
    
}else if(mes==6 || mes == 7 || mes == 8 ){
    estacion = "Verano"; 

}else if(mes==9 || mes == 10|| mes == 11){
    estacion = "Otoño"
}else{
    estacion="Valor incorrecto";
}

console.log(estacion); 


let hora = 3, saludo; 

if(hora >= 6 && hora <= 11 ){
    saludo = " Buenos dias" ; 
}else if(hora >= 12 && hora <= 18){
    saludo = " Buenas Tardes" ;
}else if(hora >= 19 && hora <= 24){
    saludo = " Buenas Noches" ;
}else if(hora >= 0 && hora < 6){
    saludo = "Durmiendo" ;
}else{
    saludo = "Valor incorrecto " ; 
}
 console.log(saludo);


 
let numerotexto = 'valor desconocido' ; 
numero = 1 ; 

switch (numero) {
    case 1:
        numerotexto ="Numero Uno";
        
        break;
    case 2:
        numerotexto ="Numero Dos";
        break ; 
    case 3:
        numerotexto = "Numero tres";
        break;
    case 4:
        numerotexto = "Numero Cuatro";
        break;

    default:
        numerotexto = "caso no encontrado"
        break;
}
console.log(numerotexto);


//estacion del año 

mes = 8 ;
estacion=  "estacion desconocida"; 

switch (mes) {
    case 1: case 2: case 12:
        estacion = "Invierno";
        break;
case 3: case 4: case 5:
        estacion = "Primavera";
        break;
case 6: case 7: case 8:
        estacion = "Verano";
        break;
case 9: case 10: case 11:
        estacion = "Otoño";
        break;

    default:
        estacion="DESCONOCIDA"
        break;
}
console.log(estacion);



