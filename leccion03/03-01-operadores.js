//operadores de comparacion 

a = 0;

if(a % 2 == 0){
    console.log("es un numero par")
}else{
    console.log("es un numero impar")
}


let edad = 17 ;
const mayor_edad =18 ; 
if(edad >=mayor_edad){
    console.log("es mayor de edad ");
}else{
    console.log("es menor de edad ");
};


//operadores logicos 

a = 10 ; 
let valMin = 0 , valMax =10 ;


if (a >= valMin && a <= valMax){

    console.log( a + " Se en encuentra dentro del rango ");

}else{
    console.log( a + " No se en encuentra dentro del rango ");
}


let vacaciones = false , diaDescanso = false ; 

if(vacaciones || diaDescanso ){
    console.log(" si puede salir");
}else{
    console.log("no puede salir");
}


let resultado = (3>3) ? "verdadero" : "falso" ; 
console.log(resultado);

let b =3 ;
let resultado2 = (b % 2 == 0) ? "es par " : " es impar "
console.log(resultado2);


let miNumero = "18";

edad2 = Number(miNumero);
console.log(typeof edad2);

resultado = (edad >= mayor_edad) ? "puede votar ": "no puede votar";

console.log(resultado);


let numero2 ="18";
let num = Number(numero2);
console.log(num);

resultado = (isNaN(num) ? "no es un numero": ((numero2 >= mayor_edad) ? "puede votar ": "no puede votar"));
console.log(resultado);










