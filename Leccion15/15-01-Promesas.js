let miPromesa = new Promise ( ( resolved,rejected ) =>{

    let expresion = true ; 

    if(expresion){
        resolved("resolvio correcto ");
    }else{
        rejected("se produjo un error");
    }
    

});

//miPromesa.then(valor => console.log(valor), error => console.log(error));


let promesa = new Promise((resolver) => {
   // console.log("inicio promesa ");
    setTimeout(()=> resolver("saludo con promesa y tiempo "),3000);
    //console.log("fin promesa");
});

//promesa.then(valor => console.log(valor));


//asyng indica que una funcion regresa una promesa 


async function miFuncionConPromesa(){

    return "saludos con promesa y asyng ";

}

//miFuncionConPromesa().then(valor=>console.log(valor));

async function FuncionConPromesaAwait(){
    let miPromesa = new Promise(resolver =>{
        resolver("promesa con await ")
    });
    console.log( await miPromesa );
}

//FuncionConPromesaAwait();



async function FuncionPromesaAwaitTime(){
    let miPromesa = new Promise(resolver=>{
        setTimeout(()=>resolver("promesa con await y time out "),3000);

    });
    console.log(await miPromesa);
}


FuncionPromesaAwaitTime();


