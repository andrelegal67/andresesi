let nome = document.querySelector('#nome')
let sobrenomenome = document.querySelector('#sobrenome')
let profissão = document.querySelector('#profissão')
let idade = document.querySelector('#idade')


function exibirNome(){
    alert(nome)
} 
function nome(){
    let nome = nome(document.querySelector('nome'))
    return nome.innerHTML = nome
}

function sobrenome(){
    let nome = nome(document.querySelector('sobrenome'))
    return nome.innerHTML = sobrenome
}


function idade(){

    let idade = Number(document.querySelector('#idade').value)
    return resultado.innerHTML = idade
}
