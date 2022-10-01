//function miFuncion1 (){
  //  console.log("funcion1")
//}
//function miFuncion2 (){
  //  console.log("funcion2")
//}


//funcion callback 

//function imprimir( mensaje ){
    //console.log(mensaje);
//}


//function sumar(op1,op2, funcionCallBck){
    //let res = op1+ op2;
    //funcionCallBck("resultado : "+ res);
//}

//sumar(5,3, imprimir);

//llamadas asincronas con setTimeout 

//function miFuncionCallback(){
    //console.log("saludo asincrono despues de 3 seg ");

//}
//setTimeout(miFuncionCallback,3000);

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()} : ${fecha.getMinutes()} : ${fecha.getSeconds()}`);
}

setInterval(reloj,1000); //1seg



