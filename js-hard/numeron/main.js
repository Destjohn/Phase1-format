const enemyNum = new Array(3);
function generateNum(){
    enemyNum[0] = Math.floor(Math.random() * 10);
    do {
        enemyNum[1] = Math.floor(Math.random() * 10);
    } while ( enemyNum[0] === enemyNum[1] );
    do {
        enemyNum[2] = Math.floor(Math.random() * 10);
    } while ( enemyNum[0] === enemyNum[2] || enemyNum[1] === enemyNum[2] );
};

generateNum();
console.log(enemyNum);

const count = document.createElement('p');
const body = document.querySelector('body');
body.appendChild(count);
count.textContent = 'あと残り10回です';

let times = 10;

const numCheck = document.getElementById('numCheck');
numCheck.addEventListener('click',function(){
    const ansNum = document.getElementById('answerNum').value;
    if(ansNum.length != 3){
        alert('三桁の数字を入力してください');
        return;
    } else if (ansNum[0] === ansNum[1] || ansNum[0] === ansNum[2] || ansNum[1] === ansNum[2]){
        alert('重複した数字を使わないでください');
        return;
    }
    const ansNumArray = Array.from(ansNum).map(ele=>Number(ele));
    console.log(ansNumArray);
    let eat = 0;
    let bite = 0;
    for( i = 0 ; i < ansNum.length ; i++ ){
        for( j = 0 ; j < enemyNum.length ; j++ ){
            if( ansNumArray[i] === enemyNum[j] ){
                if( i === j ){
                    eat++;
                }else{
                    bite++;
                }
            }
        }
    }
    if( eat === 3 ){
        alert('正解です!!');
        location.reload();
    }else{
        alert(`${eat}EAT ${bite}BITE`);
        times--;
        count.textContent = `あと残り${times}回です`;
        if( times === 0 ){
            alert('DEFEAT');
            location.reload();
        }
    }
});