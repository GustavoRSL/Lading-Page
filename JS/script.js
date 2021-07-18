import Countdown from "./countdown.js";

const tempoParaPromocao = new Countdown("24 July 2021 23:59:59 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");
console.log(tempoParaPromocao.total);

function mostrarTempo() {
    tempos.forEach((tempo,index) => {
    tempo.innerHTML = tempoParaPromocao.total[index];
});
}

mostrarTempo();
setInterval(mostrarTempo, 1000);


const form = document.getElementById('form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem('lead',convertData);

    let content = document.getElementById('card');
    let loading = '<img src="../assets/Loading.gif" alt="Loading" width="100px" height="100px">'
    let pronto = '<p style="font-size:100px"> Parabéns! </p>'
    content.innerHTML = loading;

    setTimeout(() => {
        content.innerHTML = pronto;
    },1000)
})

function validaCampos() {

}