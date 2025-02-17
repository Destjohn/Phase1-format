const timer = document.createElement('p');
const body = document.querySelector('body');
body.appendChild(timer);

const goalTime = moment('2112-09-03 00:00:00');
console.log(goalTime);

const limit = function(){
    const nowTime = moment();
    const days = goalTime.diff(nowTime,'days');
    const hours = goalTime.diff(nowTime,'hour') % 24; 
    const minutes = goalTime.diff(nowTime,'minute') % 60;
    const seconds = goalTime.diff(nowTime,'second') % 60;
    //timer.innerHTML = `ドラえもんが生まれるまであと${days}日${hours}時間${minutes}分${seconds}秒`;
};

limit();

setInterval(limit,1000);

const diffTime = document.getElementById('diffTime');
const searchBtn = document.getElementById('dateSearch');
searchBtn.addEventListener('click',function(){
    limit2();
    setInterval(limit2,1000);
});

const limit2 = function(){
    var NowTime = moment();
    const value = document.getElementById('dateSet').value;
    const goalTime2 = moment(value);
    console.log(goalTime2.format("YYYY年MM月DD日"));
    const days2 = goalTime2.diff(NowTime,'days');
    const hours2 = goalTime2.diff(NowTime,'hour') % 24; 
    const minutes2 = goalTime2.diff(NowTime,'minute') % 60;
    const seconds2 = goalTime2.diff(NowTime,'second') % 60;
    diffTime.innerHTML = `${goalTime2.format("YYYY年MM月DD日")}まであと${days2}日${hours2}時間${minutes2}分${seconds2}秒`;
};



