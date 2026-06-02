function exibirNome(){
    let nome = document.querySelector('#nome').value
    alert(nome)
} 

function somar(){
    let valA = Number(document.querySelector('#valorA').value)
    let valB = Number(document.querySelector('#valorB').value)
    alert(valA + valB)
}
function multiplicar(){
    let valC = Number(document.querySelector('#valorC').value)
    let valD = Number(document.querySelector('#valorD').value)
    alert(valC * valD)
}
function dividir(){
    let valE = Number(document.querySelector('#valorE').value)
    let valF = Number(document.querySelector('#valorF').value)
    alert(valE / valF)
}