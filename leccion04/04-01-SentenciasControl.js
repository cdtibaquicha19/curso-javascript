let mes = 10 ;
let estacion ;

if (mes==1||mes==2 || mes==12) {
    estacion= ("Invierno");
} else if(mes==3||mes==4 || mes==5){
    estacion= ("Primavera");
} else if(mes==6||mes==7 || mes==8){
    estacion= ("Otoño");
} else if(mes==9||mes==10 || mes==11){
    estacion= ("Verano");
}else{
    estacion= ("numero no valido");
}
console.log(estacion);


function saberHora(hora){
    let horaDia;

    if(hora>=6 && hora <=11){
        horaDia = "Buenos dias";
    }else if (hora>=12 && hora <=18){
        horaDia= "Buenas Tardes";
    }else if (hora>=19 && hora <=24){
        horaDia= "Buenas Noches";
    }else if (hora>=0 && hora <6){
        horaDia= "Durmiendo";
    }else{
        horaDia = "hora no valida ";
    }
    return(horaDia);

}
console.log(saberHora(24));
