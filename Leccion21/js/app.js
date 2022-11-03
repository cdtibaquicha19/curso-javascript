const ingresos = [
    new Ingreso('Sueldo ', 2500.00),
    new Ingreso('Venta coche', 1500),
    new Ingreso('Nuevo Ingreso', 1500),
    new Ingreso('Nuevo Ingreso', 1500),
];

const egresos = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 400),
    new Egreso('Ropa', 400)
];

let cargarApp = ()=>{
    cargarCabecero();
    cargarIngresos();
}

let totalIngresos = ()=>{
    let totalIngreso = 0;
    for(ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = ()=>{
    let totalEgreso = 0;
    for(egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = ()=>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

const formatoMoneda = (valor)=>{
    return valor.toLocaleString("en-US",
    {
        style :"currency",
        currency:"USD",
        minimumFractionDigits:2
    });
}

const formatoPorcentaje = (valor)=>{
    return valor.toLocaleString("en-US",
    {
        style :"percent",
        minimumFractionDigits:2 
    })
}

const cargarIngresos = ()=>{
    let ingresosHTML='';
    for (ingreso of ingresos){
        ingresosHTML += crearIngresoHTML(ingreso)
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML; 
}


const crearIngresoHTML = ()=>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
                <ion-icon name="close-circle-outline"></ion-icon>
            </button>
        </div>
    </div>
</div>`;
return ingresoHTML ; 
}