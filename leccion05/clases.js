class Persona{
    constructor(nombre , apellido ){
        this._nombre = nombre ;
        this._apellido = apellido;
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
        return this.nombre +' '+ this.apellido;     
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
}


let empleado1 = new Empleado ('cristyan','tibaquicha', 'sistemas');
console.log(empleado1);

let persona1 = new Persona('Cristyan','Tibaquicha');

console.log(persona1.nombre)
console.log(persona1.nombreCompleto())
console.log(persona1);


let persona2 = new Persona('yurany','rueda');
console.log(persona2);
console.log(persona2.nombreCompleto());


