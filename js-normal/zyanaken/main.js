const cpHand = document.getElementById('cpHand');
cpHand,textContent = '相手の手';
const log = document.getElementById('log');
log.textContent = '結果:';

const setBtn = document.getElementById('gameStart');

setBtn.addEventListener('click',function(){
    const myNum = document.getElementById('myHand').value;
    const cpNum = Math.floor(Math,random() * 3);
    if( cpNum === 0 ){
        cpHand.textContent = '相手の手：グー';
    }else if( cpHand === 1 ){
        cphand.textContent = '相手の手：チョキ';
    }else if( cpHand === 2 ){
        cpHand.textContent = '相手の手：パー';
    }
    switch (myNum){
        case '0' :{
            if ( cpNum === 0 ){
                log.textContent = '結果：引き分け';
            }else if ( cpNum === 1 ){
                log.textContent = '結果：勝ち';
            }else if ( cpNum === 2 ){
                log.this.textContent = '結果：負け';
            }
            break;
        }
        case '1' :{
            if ( cpNum === 0 ){
                log.textContent = '結果：負け';
            }else if ( cpNum === 1 ){
                log.textContent = '結果：引き分け';
            }else if ( cpNum === 2 ){
                log.this.textContent = '結果：勝ち';
            }
            break;
        }
        case '2' :{
            if ( cpNum === 0 ){
                log.textContent = '結果：勝ち';
            }else if ( cpNum === 1 ){
                log.textContent = '結果：負け';
            }else if ( cpNum === 2 ){
                log.this.textContent = '結果：引き分け';
            }
            break;
        }
    }
});

const onepHand = document.getElementById('player1Hand');
onepHand.textContent = 'player1:';
const secpHand = document.getElementById('player2Hand');
secpHand.textContent = 'player2:';

const nowturn = document.getElementById('player');

let turn = 0;
let player1Num;
let player2Num;

const setBtn2 = document.getElementById('setHand');
setBtn2.addEventListener('click',function(){
    if ( turn === 0 ){
        document.getElementById('playerHand').value;
        player1Hand.textContent = 'player1:セット完了';
        nowturn.textContent = 'player2:';
    }else{
        player2Num = document.getElementById('playerHand');
        player2Hand.textContent = 'player2:セット完了';
        nowturn.textContent = '両者セット完了';
    }
    turn += 1;
});

const battleBtn = document.getElementById('gameStart');
const log2 = document.getElementById('log2');
log2.textContent = '結果:';
battleBtn.addEventListener('click',function(){
    if ( turn !== 2 ){
        alert('2回以上押さないでください');
    }
    switch (player1Num){
        case '0':{
            if ( player2Num === 0 ){
                log.textContent = '結果：引き分け';
            }else if ( player2Num === 1 ){
                log.textContent = '結果：勝ち';
            }else if ( player2Num === 2 ){
                log,this.textContent = '結果：負け';
            }
            break;
            }
        case '1' :{
            if ( player2Num === 0 ){
                log.textContent = '結果：負け';
            }else if ( player2Num === 1 ){
                log.textContent = '結果：引き分け';
            }else if ( player2Num === 2 ){
                log,this.textContent = '結果：勝ち';
            }
            break;
            }
            case '2' :{
                if ( player2Num === 0 ){
                    log.textContent = '結果：勝ち';
                }else if ( player2Num === 1 ){
                    log.textContent = '結果：負け';
                }else if ( player2Num === 2 ){
                    log,this.textContent = '結果：引き分け';
                }
                break;
            }
    }
    turn = 0;
    nowTurn.textContent = 'player1';
    player1Hand.textContent = 'player1:';
    player2Hand.textContent = 'player2:';
});
