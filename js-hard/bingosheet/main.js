const numbers = [];

//最初にここらへんで数値のデータ作ってから表示するようにしないと中でかぶり判断するのが大変

const table = document.getElementById('view');

const createNum = function(columIndex,td){
    let number = Math.floor(Math.random() * 15 + columIndex * 15 + 1 );
    if( !numbers.includes(number)){
        numbers.push(number);
        td.textContent = number;
    } else {
        createNum(columIndex,td);
    }
};

const createTable = function(){
    for( let row = 0 ; row < 6 ; row++){
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for( let colum = 0 ; colum < 5 ; colum++ ){
            let td = document.createElement('td');
            tr.appendChild(td);
            if( row === 0 ){
                switch ( colum ){
                    case 0:{
                        td.textContent = 'B';
                        break;
                    }
                    case 1:{
                        td.textContent = 'I';
                        break;
                    }
                    case 2:{
                        td.textContent = 'N';
                        break;
                    }
                    case 3:{
                        td.textContent = 'G';
                        break;
                    }
                    case 4:{
                        td.textContent = 'O';
                        break;
                    }
                }
            }else{
                switch ( colum ){
                    case 0:{
                        createNum(colum,td);
                        break;
                    }
                    case 1:{
                        createNum(colum,td);
                        break;
                    }
                    case 2:{
                        if( row === 3 ){
                            td.textContent = 'free';
                            td.setAttribute('class','hit-num');
                            break;
                        } else {
                            createNum(colum,td);
                            break;
                        }
                    }
                    case 3:{
                        createNum(colum,td);
                        break;
                    }
                    case 4:{
                        createNum(colum,td);
                        break;
                    }
                }
            }
        }
    }
}

const hitNumbers = [];
const setBtn = document.getElementById('hitNum');
setBtn.addEventListener('click',function(){
    let hitNum = Math.floor(Math.random() * 75 + 1);
    if( !hitNumbers.includes(hitNum)){
        hitNumbers.push(hitNum);
        alert(`数字は${hitNum}番です！`);
        const tds = Array.from(document.getElementsByTagName('td'));
                    //配列のようなものを配列にする
        console.log(tds);
                                    //数値にする
        let result = tds.find((td) => Number(td.textContent) === hitNum);
        if( result ){
            result.setAttribute('class','hit-num');
            console.log(result);
        }
    }
})

createTable();