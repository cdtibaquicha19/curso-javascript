//let autos = new Array("BMW", "mercedes", "volvo");

const autos = ["BMW", "mercedes", "volvo"] ; 
console.log(autos);

autos[0]= "audi" ; 
console.log(autos);

for(let i = 0 ; i< autos.length ; i++){
    console.log(autos[i]);
}

autos.push("bmw");//funcion agregar al arreglo 
console.log(autos);

console.log(autos.length);

autos[autos.length]="cadilac";

console.log(autos);

autos[5] = "porshe ";
console.log(autos);

console.log(Array.isArray(autos));
console.log(autos instanceof Array);
