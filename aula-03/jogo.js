function obterOpcaoUsuario() {
    let input = prompt('Selecione uma das opções: [1] Pedra | [2] Papel | [3] Tesoura');
    return parseInt(input, 10);
}

function obterOpcaoComputador() {
    return parseInt(Math.random() * 3 + 1, 10);
}

let usuario = obterOpcaoUsuario();
let computador = obterOpcaoComputador();

let possiveisResultados = {
    empate: "Empate 🎲",
    vitoria: "Vitória 😘",
    derrota: "Perdeu 😔",
}

let resultado = "Erro: inesperado.";

if(usuario === computador) { // Deu empate
    resultado = possiveisResultados.empate;
} else { // Não deu empate
    switch(usuario) {
        case 1: // Pedra
            resultado = computador === 2 ? 
                            possiveisResultados.derrota :
                            possiveisResultados.vitoria;
            break;
        case 2: // Papel
            if(computador === 3) { // Tesoura
                resultado = possiveisResultados.derrota;
            } else { // Pedra
                resultado = possiveisResultados.vitoria;
            }
            break;
        case 3: // Tesoura
            if(computador === 1) { // Pedra
                resultado = possiveisResultados.derrota;
            } else { // Papel
                resultado = possiveisResultados.vitoria;
            }
            break;
        default:
            resultado = "Erro: Opção invalida.";
    }

}


// if(usuario === 2) { // Papel
//     if(computador === 1) {
//         resultado = "Vitória 😘";
//     }
//     if(computador === 2) {
//         resultado = "Empate 🎲";
//     }
//     if(computador === 3) {
//         resultado = "Perdeu 😔";
//     }
// }

// if(usuario === 3) { // Tesoura
//     if(computador === 1) {
//         resultado = "Perdeu 😔";
//     }
//     if(computador === 2) {
//         resultado = "Vitória 😘";
//     }
//     if(computador === 3) {
//         resultado = "Empate 🎲";
//     }
// }

alert(resultado);
