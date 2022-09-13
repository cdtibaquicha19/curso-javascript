// sintaxis antigua let autos = new Array("bwm","mercedes","volvo");


const autos = ["Bmw","Mercedes","Volvo"];
console.log(autos) ; 


console.log(autos[0]);

for (let i = 0; i < autos.length; i++) {
    console.log(i + " : " + autos[i]);
}

autos[1] = "Mercedez-betz" ; 
console.log(autos);

// FUNCION AGREGAR  .push 

autos.push("Audi");
console.log(autos);


console.log(autos.length) ; 

autos[autos.length] = "cadillad" ; 
console.log(autos);

console.log(autos.length);

//preguntar si es un arreglo 

console.log(Array.isArray(autos));

console.log( autos instanceof Array ) ; 









