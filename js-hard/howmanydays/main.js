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