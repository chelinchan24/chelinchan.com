today = new Date();

hours = today.getHours();

if (hours < 3) //00:00 ~ 03:00
{
  document.getElementById('推薦合輯問候語').textContent = "夜深了，不妨來聽著喜歡的專輯入睡吧？"
}
else if (hours > 3 && hours < 6) //03:00 ~ 06:00
{
  document.getElementById('推薦合輯問候語').textContent = "睡不著嗎？挑首喜歡的音樂作伴吧！"
}
else if (hours > 6 && hours < 11) //06:00 ~ 11:00
{
  document.getElementById('推薦合輯問候語').textContent = "早安！美好的一天，不能沒有五月天！"
}
else if (hours > 11 && hours < 15) //11:00 ~ 15:00
{
  document.getElementById('推薦合輯問候語').textContent = "午安，來聽首音樂吧！"
}
else if (hours > 15 && hours < 18) //15:00 ~ 18:00
{
  document.getElementById('推薦合輯問候語').textContent = "下午茶時間到！"
}
else if (hours > 18 && hours < 22) //18:00 ~ 22:00
{
  document.getElementById('推薦合輯問候語').textContent = "來聽些音樂，舒緩今天的疲勞吧 :)"
}
else //22:00 ~ 00:00
{
  document.getElementById('推薦合輯問候語').textContent = "睡前來首五月天如何？"
}

// 推薦合集
var recommendPlaylistButton1 = document.getElementById('推薦合輯button1');
var recommendPlaylistNameDiv1 = document.getElementById('推薦合輯名稱div1');
var recommendPlaylistInfoDiv1 = document.getElementById('推薦合輯資訊div1');

var recommendPlaylistButton2 = document.getElementById('推薦合輯button2');
var recommendPlaylistNameDiv2 = document.getElementById('推薦合輯名稱div2');
var recommendPlaylistInfoDiv2 = document.getElementById('推薦合輯資訊div2');

var recommendPlaylistButton3 = document.getElementById('推薦合輯button3');
var recommendPlaylistNameDiv3 = document.getElementById('推薦合輯名稱div3');
var recommendPlaylistInfoDiv3 = document.getElementById('推薦合輯資訊div3');

var recommendPlaylistButton4 = document.getElementById('推薦合輯button4');
var recommendPlaylistNameDiv4 = document.getElementById('推薦合輯名稱div4');
var recommendPlaylistInfoDiv4 = document.getElementById('推薦合輯資訊div4');

// 你可能會喜歡
var likeButton1 = document.getElementById('你可能會喜歡button1');
var likeNameDiv1 = document.getElementById('你可能會喜歡名稱div1');
var likeInfoDiv1 = document.getElementById('你可能會喜歡資訊div1');

var likeButton2 = document.getElementById('你可能會喜歡button2');
var likeNameDiv2 = document.getElementById('你可能會喜歡名稱div2');
var likeInfoDiv2 = document.getElementById('你可能會喜歡資訊div2');

var likeButton3 = document.getElementById('你可能會喜歡button3');
var likeNameDiv3 = document.getElementById('你可能會喜歡名稱div3');
var likeInfoDiv3 = document.getElementById('你可能會喜歡資訊div3');

var likeButton4 = document.getElementById('你可能會喜歡button4');
var likeNameDiv4 = document.getElementById('你可能會喜歡名稱div4');
var likeInfoDiv4 = document.getElementById('你可能會喜歡資訊div4');

// 最新加入
var newButton1 = document.getElementById('最新加入button1');
var newNameDiv1 = document.getElementById('最新加入名稱div1');
var newInfoDiv1 = document.getElementById('最新加入資訊div1');

var newButton2 = document.getElementById('最新加入button2');
var newNameDiv2 = document.getElementById('最新加入名稱div2');
var newInfoDiv2 = document.getElementById('最新加入資訊div2');

var newButton3 = document.getElementById('最新加入button3');
var newNameDiv3 = document.getElementById('最新加入名稱div3');
var newInfoDiv3 = document.getElementById('最新加入資訊div3');

var newButton4 = document.getElementById('最新加入button4');
var newNameDiv4 = document.getElementById('最新加入名稱div4');
var newInfoDiv4 = document.getElementById('最新加入資訊div4');

// 推薦專輯
var recommendAlbumButton1 = document.getElementById('推薦專輯button1');
var recommendAlbumNameDiv1 = document.getElementById('推薦專輯名稱div1');
var recommendAlbumInfoDiv1 = document.getElementById('推薦專輯資訊div1');

var recommendAlbumButton2 = document.getElementById('推薦專輯button2');
var recommendAlbumNameDiv2 = document.getElementById('推薦專輯名稱div2');
var recommendAlbumInfoDiv2 = document.getElementById('推薦專輯資訊div2');

var recommendAlbumButton3 = document.getElementById('推薦專輯button3');
var recommendAlbumNameDiv3 = document.getElementById('推薦專輯名稱div3');
var recommendAlbumInfoDiv3 = document.getElementById('推薦專輯資訊div3');

var recommendAlbumButton4 = document.getElementById('推薦專輯button4');
var recommendAlbumNameDiv4 = document.getElementById('推薦專輯名稱div4');
var recommendAlbumInfoDiv4 = document.getElementById('推薦專輯資訊div4');

// 推薦單曲
var recommendSingleButton1 = document.getElementById('推薦單曲button1');
var recommendSingleNameDiv1 = document.getElementById('推薦單曲名稱div1');
var recommendSingleInfoDiv1 = document.getElementById('推薦單曲資訊div1');

var recommendSingleButton2 = document.getElementById('推薦單曲button2');
var recommendSingleNameDiv2 = document.getElementById('推薦單曲名稱div2');
var recommendSingleInfoDiv2 = document.getElementById('推薦單曲資訊div2');

var recommendSingleButton3 = document.getElementById('推薦單曲button3');
var recommendSingleNameDiv3 = document.getElementById('推薦單曲名稱div3');
var recommendSingleInfoDiv3 = document.getElementById('推薦單曲資訊div3');

var recommendSingleButton4 = document.getElementById('推薦單曲button4');
var recommendSingleNameDiv4 = document.getElementById('推薦單曲名稱div4');
var recommendSingleInfoDiv4 = document.getElementById('推薦單曲資訊div4');

var request = new XMLHttpRequest();
request.open('GET', './content/瀏覽.json');
request.responseType = 'json';
request.send();

request.onload = function()
{
  var data = request.response;

  var New = data['new'];
  loadData(New[0].albumSource, newButton1, newNameDiv1, newInfoDiv1);
  loadData(New[1].albumSource, newButton2, newNameDiv2, newInfoDiv2);
  loadData(New[2].albumSource, newButton3, newNameDiv3, newInfoDiv3);
  loadData(New[3].albumSource, newButton4, newNameDiv4, newInfoDiv4);

  var recommendPlaylist = data['recommendPlaylist'];
  loadDataPlaylist(recommendPlaylist[0].albumSource, recommendPlaylistButton1, recommendPlaylistNameDiv1, recommendPlaylistInfoDiv1);
  loadDataPlaylist(recommendPlaylist[1].albumSource, recommendPlaylistButton2, recommendPlaylistNameDiv2, recommendPlaylistInfoDiv2);
  loadDataPlaylist(recommendPlaylist[2].albumSource, recommendPlaylistButton3, recommendPlaylistNameDiv3, recommendPlaylistInfoDiv3);
  loadDataPlaylist(recommendPlaylist[3].albumSource, recommendPlaylistButton4, recommendPlaylistNameDiv4, recommendPlaylistInfoDiv4);
}

loadAlbumData();

// json資料, 按鈕, 名稱, 資訊
function loadData(data, button, name, info)
{
  button.value = data;

  var request1 = new XMLHttpRequest();
  request1.open('GET', data);
  request1.responseType = 'json';
  request1.send();

  request1.onload = function()
  {
    var data1 = request1.response;

    button.style["background-image"] = "url('" + data1.AlbumCoverSource + "')";
    name.textContent = data1.AlbumTitle;
    info.textContent = data1.type + "・" + data1.year;
  }
}

function loadDataPlaylist(data, button, name, info)
{
  button.value = data;

  var request1 = new XMLHttpRequest();
  request1.open('GET', data);
  request1.responseType = 'json';
  request1.send();

  request1.onload = function()
  {
    var data1 = request1.response;

    button.style["background-image"] = "url('" + data1.AlbumCoverSource + "')";
    name.textContent = data1.title;
    info.textContent = data1.description;
  }
}

function loadAlbumData()
{
  var request1 = new XMLHttpRequest();

  request1.open('GET', './content/專輯.json');
  request1.responseType = 'json';
  request1.send();
  request1.onload = function()
  {
    var data1 = request1.response;
    var albumsource = data1['albumList'];
    var sourse1;
    var sourse2;
    var sourse3;
    var sourse4;

    var math = Math.floor(Math.random() * albumsource.length);
    var sourse1 = math;
    loadData(albumsource[sourse1].albumSource, recommendAlbumButton1, recommendAlbumNameDiv1, recommendAlbumInfoDiv1);

    while (true)
    {
      math = Math.floor(Math.random() * albumsource.length);

      if (math != sourse1)
      {
        sourse2 = math;
        loadData(albumsource[sourse2].albumSource, recommendAlbumButton2, recommendAlbumNameDiv2, recommendAlbumInfoDiv2);
        break;
      }
    }

    while (true)
    {
      math = Math.floor(Math.random() * albumsource.length);

      if (math != sourse1 && math != sourse2)
      {
        sourse3 = math;
        loadData(albumsource[sourse3].albumSource, recommendAlbumButton3, recommendAlbumNameDiv3, recommendAlbumInfoDiv3);
        break;
      }
    }

    while (true)
    {
      math = Math.floor(Math.random() * albumsource.length);

      if (math != sourse1 && math != sourse2 && math != sourse3)
      {
        sourse4 = math;
        loadData(albumsource[sourse4].albumSource, recommendAlbumButton4, recommendAlbumNameDiv4, recommendAlbumInfoDiv4);
        break;
      }
    }

    loadSingleData(albumsource);
  }
}

function loadSingleData(albumsource)
{
  var request1 = new XMLHttpRequest();

  request1.open('GET', './content/單曲.json');
  request1.responseType = 'json';
  request1.send();
  request1.onload = function()
  {
    var data1 = request1.response;
    var singlesource = data1['albumList'];
    var sourse1;
    var sourse2;
    var sourse3;
    var sourse4;

    var math = Math.floor(Math.random() * singlesource.length);
    var sourse1 = math;
    loadData(singlesource[sourse1].albumSource, recommendSingleButton1, recommendSingleNameDiv1, recommendSingleInfoDiv1);

    while (true)
    {
      math = Math.floor(Math.random() * singlesource.length);

      if (math != sourse1)
      {
        sourse2 = math;
        loadData(singlesource[sourse2].albumSource, recommendSingleButton2, recommendSingleNameDiv2, recommendSingleInfoDiv2);
        break;
      }
    }

    while (true)
    {
      math = Math.floor(Math.random() * singlesource.length);

      if (math != sourse1 && math != sourse2)
      {
        sourse3 = math;
        loadData(singlesource[sourse3].albumSource, recommendSingleButton3, recommendSingleNameDiv3, recommendSingleInfoDiv3);
        break;
      }
    }

    while (true)
    {
      math = Math.floor(Math.random() * singlesource.length);

      if (math != sourse1 && math != sourse2 && math != sourse3)
      {
        sourse4 = math;
        loadData(singlesource[sourse4].albumSource, recommendSingleButton4, recommendSingleNameDiv4, recommendSingleInfoDiv4);
        break;
      }
    }

    loadlikeData(albumsource.concat(singlesource))
  }
}

function loadlikeData(data)
{
  var sourse1;
  var sourse2;
  var sourse3;
  var sourse4;

  var math = Math.floor(Math.random() * data.length);
  var sourse1 = math;
  loadData(data[sourse1].albumSource, likeButton1, likeNameDiv1, likeInfoDiv1);

  while (true)
  {
    math = Math.floor(Math.random() * data.length);

    if (math != sourse1)
    {
      sourse2 = math;
      loadData(data[sourse2].albumSource, likeButton2, likeNameDiv2, likeInfoDiv2);
      break;
    }
  }

  while (true)
  {
    math = Math.floor(Math.random() * data.length);

    if (math != sourse1 && math != sourse2)
    {
      sourse3 = math;
      loadData(data[sourse3].albumSource, likeButton3, likeNameDiv3, likeInfoDiv3);
      break;
    }
  }

  while (true)
  {
    math = Math.floor(Math.random() * data.length);

    if (math != sourse1 && math != sourse2 && math != sourse3)
    {
      sourse4 = math;
      loadData(data[sourse4].albumSource, likeButton4, likeNameDiv4, likeInfoDiv4);
      break;
    }
  }
}
