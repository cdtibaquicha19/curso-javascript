class Empleado {

    constructor (nombre, sueldo){
        this._nombre = nombre ; 
        this._sueldo = sueldo ; 
    }
    get nombre (){
        return this._nombre ;
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get sueldo (){
        return this._sueldo
    }

    set sueldo(sueldo){
        this._sueldo = sueldo
    }

    obtenerDetalles(){
        return ` Empleado : 
        nombre : ${this._nombre}
        sueldo : ${this._sueldo}`;
    }



}

class Gerente extends Empleado {
    constructor (nombre ,sueldo,departamento) {
        super(nombre, sueldo) ; 
        this.departamento = departamento; 
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()}
        departamento: ${this.departamento}` ; 
    }

}


function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    (tipo instanceof Empleado) ? console.log("es un empleado ") : "es un gerente "; 
    (tipo instanceof Gerente) ? console.log("es un gerente ") : "es un gerente "; 
}


let empleado1 = new Empleado ("David" , 5000000);
let gerente1 = new Gerente("Cristyan" ,2000000, "sistemas");


imprimir(empleado1) ;
imprimir(gerente1) ;
