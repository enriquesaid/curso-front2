let titulo = document.querySelector('h1');
let usuario = "@anitta";

titulo.innerText += `: ${usuario}`;

setTimeout(function() {
    document.querySelector('.story').style.display = 'none';
    titulo.innerText = "Acabou 😔";
}, 5000);