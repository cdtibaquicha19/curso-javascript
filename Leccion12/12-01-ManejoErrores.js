let resultado = -5 ; 

try {
    if (isNaN(resultado) ) throw "no es un numero";
    else if (resultado === '') throw "es cadena vacia";
    else if (resultado >=0) throw "valor positivo "
    else if (resultado < 0) throw "valor negativo "
} catch (error) {
    console.log(error);
    

}
