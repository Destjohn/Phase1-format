const setBtn = function() {
    const hoge = Math.random() * 10;
    console.log(hoge);
    if( hoge < 5 ){
        alert("ぺっぺっぺー");
    }else{
        alert("斎藤さんだぞ？");
    }
};

const word1 = "斎藤さんだぞ？"
const word2 = "ぺっぺっぺー"

const setBtn2 = function() {
    const foge = Math.random() *10;
    if( foge < 5 ){
        const result = window.confirm(word1);
        if (result){
            alert(word1);
        }else{
            alert(word2);
        }
    }else{
        const result = window.confirm(word2);
        if (result){
            alert(word1);
        }else{
            alert(word2);
        }
    }
}