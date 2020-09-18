const textSize = 'Texto'.length; // Retorna o tamanho da string
console.log(`Quantidade de letras: ${textSize}`);
//
const splitedText = 'Texto'.split('x'); // Retorna um array usando um string como delimitador
console.log(`Array com as posições separadas: ${splitedText}`);
console.log('Array com as posições separadas:', splitedText);
//
const replacedText = 'Texto'.replace('Text', 'Carr'); // Busca um valor e substitui por outro
console.log(`Substituição de valor: ${replacedText}`);
//
const lastChar = 'Texto'.slice(-1); // Retorna a "fatia de um valor"
console.log(`Ultima letra da váriavel: ${lastChar}`);
const allWithoutLastChar = 'Texto'.slice(0,-1);
console.log(`Palavra sem a última letra: ${allWithoutLastChar}`);
const secondToEnd = 'Texto'.slice(1);
console.log(`Palavra a partir da segunda letra: ${secondToEnd}`);
//
const twoCharsBeforeFirstPos = 'Texto'.substr(0,3); // Retorna N caracteres a partir de uma posição
console.log(`Palavra alterada: ${twoCharsBeforeFirstPos}`);
