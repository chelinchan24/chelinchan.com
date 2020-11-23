  var firstVideo = -1;
  var request = new XMLHttpRequest();
  var table = document.getElementById('曲目區塊');
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var data = request.response;

    document.getElementById('專輯封面').src = data.AlbumCoverSource;
    document.getElementById('年份與類型').textContent = data.type + "・" + data.year;
    document.getElementById('名稱').textContent = data.AlbumTitle;
    document.getElementById('歌曲數目與可提供數目').textContent = data.total + "首歌曲・現可提供" + data.available + "首歌曲";
	  document.getElementById('歌曲數量').textContent = "共 " + data.available + " 首可提供歌曲";
	  document.getElementById('背景圖片').style["background-image"] = "url('" + data.AlbumCoverSource + "')";
	  document.getElementById('封面來源').textContent = "封面來源：" + data.CoverSourceFrom;
	  document.getElementById('曲目資訊來源').textContent = data.type + "資訊來源：" + data.InfoReference;

    if (check_Maxlen(data.AlbumTitle, 30))
    {
        document.getElementById('名稱').style.fontSize = "35px";
    }

  if (!data.YoutubePlaylistSource)
  {
    document.getElementById("分享按鈕").style.display = "none";
    document.getElementById("分享選單").style.display = "none";
  }
  else
  {
    document.getElementById('Youtube').href = data.YoutubePlaylistSource;
  }

    var song = data['song'];
    var noPlayer = true;
    for (var i = 0; i < song.length; i++)
    {
      if (!song[i].songsource)
      {
        var div = document.createElement('div');
        div.className = '一首無法提供的歌曲';

        var span = document.createElement('span');
        span.className = '順序 縮排';
        span.textContent = i + 1;

        var span2 = document.createElement('span');
        span2.className = '曲目';
        span2.textContent = song[i].SongTitle;

        var span3 = document.createElement('span');
        span3.className = '長度';
        span3.textContent = song[i].time;

        div.appendChild(span);
        div.appendChild(span2);
        div.appendChild(span3);

        table.appendChild(div);
      }
      else
      {
        if (firstVideo == -1)
        {
          firstVideo = i;
        }
        noPlayer = false;
        var btn = document.createElement('button');

        btn.data = i;
        btn.onclick = function()
        {
          callPlayerFunction(this.data);
        }
        btn.className = '歌曲form按鈕';

        var div = document.createElement('div');
        div.className = '一首歌曲';

        var span = document.createElement('span');
        span.className = '順序 縮排';
        span.textContent = i + 1;

        var span2 = document.createElement('span');
        span2.className = '曲目';
        span2.textContent = song[i].SongTitle;

        var span3 = document.createElement('span');
        span3.className = '長度';
        span3.textContent = song[i].time;

        div.appendChild(span);
        div.appendChild(span2);
        div.appendChild(span3);

        btn.appendChild(div);

        table.appendChild(btn);
      }
    }

    if (noPlayer)
    {

    }
  }

  function callPlayerFunction(num)
  {
    parent.frames['player'].playerWithNum(this.requestURL, num);
  }

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
  loadAlbumData();

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

  function check_Maxlen(fieldname,Maxlen)
  {
    var i,f_len,strPN
    f_len = 0;
    for (i=0;i<fieldname.length;i++)
    {
      strPN = escape(fieldname.charAt(i)) ;
      if ((strPN.indexOf('%u'))!= -1)
      {
        f_len = f_len + 2 ;
      }      //'若為中文,長度+2
      else
      {
        f_len = f_len + 1 ;
      }      //'若為英文,長度+1
    }
    if (f_len>Maxlen)
    {
      return true;
    }
    return false;
  }
