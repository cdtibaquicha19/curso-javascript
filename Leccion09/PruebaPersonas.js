class Persona {

    static contadorPersonas=0;

    constructor(nombre,apellido,edad){
        this._idPersona = ++ Persona.contadorPersonas;
        this._nombre = nombre ; 
        this._apellido = apellido;
        this._edad = edad ;
        
    }

    get idPersona (){
        return this._idPersona;
    }

    get nombre (){
        return this._nombre
    }
    set nombre (nombre){
        this._nombre = nombre ; 
    }

    get apellido () {
        return this._apellido ;
    }

    set apellido (apellido){
        this._apellido = apellido ;
    }

    get edad (){
        return this._edad ; 
    }

    set edad (edad) {
        this._edad = edad ; 
    }
    toString (){
        return `${this._idPersona}  ${this._nombre} ${this._apellido}  ${this._edad}
                ` ; 
    }


}
class Empleado extends Persona {
    static contadorEmpleados = 0 ;
    constructor (nombre ,apellido,edad, sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpledado(){
        return this._idEmpledado ; 
    }

    get sueldo (){
        return this._sueldo ; 
    }
    set sueldo (sueldo){
        this._sueldo = sueldo;

    }

    toString(){
        return `${super.toString()} ${this._idEmpleado} ${this._sueldo}`;
    }



}
class Cliente extends Persona {

    static contadorClientes = 0 ;

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);

        this._idCliente  = ++Cliente.contadorClientes ; 
        this._fechaRegistro = fechaRegistro ; 

    }

    get idCliente (){
        return this._idCliente ;
    }
    get fechaRegistro (){
        return this._fechaRegistro ; 
    }

    set fechaRegistro (fechaRegistro) {
        this._fechaRegistro = fechaRegistro ; 
    } 

    toString(){
        return `${super.toString()} ${this._idCliente} ${this._fechaRegistro}` ; 
    }


}


//Pruebas de clase personas 
let persona1 = new Persona("Cristyan","Tibaquicha",22);

console.log(persona1.toString());
let persona2 = new Persona("Carlos ","ramires",32);
console.log(persona2.toString());


empleado1 = new Empleado("karla","gomez",25,20000);

console.log(empleado1.toString());

let cliente1 = new Cliente("miguel","cervantes",35, new Date());

console.log(cliente1.toString());