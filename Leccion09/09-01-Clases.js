class Persona {

    static contadorPersonas = 0 ;
    static get MAX_OBJ (){
        return 5 ; 
    };

    email = "valor default de email " ; //atributo de los objetos 

    constructor(nombre, apellido){
        this._nombre = nombre ;
        this._apellido  = apellido ; 
        if( Persona.contadorPersonas <  Persona.MAX_OBJ ){
            this.idPersona= ++Persona.contadorPersonas;
        }else{
            console.log("Se ha superado el tope maximo ")}
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
        return this.idPersona +" " + this.nombreCompleto() ;
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
        return  super.nombreCompleto() + ", Departamento :"+this._departamento
    }
}


let persona1 = new Persona ('juan',' perez');
let persona2 = new Persona ('pedro',' lopez');
let persona3 = new Persona ('pedro',' lopez');
let persona4 = new Persona ('pedro',' lopez');
let persona5 = new Persona ('pedro',' lopez');

console.log( persona1.toString() );

let empleado1 = new Empleado('cristyan' , ' tibaquicha ', 'sistemas');
console.log(empleado1.toString);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

Persona.saludar2(persona1);
console.log (Persona.contadorObjetosPersona);
console.log(persona1.toString()) ;
console.log(persona2.toString());
console.log(empleado1.toString());

Persona.MAX_OBJ = 10 ;
console.log(Persona.MAX_OBJ);

