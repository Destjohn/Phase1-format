const table = document.getElementById('view');
const numbers = [];
const createTable = function(){
    for( let i = 0 ; i < 6 ; i++){
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for( let j = 0 ; j < 5 ; j++ ){
            let td = document.createElement('td');
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
                        let number = Math.floor(Math.random() * 15);
                        numbers,push(number);
                        tr.textContent = number;
                        break;
                    }
                    case 1:{
                    }
                    case 2:{
                    }
                    case 3:{
                    }
                    case 4:{
                    }
                }
            }
        }
    }
}

const createNum = function(){
    let number = Math.floor(Math.random() * 15);
    if( !numbers.includes(number)){
        numbers.push(number);
        tr.textContent = number;
    }
}

createTable();