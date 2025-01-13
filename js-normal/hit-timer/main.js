const startBtn = document.getElementById("startTimer");
const confirmBtn = document.getElementById("confirmTime");

let count = 0;
let timer;

const countUp = function(){
    count++;
    if( count === 40){
        clearInterval(timer);
        alert("終了/また挑戦しろ");
        count = 0;
    }
};

startBtn.addEventListener("click",function(){
    clearInterval(timer);
    timer = setInterval(countUp,1000);
});

confirmBtn.addEventListener("click",function(){
    if(count < 20 ){
        alert(`まだ${count}秒、、、再スタートだ`);
    }else if(count === 20){
        alert("大正解");
    }else{
        alert(`もう${count}秒だ！再挑戦せよ`);
    };
    clearInterval(timer);
    count = 0;
});


const startBtn2 = document.getElementById("startTimer2");
const confirmBtn2 = document.getElementById("confirmTime2");

let timer2;
let startTime;
let nowTime;
let diffTime;

confirmTime2.addEventListener("click", function () {
    nowTime = new Date();
    if (startTime === undefined) {
      return;
    }
    if (diffTime === 20) {
        alert("大正解^-^");
      } else if (diffTime < 20) {
        alert(`まだ${diffTime}秒、、、再スタートだ`);
      } else {
        alert(`もう${diffTime}秒だ！再挑戦せよ`);
      }
      clearInterval(timer2);
});

const countUp2 = function () {
    let checkTime = new Date();
    diffTime = Math.floor((checkTime.getTime() - startTime.getTime()) / 1000);
    if (diffTime === 40) { //ここのかっこ内どうなってるのか//
      alert("終了/また挑戦しろ");
    }
};

startBtn2.addEventListener("click", function () {
    startTime = new Date();
    timer = setInterval(countUp2, 1000);
});
