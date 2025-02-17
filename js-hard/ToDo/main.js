const list = document.getElementById('todo');
const addBtn = document.getElementsByClassName('add-btn')[0];
addBtn.addEventListener('click',function(){
    const addArea = document.getElementById('add-area');
    if ( !addText.value.length ){
        alert('空欄です!');
        return;
    };
    const textValue = document.createTextNode(addArea.value);
    const listItem = document.createElement('li');
    listItem.appendChild(textValue);
    list.appendChild(listItem);
    const finishBtn = document.createElement('button');
    finishBtn.innerHTML = "完了";
    listItem.appendChild(finishBtn);
    finishBtn.addEventListener('click',function(){
        listItem.remove();
        //list.removeChild(listItem);
    });
    addArea.value = '';
});









