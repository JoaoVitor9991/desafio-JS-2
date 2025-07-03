let lista = ['Maça', 'Banana', 'Mamão', 'Laranja', 'Uva', 'Monster', 'Limão', 'Pinga', 'Detergente', 'Essência']

console.log(lista.length)

//let nome = prompt("Digite seu nome");

let nome = "João Vitor Machado Oliveira"

//console.log("Qntd de caracteres? " +nome.length)

if(nome.length > 25){
    console.log("nome grande")
} else {
    console.log("Nome pequeno")
}

window.onload = function() {
    const lista = ['Maça', 'Banana', 'Mamão', 'Laranja', 'Uva', 'Monster', 'Limão', 'Pinga', 'Detergente', 'Essência'];
    const divTextos = document.getElementById('textos');

    let htmlConteudo = '';

    lista.forEach(item => {
        htmlConteudo += `<h1>${item}</h1>`;
    });

    divTextos.innerHTML = htmlConteudo;
};

