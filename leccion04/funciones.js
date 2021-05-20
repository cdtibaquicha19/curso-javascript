function sumar (a,b) {
    console.log(arguments.length)

    return a+b;

}
console.log(sumar(2,8) );

let x = function (a,b) { return a + b };


console.log(x(5,3));

// funcion que se invoca asi misma pero no es util ya que no se puede llamar 
(function(){
    console.log("ejecutando la funcion 1 "); 
})();

var mifuncionTexto = sumar.toString();
console.log(mifuncionTexto);



//funcion tipo felcha funciona igual pero tiene sintaxis diferente 

const sumarFuncionTipoFlecha = (a,b) => (a + b) ; 

resultado = sumarFuncionTipoFlecha(4,3) ;
console.log(resultado) ;


let restar = function(a=4,b=5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a - b ;
}
resultado2 = restar();
console.log(resultado2);

// tipos primitivos paso por valor 

let valor = 10 ; 


function cambiaValor(a){
    a = 20 ;
}   
cambiaValor(valor); 
console.log(valor);

// paso por referencia 


const persona ={
    nombre : 'juan',
    apellido:'perez'
} 
function cambiarValorObjeto(p1){
    p1.nombre = 'cristyan';
    p1.apellido="tibaquicha"

}

cambiarValorObjeto(persona);
console.log(persona);
