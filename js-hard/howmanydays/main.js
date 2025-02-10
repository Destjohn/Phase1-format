const timer = document.createElement('p');
const body = document.querySelector('body');
body.appendChild(timer);

var goalTime = moment('2112-09-03 00:00:00');

const limit = function(){
    var nowTime = moment();
    const days = goalTime.diff(nowTime,'days');
    const hours = goalTime.diff(nowTime,'hour') % 24; 
    const minutes = goalTime.diff(nowTime,'minute') % 60;
    const seconds = goalTime.diff(nowTime,'second') % 60;
    timer.innerHTML = `ドラえもんが生まれるまであと${days}日${hours}時間${minutes}分${seconds}秒`;
};

limit();

setInterval(limit,1000);

const diffTime = document.getElementById('diffTime');
const serchBtn = document.getElementById('dateSerch');
serchBtn.addEventListener('click',function(){
    limit2();
    setInterval(limit2,1000);
})

const limit2 = function(){
    var NowTime = moment();
    const goalTime2 = getElementById('dateSet').value;
    const days2 = goalTime2.diff(NowTime,'days');
    const hours2 = goalTime2.diff(NowTime,'hour') % 24; 
    const minutes2 = goalTime2.diff(NowTime,'minute') % 60;
    const seconds2 = goalTime2.diff(NowTime,'second') % 60;
    diffTime.innerHTML = `${goalTime2}まであと${days2}日${hours2}時間${minutes2}分${seconds2}秒`;
};



