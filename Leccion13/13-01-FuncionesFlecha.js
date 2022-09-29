


function miFuncion(){
    console.log("saludos desde mi funcion ")
}


//const miFuncionFlecha = () => {
  //  console.log("saludos desde flecha");
//}

//const miFuncionFlecha = () => console.log("saludos desde flecha");
const saludar = () => {
    return "saludos desde funcion flecha "
}
console.log(saludar());


const regresarObjeto = () => ({nombre:"juan"});

console.log(regresarObjeto())

//miFuncionFlecha();

const funcionParametros=(mensaje) => console.log(mensaje);

funcionParametros("hola desde funcion con parametros" ) ; 


