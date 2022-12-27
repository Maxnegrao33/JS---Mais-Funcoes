/*Criando a Função */
function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 65;
let verificacao = maiorDeIdade(idade);
    
if (verificacao) {
console.log("É maior de Idade");
    } else {
        console.log("É menor de Idade");
    }

/* Exercício sobre função*/
/* Calcular a porcentagem entre 2 números*/

function calcPct(n1, n2){
    let pct = (n2 / n1) * 100;
    return pct;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
    console.log(`${pct}% de ${x} é ${y}`);





