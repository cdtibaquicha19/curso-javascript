//funcion constructor de obejtos 
function Persona(nombre , apellido , email){
    this.nombre = nombre ; 
    this.apellido = apellido ;
    this.email = email;
    this.nombrecompleto2 = function(){
        return (this.nombre +" "+this.apellido) ;
    }
}


let perso1 = {
    nombre: 'juan',
    apellido : 'perez',
    nombreCompleto : function(titulo , tel){
        return this.nombre + ' ' + this.apellido +' '+ titulo + ' '+ tel  ;  
    }
}

let perso3 = {
    nombre: 'carlos',
    apellido: 'lara' 
}

//uso de call  para usar el metodo nombre completo del objeto persona1 con los datos de persona 3
console.log(perso1.nombreCompleto.call(perso3,'ingeniero', '33221100'));






// creacion del objeto 
let padre = new Persona('cristyan','tibaquicha' , 'cdtibaquicha19@gmail.com') ; 
//uimpresion de objeto 
console.log(padre.nombrecompleto2());

Persona.prototype.tel ="44332211";
padre.tel = "1122334455";
 console.log(padre.tel);



let miObjeto = new Object();
let miObjet2 = {};
let miCadena1 = new String('hola');
let miCadena2 = 'hola';

const persona = {
    nombre: 'cristyan',
    apellido : 'tibaquicha',
    email : 'cdtibaquicha@gmail.com',
    edad : 26,
    idioma : 'es',

    get lenguaje(){
        return this.idioma.toUpperCase();
    },
    
    set lenguaje(lenguaje){
        this.idioma = lenguaje.toUpperCase();
    },
    
    get nombreCompleto(){
        return "Nombre completo :" + this.nombre +" "+ this.apellido;
    }
}

console.log(persona.nombreCompleto);

let persona2 = new Object();

persona2.nombre = 'carlos';
persona2.direccion = 'cota ';
persona2.tel = "3175217930";

console.log(persona2);


// for in 
for( propiedad  in persona2){
    console.log(propiedad);
    console.log(persona2[propiedad]);
}

persona.tel = '32055555555' ;

console.log(persona);
delete persona.tel ;
console.log(persona);


//concatenar cada valor de cada propiedad 

console.log(persona.nombre + ', ' + persona.apellido + ', '+persona.email);

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);

console.log(personaString);

console.log(persona.lenguaje);
persona.lenguaje = 'es-la' ;
console.log(persona.idioma);
