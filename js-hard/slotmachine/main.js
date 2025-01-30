const number = document.getElementById('nowTime');
x = 0;
number.textContent = x;
const number2 = document.getElementById('nowTime2');
y = 0;
number2.textContent = y;
const number3 = document.getElementById('nowTime3');
z = 0;
number3.textContent = z;

const startBtn = document.getElementById('startTimer');
startBtn.addEventListener('click',function(){
    stopBtn.disabled = false;
    stopBtn2.disabled = false;
    stopBtn3.disabled = false;
    clearInterval(random);
    clearInterval(random2);
    clearInterval(random3);
    let random = setInterval(function(){
        
        number.textContent = x;
    },100);
    let random2 = setInterval(function(){
        
        number2.textContent = y;
    },100);
    let random3 = setInterval(function(){
        
        number3.textContent = z;
    },100);
});

const stopBtn = document.getElementById('setTime1');
stopBtn.addEventListener('click',function(){
    stopBtn.setAttribute('disabled','true');
    clearInterval(random);
});

const stopBtn2 = document.getElementById('setTime2');
stopBtn2.addEventListener('click',function(){
    stopBtn2.setAttribute('disabled','true');
    clearInterval(random2);
});

const stopBtn3 = document.getElementById('setTime3');
stopBtn3.addEventListener('click',function(){
    stopBtn3.setAttribute('disabled','true');
    clearInterval(random3);
});




//スタートボタンで三つの数字が0からスタートして１ずつ上がっていくようにする
//その数字を記憶しておく
//ストップでそれぞれの順番に対応した数字が止まる
//すべての数字が違う場合はアラートで再挑戦と表示、揃った場合はアラートおめでとう
//スタートですべての動作がリセッ
//数字を読み取り一致しているか