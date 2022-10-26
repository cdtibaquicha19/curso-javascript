console.log("Aplicacion calculadora");

function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];

    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value ); 
    
    if(isNaN(resultado)){
        resultado = "<div class='alert alert-danger'> No se ha regitrado valores numericos</div>";
    }
    document.getElementById("resultado").innerHTML = "Resultado:  " + resultado ; 
}