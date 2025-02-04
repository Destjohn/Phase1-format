var nowTime = moment();
nowTime.format('YYYY-MM-DD HH:mm:ss');
console.log(nowTime);

var goalTime = moment('2112-09-03 00:00:00');
goalTime.format('YYYY-MM-DD HH:mm:ss');
console.log(goalTime);

const timer = document.createElement('p');
timer.innerHTML = `ドラえもんが生まれるまであと${goalTime.diff(nowTime,'d')}日${goalTime.diff(nowTime,'h')}時間${goalTime.diff(nowTime,'m')}分${goalTime.diff(nowTime,'s')}秒`;
console.log(`ドラえもんが生まれるまであと${goalTime.diff(nowTime,'d')}日${goalTime.diff(nowTime,'h')}時間${goalTime.diff(nowTime,'m')}分${goalTime.diff(nowTime,'s')}秒`);