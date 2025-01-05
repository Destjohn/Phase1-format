for(let i = 1 ; i < 21 ; i++){
    if( i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }else if( i % 3 === 0){
        console.log("Fizz");
    }else if( i % 5 === 0){
        console.log("Buzz"); 
    }else{
        console.log(i);
    }
}

let v = 0;
const rewriteNum = document.getElementById('rewriteNum');
rewriteNum.textContent = v;
const rewriteCntUp = function(){
    v += 1;
    if( v % 3 === 0 && v % 5 === 0){
        rewriteNum.textContent = "FizzBuzz";
    } else if( v % 3 === 0){
        rewriteNum.textContent = "Fizz";
    } else if( v % 5 === 0){
        rewriteNum.textContent = "Buzz"; 
    } else{
        rewriteNum.textContent = v;
    }
}