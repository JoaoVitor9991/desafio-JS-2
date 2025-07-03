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

console.log (lista[0])

for (let i = 0; i < lista.length ; i++){
   // console.log (lista [i] );
   document.write('<h1>' + lista[i] + '</h1>');
}
