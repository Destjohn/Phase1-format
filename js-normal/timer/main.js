const startBtn = document.getElementById('startTimer');
const setTime = document.getElementById('setTime');
const stopBtn = document.getElementById('stopTimer');
const nowTime = document.getElementById('nowTime');

let timer;
let sec = 10;

setTime.addEventListener('click',function(){
    sec = document.getElementById('inputTime').Value;
    nowTime.textContent = `${sec}：セット完了です`;
});

startBtn.addEventListener('click', function(){
    clearInterval(timer);
    timer = setInterval('countDown()',1000);
});

const countDown = function() {
    sec -= 1;
    nowTime.textContent = sec;
    console.log(sec);
    if( sec === 0) {
        alert('終了');
        clearInterval(timer);
    }
};

stopBtn.addEventListener('click', function(){
    clearInterval(timer);
    nowTime.textContent = `残り${sec}秒：ストップしました`;
});

//undefinedになる