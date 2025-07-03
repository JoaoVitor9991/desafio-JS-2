let dicionario = {
    "chave" : "valor",
    "nome" : "João Vitor",
    "idade" : "25",
    "email" : "jaja@gmail.com"
}

let pessoa = {
    "nome" : "João Vitor",
    "fone" : "67 99999-9999",
    "cidade" : "Campo Grande"
}


let texto = document.getElementById("textos");
texto.innerHTML = dicionario.email

console.log(dicionario.email)
console.log(dicionario.nome)
console.log(dicionario.fone)
console.log(dicionario.cidade)