//declaracion de funcion 
function miFuncion ( a, b ){

    return( "Suma : "+ ( a + b ) );
}

console.log( miFuncion(2,3) ) ;


let x = function(a,b){ return a + b } ; 

console.log(x(5,2)) ; 

(function(){ console.log( "ejecutando la funcion" ); })();



console.log( typeof miFuncion ) ; 
var miFuncionTexto = miFuncion.toString();

console.log( miFuncionTexto );


// funciones flecha 

const sumarFuncionTipoFlecha = (a , b) => a + b ;   

console.log( sumarFuncionTipoFlecha( 3 , 5 ) );

let suma =function (a=5,b=4) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b ;

    }
resultado = suma() ;
console.log(resultado);


resultado = sumarTodo(5,4,13,10,9,);
console.log( resultado );

function sumarTodo(){
    let suma = 0 ;
    for(let i=0  ; i < arguments.length ; i++){
       suma += arguments[i];  
    }
    return suma;
}

// paso por valor o paso por referencia en funciones 

x = 10  ; // valor primitivo 

function cambiarValor(a){
    a = 20 ; 
}

cambiarValor(x);
console.log(x);


// creacion de objeto
const persona = {
    //atributos 
    nombre :'juan',
    apellido:'perez'
}

console.log( persona.nombre );

function cambiarValorObjeto ( p1 ){

    p1.nombre = 'Carlos' ; 
    p1.apellido = "Lara" ; 

} 

cambiarValorObjeto( persona );
console.log( persona );






















