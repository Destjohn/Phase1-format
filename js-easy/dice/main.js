const startBtn = document.getElementById('disebtn');
const body = document.querySelector('body');
const dise = document.createElement('img');
dise.style.width = '100px';
dise.style.height = '100px';

let diseNum = './img/saikoro1.png';
dise.setAttribute('src',diseNum);
body.appendChild(dise);

const random = function(){
    diseNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
    dise.setAttribute('src', diseNum);
};

startBtn.addEventListener('click', function() {
    let timer = setInterval('random()',100);
    setTimeout(function() {
    crearInterval(timer);
    },3000);
});

//なぜかエラーがでる