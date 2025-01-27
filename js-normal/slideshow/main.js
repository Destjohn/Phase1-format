const data = [
    { img: './img/slide1.png', text: '春へ' },
    { img: './img/slide2.png', text: '夏へ' },
    { img: './img/slide3.png', text: '秋へ' },
    { img: './img/slide4.png', text: '冬へ' },
];

const pushBtn = document.getElementById("pushBtn");
const imgSection = document.getElementById('viewImg');
const skipBtn = document.getElementById('skipBtn');

let imgNum = 0;
pushBtn.textContent = data[imgNum].text;
imgSection.setAttribute('src', data[imgNum].img);

pushBtn.addEventListener("click",function () {
    if( imgNum === 3 ){
        imgNum = 0;
    }else {
        imgNum += 1;
    }
    pushBtn.textContent = data[imgNum].text;
    imgSection.setAttribute('src', data[imgNum].img);
});

skipBtn.addEventListener('click',function(){
    imgNum = document.getElementById('seasonNum').value;
    imgNum = parseInt(imgNum); //ここの意味
    imgSection.setAttribute('src',data[imgNum].img);
    pushBtn.textContent = data[imgNum].text;
});