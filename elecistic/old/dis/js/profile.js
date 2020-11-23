var loginUser = firebase.auth().currentUser;
window.onload = function() {
firebase.auth().onAuthStateChanged(function(user) {
if (user) {
  // User is signed in.
  console.log('有登入');
  firebase.database().ref('/userInfo/' + firebase.auth().currentUser.uid).once('value').then(function(snapshot) {
    document.getElementById("發現者個人頁面-左半部-個人檔案-資訊-用戶名稱").innerHTML = snapshot.val().name;
  document.getElementById("發現者個人頁面-左半部-個人檔案-照片").style.backgroundImage = 'url('+snapshot.val().profile_pic+')';
  });
  } else {
    // No user is signed in.
  console.log('沒登入');
  // window.location = "./login.html"; // 沒有登入就轉到登入頁面
  }
})};
