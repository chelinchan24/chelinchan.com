firebase.auth().onAuthStateChanged(function(user) {
  if (user) {

  var loginAndOutBtn = document.getElementById("發現者計劃導覽列本體-內容-登入")

    loginAndOutBtn.innerHTML = "登出";
  loginAndOutBtn.onclick = function () {
    firebase.auth().signOut();
  }
  
  document.getElementById("發現者計劃導覽列本體-選單-內容-僅限登入後").style.display = "block";
  document.getElementById("發現者計劃導覽列本體-選單-內容-選項-登入與登出").innerHTML = "登出";
  document.getElementById("發現者計劃導覽列本體-選單-內容-選項-登入與登出").style.marginTop = "-7px";
  }
});
