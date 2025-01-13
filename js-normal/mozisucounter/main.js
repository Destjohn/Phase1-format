const resetBtn = document.getElementById('resetBtn');
const countNum = document.getElementById('textCounter');
const input = document.getElementById('sampleForm');
const goalNum = 400;
countNum.textContent = `あと ${goalNum - input.value.length} 文字`;

input.addEventListener('keyup',function(){
    countNum.textContent = `あと ${goalNum - input.value.length} 文字`;
});

resetBtn.addEventListener('click',function(){
    countNum.textContent = `あと ${goalNum} 文字`;
});