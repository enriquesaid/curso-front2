let input = prompt('Escolha uma das opções: [1] Pedra | [2] Papel | [3] Tesoura ');
let usuario = parseInt(input, 10);
let computador = parseInt(Math.random() * 3 + 1, 10);

console.log('Usuário', usuario);
console.log('Computador', computador);

let possiveisResultados = {
    'empate': "Empate 😑"
}

let resultado = "Não foi possível encontrar um resultado."

if(usuario === 1) {
    if(computador == 1) {
        resultado = possiveisResultados['empate'];
    }
    if(computador == 2) {
        resultado = "Perdeu 😔";
    }
    if(computador == 3) {
        resultado = "Venceu 😘";
    }
}

if(usuario === 2) {
    if(computador == 1) {
        resultado = "Venceu 😘";
    }
    if(computador == 2) {
        resultado = "Empate 😑";
    }
    if(computador == 3) {
        resultado = "Perdeu 😔";
    }
}

if(usuario === 3) {
    if(computador == 1) {
        resultado = "Perdeu 😔";
    }
    if(computador == 2) {
        resultado = "Venceu 😘";
    }
    if(computador == 3) {
        resultado = "Empate 😑";
    }
}

alert(resultado);

