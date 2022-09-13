//funcion constructor de objeto tipo persona

function Persona ( nombre, apellido, email ) {
    this.nombre =  nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido ; 
    };

}

let padre = new Persona("juan", "Perez", "jperez@mail.com");

console.log( padre )

let madre =  new  Persona( "laura" , "quintero", "lquintero@mail.com");

console.log(  JSON.stringify( madre )  );

console.log( madre.nombreCompleto() );


Persona.prototype.tel = '443322';

console.log(padre.tel );

console.log(padre)


let persona2 = {
    nombre: 'juan' , 
    apellido:'perez',
    nombreCompleto:function(titulo,tel){
        return titulo + " : " + this.nombre + " " + this.apellido + " " + tel ; 
       //return   this.nombre + " " + this.apellido ; 
    }


}
let persona3 = {
    nombre: 'carlos' , 
    apellido:'lara',
    
}
// uso de call para uso de nombre completo a persona2 con los datos de persona dos 

console.log( persona2.nombreCompleto() );
console.log( persona2.nombreCompleto.call( persona3,"Ingeniero" , 3201545464 ));


// METODO APPLY 
let arreglo = ['ingeniero' , '3175217930' ]
console.log( persona2.nombreCompleto.apply( persona3, arreglo ) );





let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "hola";










let persona = {
    nombre : "Juan" ,
    apellido : "Perez",
    mail : "jperez@mail.com",
    edad : 28 ,
    idioma: 'esA',

    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){

        this.idioma = lang.toUpperCase();

    },
    
    get nombreCompleto(){
        
        return this.nombre + " " + this.apellido ; 

    }

}

console.log(persona["apellido"]);

//for in

for( nombrePropiedad  in persona ){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad] );
}


persona.tel = "3175217930"; 

console.log( persona.tel );
console.log( persona );
 

delete persona.tel ;
console.log( persona );

// cont valor de propiedad 


console.log( persona.nombre + " " + persona.apellido ) 

for ( Nombrepro in persona) {
    console.log( persona[Nombrepro] )
}

let personaArray = Object.values( persona );
console.log( personaArray ); 

let personaString = JSON.stringify( persona ); 

console.log( personaString );

console.log( persona.nombreCompleto );

console.log( persona.lang );

persona.lang = "en" ; 

console.log( persona.idioma ); 






















