function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here'; //Uma arrow function com uma expressão pode ser resumida assim, sem usar o return
const arrowFn2 = () => {       // Se arrow function tem mais de uma expressão, deve-se usar as chaves
    //const exp = 29;
    return 'Code here';
}

fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);


//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
// const controlFnExec => fnParam => allowed => {
//     if(allowed){
//         fnParam();
//     }
// }

// controlFnExec como função
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true);    //Executará a função fn
handleFnExecution();        //Não executará a função fn

            