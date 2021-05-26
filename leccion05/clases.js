class Persona{

    static contadorPersonas = 0 ;

    static get MAX_OBJ(){
        return 3 ;
    }

    constructor(nombre , apellido ){

        this._nombre = nombre ;
        this._apellido = apellido;
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas ;
        }else{
            console.log('se han superado el maximo de objetos persona permitidos');
        }
    

    }
    get nombre(){
        return this._nombre ;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido (apellido){

        this._apellido = apellido; 
    }
    nombreCompleto () 
    {
        return this.idPersona +' '+  this.nombre +' '+ this.apellido;     
    }
    toString(){
        return this.nombreCompleto();
    }
    static saludar(){

        console.log("saludos desde metodo static");

    }
    static saludar2(persona){
        console.log("saludos "+persona.nombre +" desde metodo static")
    }

}


class Empleado  extends Persona{
    constructor(nombre , apellido ,departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento ; 
    }

    //sobrescritura de una funcion 
    nombreCompleto(){
        return super.nombreCompleto()+ ' ' + this._departamento;
    }
    
}

let persona1 = new Persona('Cristyan','Tibaquicha');
let persona2 = new Persona('Cristyan','Tibaquicha');
let empleado1 = new Persona('Dary','Rueda','Administracion');



console.log(persona2.toString());
console.log(Persona.MAX_OBJ);


console.log(Persona.contadorPersonas);




