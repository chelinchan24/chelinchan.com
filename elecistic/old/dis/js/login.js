var messageBox = document.getElementById("登入頁面-登入-訊息框");

document.getElementById("登入頁面-登入-底部-登入按鈕").onclick = function loginUser() {
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error)
  {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
	messageBox.style.display = "block"
    messageBox.innerHTML = "電子郵件或密碼錯誤。";
    } else {
    alert(errorMessage);
    }
    console.log(error);
    // ...
  });
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location = "./profile.html";
  }
});
