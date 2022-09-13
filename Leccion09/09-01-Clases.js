class Persona {

    static contadorObjetosPersona = 0 ;

    constructor(nombre, apellido){
        this._nombre = nombre ;
        this._apellido  = apellido ; 
        Persona.contadorObjetosPersona++;
        }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }  
    get apellido(){
        return this._apellido;
    
    }
    set apellido (apellido){
        this._apellido = apellido ; 
    } 
    nombreCompleto(){
        return this.nombre +" "+ this.apellido ; 
    }
    toString(){
        return this.nombreCompleto() ;
    }
    static saludar (){
        console.log("saludos desde metodo static ")
    }
    static saludar2 (persona){
        console.log("Saludos " + persona.nombreCompleto())
    }
    
}
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);// llamar al constructor de la clase padre 
        this._departamento = departamento;
    }
    get departamento (){
        return this._departamento;
    }
    set departamento (departamento){
        this._departamento = departamento;
    }
    //sobrescritura 
    nombreCompleto(){
        return super.nombreCompleto() + ", Departamento :"+this._departamento
    }
}


let persona1 = new Persona ('juan',' perez');

console.log( persona1 );

let empleado1 = new Empleado('cristyan' , ' tibaquicha ', 'sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

Persona.saludar2(persona1);
console.log (Persona.contadorObjetosPersona);
