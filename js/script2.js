let lista = ['Maça', 'Banana', 'Mamão', 'Laranja', 'Uva', 'Monster', 'Limão', 'Pinga', 'Carvão', 'Essência']

console.log(lista.length)

//let nome = prompt("Digite seu nome");

let nome = "João Vitor Machado Oliveira"

//console.log("Qntd de caracteres? " +nome.length)


console.log (lista[0])

let conteudo = '';
let div = document.getElementById("textos");



for (let i = 0; i < lista.length ; i++){
    conteudo += '<h1>'+lista[i]+'</h1> <br>';
}

div.innerHTML = conteudo;

console.log(conteudo);