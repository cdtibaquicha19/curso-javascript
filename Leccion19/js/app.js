

const personas = [
    new Personas("juan","Perez"),
    new Personas("karla", "lara")
];

function mostrarPersonas(){
    console.log("Mostrar personas ... ");
    let texto ="";
    for(let persona of personas){
        console.log(persona);
        texto += "<li>"+persona.nombre+ " " + persona.apellido + "</li>";  
    }
    document.getElementById("personas").innerHTML = texto ; 
}

function agregarPersonas(){
    const forma = document.getElementById("forma");
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    if(nombre.value != "" && nombre.value !="" ){
        const persona = new Personas(nombre.value , apellido.value) ;
        personas.push(persona);
        mostrarPersonas();
    }else{

        alert("No hay informacion que cargar ")
    }
    
}