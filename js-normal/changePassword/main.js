const Form = document.getElementsByTagName('form'); //これいるのか
const nowPassword = document.getElementById('nowPassword');
const setBtn = document.getElementById('setPassword');

let PasswordValue = 'aaaaa';
nowPassword.textContent = `現在のパスワードは${PasswordValue}`;

setBtn.addEventListener('click',function(){
    const confirmPass = document.getElementById('confirmPassword').value;
    const newPass = document.getElementById('newPassword').value;
    if (PasswordValue === confirmPass) {
        if (PasswordValue !== newPass) {
          if (8 <= newPassword.length) {
            PasswordValue = newPass;
            PasswordValue.textContent = PasswordValue;
            nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
            alert(`新しいパスワードは ${PasswordValue}です`);
          } else {
            alert('8文字以上にして下さい。');
          }
        } else {
          alert('同じパスワードはつかえません！');
        }
      } else {
        alert('古いパスワードが間違っています！');
      }
});

//追加１
//if (PasswordValue !== newPassword) {
//    let result = newPassword.match(/^\d{3}-?\d{4}$/g);　ここの意味
//    if (!result) {
//      alert('xxx-yyyyの形式で入力してください');
//    } else {
//      PasswordValue = newPassword;
//      PasswordValue.textContent = PasswordValue;
//     nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
//      alert(`新しいパスワードは ${PasswordValue}です`);
//    }
//  }

//追加２
//if (PasswordValue !== newPassword) {
//    const check = /(.)\1/;                  ここの意味
//    let result = check.test(newPassword);
//    if (!result) {
//      PasswordValue = newPassword;
//      PasswordValue.textContent = PasswordValue;
//      nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
//      alert(`新しいパスワードは ${PasswordValue}です`);
//    } else {
//     alert('同じ文字を連続で使うことは出来ません');
//    }
//  }

//追加３
//if (PasswordValue !== newPassword) {
//    const reserach = /abc/g;
//    let result = newPassword.search(reserach);　ここの意味
//    console.log(result);
//    if (result < 0) {
//      PasswordValue = newPassword;
//      PasswordValue.textContent = PasswordValue;
//      nowPassword.textContent = `現在のパスワードは ${PasswordValue}`;
//      alert(`新しいパスワードは ${PasswordValue}です`);
//    } else {
//      alert('「abc」を含むものは使えません');
//   }
//  }