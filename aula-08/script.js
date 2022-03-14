const form = document.querySelector('#tweet-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const campo = document.querySelector('textarea');
    const texto = document.createTextNode(campo.value);
    const lista = document.querySelector('ul');
    const item = document.createElement('li');

    item.appendChild(texto);
    lista.appendChild(item);
});

// const btn = document.querySelector('.btn-form');

// btn.addEventListener('mouseover', function() {
//     console.log('É mouseover');
// });

// btn.addEventListener('mouseout', function() {
//     console.log('É mouseout');
// });