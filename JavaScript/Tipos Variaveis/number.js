const number = 12.753;

const numberAsString = number.toString(); //Transfora o tipo de variável número para String
console.log('Numero transformado em string: ', numberAsString, typeof numberAsString);
//
const fixedTwoDecimals = number.toFixed(2); //Retorna o número com N casas decimais
console.log('Numero e o tipo da variável: ', number, typeof number);
console.log('Numero reduzido e o tipo da variável: ', fixedTwoDecimals, typeof fixedTwoDecimals);
//
// Parse Int e Parse Float converte uma String em número inteiro ou decimal, respectivamente
console.log('String parseada em Float: ', parseFloat(fixedTwoDecimals));
console.log('String parseada em Int: ', parseInt(fixedTwoDecimals));
//