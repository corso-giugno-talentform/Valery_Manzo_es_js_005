const h1 = document.querySelector ('#titolo-principale');
h1.innerText = 'Benvenuto nel mio sito';
const p = document.querySelector ('#descrizione');
p.innerText = 'Sito rinnovato con JavaScript';
const button = document.querySelector('button');
button.innerText = 'Inizia ora';


const spesa = ['Pane', 'Latte', 'Uova', 'Pasta', 'Pomodori'];
const ul = document.querySelector ('#spesa');
spesa.forEach(prodotto => {
    ul.innerHTML += `<li>${prodotto}</li>`;
});

