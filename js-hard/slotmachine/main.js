//真ん中
const number = document.getElementById('nowTime');
let x = 0;
number.textContent = x;
const number2 = document.getElementById('nowTime2');
let y = 0;
number2.textContent = y;
const number3 = document.getElementById('nowTime3');
let z = 0;
number3.textContent = z;

//上段
const number4 = document.getElementById('nowTime4');
let a = 9;
number4.textContent = a;
const number5 = document.getElementById('nowTime5');
let b = 9;
number5.textContent = b;
const number6 = document.getElementById('nowTime6');
let c = 9;
number6.textContent = c;

//下段
const number7 = document.getElementById('nowTime7');
let d = 1;
number7.textContent = d;
const number8 = document.getElementById('nowTime8');
let e = 1;
number8.textContent = e;
const number9 = document.getElementById('nowTime9');
let f = 1;
number9.textContent = f;

let random,random2,random3;
let restButton = 3;

const startBtn = document.getElementById('startTimer');
startBtn.addEventListener('click',function(){
    stopBtn.disabled = false;
    stopBtn2.disabled = false;
    stopBtn3.disabled = false;
    clearInterval(random);
    clearInterval(random2);
    clearInterval(random3);
    restButton = 3;
    random = setInterval(function(){
        x = x+1;
        a = a+1;
        d = d+1;
        if ( x === 10 ){
            x = 0;
        }
        if ( a === 10 ){
            a = 0;
        }
        if ( d === 10 ){
            d = 0;
        }
        number.textContent = x;
        number4.textContent = a;
        number7.textContent = d;
    },100);
    random2 = setInterval(function(){
        y = y+1;
        b = b+1;
        e = e+1;
        if ( y === 10 ){
            y = 0;
        }
        if ( b === 10 ){
            b = 0;
        }
        if ( e === 10 ){
            e = 0;
        }
        number2.textContent = y;
        number5.textContent = b;
        number8.textContent = e;
    },100);
    random3 = setInterval(function(){
        z = z+1;
        c = c+1;
        f = f+1;
        if ( z === 10 ){
            z = 0;
        }
        if ( c === 10 ){
            c = 0;
        }
        if ( f === 10 ){
            f = 0;
        }
        number3.textContent = z;
        number6.textContent = c;
        number9.textContent = f;
    },100);
});

const stopBtn = document.getElementById('setTime1')
stopBtn.addEventListener('click',function(){
    stopBtn.setAttribute('disabled','true');
    clearInterval(random);
    restButton -= 1;
    if ( restButton === 0 ){
        if( x === y && x === z || a === b && a === c || d === e && d === f ){
            alert('おめでとう');
        }else {
            alert('再挑戦');
        };
    };
});

const stopBtn2 = document.getElementById('setTime2');
stopBtn2.addEventListener('click',function(){
    stopBtn2.setAttribute('disabled','true');
    clearInterval(random2);
    restButton -= 1;
    if ( restButton === 0 ){
        if( x === y && x === z || a === b && a === c || d === e && d === f ){
            alert('おめでとう');
        }else {
            alert('再挑戦');
        };
    };
});

const stopBtn3 = document.getElementById('setTime3');
stopBtn3.addEventListener('click',function(){
    stopBtn3.setAttribute('disabled','true');
    clearInterval(random3);
    restButton -= 1;
    if ( restButton === 0 ){
        if( x === y && x === z || a === b && a === c || d === e && d === f ){
            alert('おめでとう');
        }else {
            alert('再挑戦');
        };
    };
});



//スタートボタンで三つの数字が0からスタートして１ずつ上がっていくようにする
//その数字を記憶しておく
//ストップでそれぞれの順番に対応した数字が止まる
//すべての数字が違う場合はアラートで再挑戦と表示、揃った場合はアラートおめでとう
//スタートですべての動作がリセット
//数字を読み取り一致しているか