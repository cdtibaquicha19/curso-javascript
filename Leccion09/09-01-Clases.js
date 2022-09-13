class Persona {
    constructor( nombre, apellido ,documento){
        this._nombre = nombre;
        this._apellido = apellido;  
        this._documento = documento;

    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre ;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido ;
    }

    
}


let persona1 = new Persona( "Cristyan" , "Tibaquicha"  );
persona1.nombre = "David";
persona1.apellido= "larrota"


console.log( JSON.stringify(persona1 ) );

