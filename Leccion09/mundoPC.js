class dispositivoEntrada {
    constructor (tipoEntrada , marca ){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca ; 
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada ; 
    }

    get marca(){
        return this._marca ; 
    }

    set marca(marca){
        this._marca = marca ; 
    }
}

class Raton extends dispositivoEntrada{
    static contadorRatones = 0 ; 
    
    constructor (tipoEntrada, marca ){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return  this._idRaton; 
    }
    toString(){
        return `Raton : ${this._idRaton} Tipo Entrada :${this._tipoEntrada} marca : ${this._marca}` ; 
    }
}

class Teclado extends dispositivoEntrada{
    static contadorTeclado = 0 ; 
    
    constructor (tipoEntrada, marca ){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return  this._idTeclado; 
    }
    toString(){
        return `Teclado : ${this._idTeclado} Tipo Entrada :${this._tipoEntrada} marca : ${this._marca}` ; 
    }
}

class Monitor {
    static contadorMonitores = 0 ; 
    constructor (marca, tamaño){
        this._idMonitor = ++ Monitor.contadorMonitores ;
        this._marca = marca ; 
        this._tamaño = tamaño ;
    }
    get idMonitor(){
        return this._idMonitor ; 
    }
    get marca (){
        return this._marca ;
    }
    set marca (marca){
        this._marca = marca ; 
    }
    get tamaño (){
        return this._tamaño ;
    }
    set tamaño (tamaño) {
        this._tamaño = tamaño ; 
    }
    toString(){
        return `Monitor: ${this._idMonitor} Marca:  ${this._marca} Tamaño: ${this._tamaño}` ;    
    }
}

class Computadora {

    static contadorComputadoras = 0 ;
    constructor(nombre , monitor , raton , teclado ){
    this._idComputadora = ++Computadora.contadorComputadoras ;
    this._nombre = nombre;
    this._monitor = monitor ; 
    this._raton = raton ; 
    this._teclado = teclado ; 
    }
    get idComputadora (){
        return this._idComputadora;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre ;
    }
    get monitor (){
        return this._monitor ; 
    }
    set monitor(monitor){
        this._monitor = monitor; 
    }
    get raton (){
        return this._raton ; 
    }
    set raton(raton){
        this._raton = raton ; 
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }

    toString(){
        return`Computadora: ${this._idComputadora} 
        Nombre : ${this._nombre}
            Monitor : ${this._monitor}
            raton: ${this._raton}
            teclado : ${this._teclado}`;
    }    
}

class Orden {
    static contadorOrdenes = 0 ;
    static get MAX_PRODUCTOS(){
        return 5 ;
    }
    constructor(){

        this._idOrden = ++ Orden.contadorOrdenes ;
        this._productos = [];
        this._contadorProductoAgregados = 0 ; 

    }

    get idOrden(){
        return this._idOrden ; 
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
        }else{
            console.log("no se puede agregar mas productos")
        }
    }

    mostrarOrden(){
        let productosOrden = "";
        for(let producto of this._productos){
            productosOrden += producto.toString()+" " ;
        }
        console.log(`Orden ${this._idOrden} 
        Productos: ${productosOrden}`);
    }
}

let raton1 = new Raton ("USB","HP")
let teclado1 = new Teclado("USB","DELL");
let monitor1 = new Monitor("LG","22 pulgadas")

let computador1 = new Computadora("escritorio",monitor1,raton1,teclado1);

let orde1 = new Orden();
let orde2 = new Orden();

orde1.agregarProducto(computador1);
orde2.agregarProducto(computador1);


orde1.mostrarOrden();
orde2.mostrarOrden();



