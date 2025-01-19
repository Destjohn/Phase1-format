const evoBtn = document.getElementById('setBtn');
const resetBtn = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');

evoBtn.addEventListener('click',function(){
    showImg.innerHTML = '';
    const evo = Math.floor( Math.random() * 10 );
    const first = document.createElement('div');
    showImg.innerHTML = "<img src = './img/evolution1.png>";
    showImg.appendChild(first);
    const firstWord = document.createElement('p');
    firstWord.innerHTML = '原人';
    first.appendChild(firstWord);

    if( evo >= 4 ){
        const second = document.createElement('div');
        showImg.innerHTML = "<img src = './img/evolution2.png>";
        showImg.appendChild(second);
        const secondWord = document.createElement('p');
        secondWord.innerHTML = '旧人';
        second.appendChild(secondWord);
    }if ( evo >= 7 ){
        const third = document.createElement('div');
        showImg.innerHTML = "<img src = './img/evolution3.png>";
        showImg.appendChild(third);
        const thirdWord = document.createElement('p');
        thirdWord.innerHTML = '新人';
        third.appendChild(thirdWord);
    }if ( evo >= 9 ){
        const fourth = document.createElement('div');
        showImg.innerHTML = "<img src = './img/evolution4.png>";
        showImg.appendChild(fourth);
        const fourthWord = document.createElement('p');
        fourthWord.innerHTML = '現代人';
    };
});

resetBtn.addEventListener('click',function(){
    showImg.innerHTML = '';
});