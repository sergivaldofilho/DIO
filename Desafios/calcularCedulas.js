let valor = 89;
let cn100 = 0, cn50 = 0, cn20 = 0, cn10 = 0, cn05 = 0, cn02 = 0, cn01 = 0;
while (valor >= 100){
    cn100+=1;
    valor -= 100;
}
while (valor >= 50){
    cn50+=1;
    valor -= 50;
}
while (valor >= 20){
    cn20+=1;
    valor-= 20;
}
while (valor >= 10){
    cn10+=1;
    valor-= 10;
}
while (valor >= 5){
    cn05+=1;
    valor-= 5;
}
while (valor >= 2){
    cn02+=1;
    valor-= 2;
}
while (valor >= 1){
    cn01+=1;
    valor-= 1;
}
console.log(cn100 + " nota(s) de R$ 100,00 \n" + cn50 + " nota(s) de R$ 50,00 \n" + cn20 + " nota(s) de R$ 20,00 \n" + cn10 + " nota(s) de R$ 10,00 \n" + cn05 + " nota(s) de R$ 5,00 \n" + cn02 + " nota(s) de R$ 2,00 \n" + cn01 + " nota(s) de R$ 1,00");


// var cn100 = 0;
// var cn50 = 0;
// var cn20 = 0;
// var cn10 = 0;
// var cn05 = 0;
// var cn02 = 0;
// var cn01 = 0;


// console.log(valor);
// while (valor >= 100){
//     cn100+=1;
//     valor -= 100;
// }
// console.log(valor);

// while (valor >= 50){
//     cn50+=1;
//     valor -= 50;
// }
// console.log(valor);

// while (valor >= 20){
//     cn20+=1;
//     valor-= 20;
// }
// console.log(valor);

// while (valor >= 10){
//     cn10+=1;
//     valor-= 10;
// }
// console.log(valor);

// while (valor >= 5){
//     cn05+=1;
//     valor-= 5;
// }
// console.log(valor);

// while (valor >= 2){
//     cn02+=1;
//     valor-= 2;
// }
// console.log(valor);

// while (valor >= 1){
//     cn01+=1;
//     valor-= 1;
// }
// console.log(valor);

// console.log(cn100 + " nota(s) de R$ 100,00");
// console.log(cn50 + " nota(s) de R$ 50,00");
// console.log(cn20 + " nota(s) de R$ 20,00");
// console.log(cn10 + " nota(s) de R$ 10,00");
// console.log(cn05 + " nota(s) de R$ 5,00");
// console.log(cn02 + " nota(s) de R$ 2,00");
// console.log(cn01 + " nota(s) de R$ 1,00");

// var notas = [100, 50, 20, 10, 5, 2, 1];
// var numNotas = [];
// //var i = 0;
// for (i=0; i < notas.length; i++){
//     numNotas = numNotas.push(valor/notas[i]);
//     console.log(numNotas);
//     valor %= i;
// }

// while (j < notas.length; j) {
//     console.log(numNotas[i] + " nota(s) de R$ " + notas[i]);
// }


