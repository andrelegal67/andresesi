let resultado = document.querySelector('#resultado')

function exibirNome(){
    alert(nome)
} 
function somar(){

    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    return resultado.innerHTML = valA + valB
}
function multiplicar(){
    let valC = Number(document.querySelector('#valorC').value)
    let valD = Number(document.querySelector('#valorD').value)
    return resultado.innerHTML = valC * valD
}
function dividir(){
    let valE = Number(document.querySelector('#valorE').value)
    let valF = Number(document.querySelector('#valorF').value)
    return resultado.innerHTML = valE / valF
}