let valor1 = 18;
let valor2 = 33;
let valor3 = -15;
let valor4 = -6;
let valor5 = 0;

let lista = [valor1,valor2,valor3,valor4,valor5];
let numPositivo = 0;
let numNegativo = 0;
let numPar = 0;
let numImpar = 0;

for (i = 0; i < 5; i++){
  if (lista[i] > 0){
    numPositivo++;
  } else if (lista[i] < 0){
    numNegativo++;
  }
  if (lista[i] % 2 == 0){
    numPar++;
  } else{
    numImpar++;
  }
}


console.log(numPar + " valor(es) par(es)");
console.log(numImpar + " valor(es) impar(es)");
console.log(numPositivo + " valor(es) positivo(s)");
console.log(numNegativo + " valor(es) negativo(s)");