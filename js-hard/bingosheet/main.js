const numbers = [];

//最初にここらへんで数値のデータ作ってから表示するようにしないと中でかぶり判断するのだるい

const table = document.getElementById('view');
const createTable = function(){
    for( let i = 0 ; i < 6 ; i++){
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for( let j = 0 ; j < 5 ; j++ ){
            let td = document.createElement('td');
            tr.appendChild(td);
            if( i === 0){
                switch ( j ){
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
                switch ( j ){
                    case 0:{
                        createNum(j,td);
                        break;
                    }
                    case 1:{
                        createNum(j,td);
                        break;
                    }
                    case 2:{
                        if( i === 3 ){
                            td.textContent = 'free';
                            break;
                        } else {
                            createNum(j,td);
                            break;
                        }
                    }
                    case 3:{
                        createNum(j,td);
                        break;
                    }
                    case 4:{
                        createNum(j,td);
                        break;
                    }
                }
            }
        }
    }
}

const createNum = function(j,td){
    let number = Math.floor(Math.random() * 15 + j * 15 + 1 );
    if( !numbers.includes(number)){
        numbers.push(number);
        td.textContent = number;
    }
};

createTable();

console.log(numbers);