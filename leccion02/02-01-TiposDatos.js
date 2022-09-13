/* Tipo de dato String
    EJEMPLOS DE TIPOS DE DATOS JAVASCRIPT
*/
var nombre = "Carlos";
console.log(nombre);

nombre = 500 
console.log(typeof nombre)

var numero = 1000;
console.log(numero);

// tipo de dato objeto 

var objeto = {
    nombre : "juan",
    apellido : "perez",
    telefono : "3175217930"
}
console.log(typeof objeto);

// tipo de dato boolean

var  bandera = true 
console.log(typeof bandera)
bandera = false ; 
console.log(bandera);
console.log(typeof bandera);


function miFuncion(){
  
}
console.log(miFuncion); 
console.log(typeof miFuncion); 

//tipo de dato Symbol

var simbolo = Symbol("mi simbolo");

console.log(typeof simbolo);


// tipo de clase es una funcion 
 class Personas{
     constructor(nombre,apellido){
         this.nombre = nombre;
         this.apellido = apellido ; 
     }
 }
 console.log(typeof Personas);

 var x ;
 console.log(typeof x);

 // null  = ausencia de valor 


 var y = null ;

 console.log( typeof y);


 var autos= ['BMW','AUDI','VOLVO'];

 console.log(autos);
 console.log(typeof autos);

 var z = '' ; 
 console.log(z);

var nombre ="juan";
var apellido = "perez";
var nombreCompleto = nombre +" "+ apellido;
console.log(nombreCompleto);

var nombreCompleto2 = "carlos" + " " + "lara"
console.log(nombreCompleto2) ;

var x = nombre + 129 ;
console.log(x);

x = nombre +" "+(2+4) ;
console.log(x);

x= 2 + 4 + nombre ;
console.log(x);


let nombre2 = "juan";

console.log(nombre2);

const apellido2 = "perez";

// no es posible cambiar el valor de una consrante apellido2 = "lara";



let nombreCompleto3 ="juan perez"

console.log( nombreCompleto3 );

let x2, y2;
x2 = 10 , y2 = 20 ;

let z2 = x2 + y2 ;
console.log( z2 );



