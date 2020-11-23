  var request = new XMLHttpRequest();
  var table = document.getElementById('曲目區塊');
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var data = request.response;

  document.getElementById('合輯封面').src = data.AlbumCoverSource;
  document.getElementById('合輯介紹').textContent = data.description;
  document.getElementById('名稱').textContent = data.title;
  document.getElementById('發佈日期與歌曲數量').textContent = data.year + "年" + data.month + "月" + data.day + "日發佈，共" + data.songCount +"首歌曲";
	document.getElementById('背景圖片').style["background-image"] = "url('" + data.AlbumCoverSource + "')";

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
  }

  function callPlayerFunction(num)
  {
    parent.frames['player'].playerWithNum(this.requestURL, num);
  }
