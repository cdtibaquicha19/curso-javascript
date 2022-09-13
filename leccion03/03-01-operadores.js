let a = 3, b =2 ; 
let z = a+b ; 
console.log("Resultado: "+ z);

z = a - b ;
console.log("resultado de la resta : " + z );

z = a * b ;
console.log("resultado de la multiplicacion : " + z );

z = a / b ;
console.log("resultado de la divicion es  : " + z );

z = a % b ;
console.log("resultado del reciduo es  : " + z );

z = a ** b ;
console.log("resultado del exponente es  : " + z );

//incremento 
// pre incremento ( ++  entes de la variable )

z= ++a ;
console.log(a);
console.log(z);

z= b++ ;
console.log(b);
console.log(z);



//post incremento (++ despues de la variable )

// operadores de asignacion 
let v = 1 ;
v += 3 ; 
console.log( v );

v -= 2 ;
console.log( v );

// operadores de comparacion 

a = 3 , b = 2 , c = "3";
z = ( a === c ) ; 
console.log( z );
z = ( a != c ) ; 
console.log( z );
a = 3 , b = 2 , c = "3";
z =  a <= b ;
console.log( z );
a = 5 ;

if( a % 2 == 0 ) {
    console.log("Es un numero par");
}else{
    console.log("Es un numero Inpar");
}
//ejemplo mayor de edad 

let edad = 18 ,  adulto = 18 ; 

if( edad >= adulto ){
    console.log("es adulto ")
}else{
    console.log("es menor de edad ")
}
// OPERADORES LOGICOS 

a = -1; 
let valMin = 0 , valMax = 10 ;


if (a >= valMin && a <= valMax) {
    console.log("Dentro de rango");
    
} else {
    console.log("FUERA DE RANGO ");
}

// OPERADOR OR 

 let vacaciones = true , diaDescanso = false ;
 if ( vacaciones || diaDescanso ) {
    console.log( "Puede asistir ")
 } else {
     console.log("No puede asistir ")
 }

 //operador ternario 

let resultado = ( 2>2 ) ? "Es verdadero" : "Es Falso ";
console.log( resultado );
a = 2 ;  
console.log( resultado = ( a % 2 == 0 ) ? " Es par" : " Es inpar" );

let miNumero = "100" ;
console.log( typeof miNumero);
edad =  Number(miNumero);

console.log(edad);

if (isNaN(edad)) {
    console.log("No es un numero" );   
} else {
    if ( edad >= 18 ) {
        console.log("la persona puede votar ");
    } else {
        console.log("muy joven para votar  ");
    }
}
resultado = ( isNaN( edad ) ) ? "no es un numero": ( ( edad >= 18 ) ? "puede votar " : "no puede votar " ) ; 
console.log( resultado )
console.log(typeof edad);
//operador ternario 
console.log( resultado = ( edad >= 18 ) ? "la persona puede votar ": "la persona no puede votar " );

let x = 5 , y = 10 ;
z = ++x + y--;

console.log( x );
console.log( y );
console.log( z );

resultado = 4 + 5 * 6 / 3 ;
console.log( resultado );






























