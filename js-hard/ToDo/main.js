const list = document.getElementById('todo');
const addBtn = document.getElementsByClassName('add-btn')[0];
addBtn.addEventListener('click',function(){
    const addtext = document.getElementById('add-area');
    if ( !addtext.length ){
        alert('空欄です!');
        return;
    };
    const textvalue = document.createTextNode(addtext.value);
    const listItem = document.createElement('li');
    listItem.appendChild(textvalue);
    list.appendChild(listItem);
    const finishBtn = document.createElement('button');
    finishBtn.innerHTML = "完了";
    listItem.appendChild(finishBtn);
    finishBtn.addEventListener('click',function(){
        listItem.remove();
        //list.removeChild(listItem);
    });
    addtext.value = '';
});









