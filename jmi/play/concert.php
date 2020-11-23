<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>album</title>

<link href="./css/所有頁面通用樣式.css" rel="stylesheet" type="text/css">
<link href="./css/演唱會頁面樣式.css" rel="stylesheet" type="text/css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body>
<div id="演唱會資訊欄盒子">
<!-- 背景開始 -->
<div id="演唱會資訊欄上半部背景">
<div id="背景圖片" style="background-image:url('https://1.bp.blogspot.com/-7dqJfECJVqc/WNTxn0PSpyI/AAAAAAAAJNA/VeYAKHnNivMxMkE14Q2kepn0UNwCqgAxgCLcB/s640/IMG_0003.jpg'); background-repeat:no-repeat; background-size: 110%; background-position: center;">
</div>
</div>
<div id="演唱會資訊欄下半部背景">
<div id="播放按鈕"><img src="./images/icons/album-page-play-button-icon.png" id="播放按鈕icon">播放</span></div>
</div>
<!-- 背景結束 -->
<!-- 演唱會資訊開始 -->
<div id="演唱會資訊盒子">
<img src="./images/source/concert-default-big.png" id="演唱會封面">
<div id="演唱會文字資訊">
<div id="名稱">
<?php echo $_POST["album-name"]; ?>人生無限公司
</div>
<div id="日期與地點">
<?php echo $_POST["album-name"]; ?>2017年3月18日 高雄場<span id="首場標記">首場</span>
</div>
<div id="歌曲數量與安可">
<?php echo $_POST["album-name"]; ?>35首歌・2次安可・現可提供 3 首歌
</div>
</div>
</div>
<!-- 演唱會資訊結束 -->
<!-- 曲目曲目區塊頂端標題開始 -->
<div id="曲目區塊頂端標題">
<span class="順序 縮排">順序</span>
<span class="曲目">曲目</span>
<span class="長度">長度</span>
</div>

<div id="曲目區塊">
</div> 

<script type="text/javascript">
  var requestURL = "<? echo $_POST["album-source"];?>";
  var request = new XMLHttpRequest(); 
  var table = document.getElementById('曲目區塊');
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function() {
    var data = request.response;

    document.getElementById('演唱會封面').src = data.AlbumCoverSource;
    document.getElementById('年份與類型').textContent = data.TypeAndRelease;
    document.getElementById('名稱').textContent = data.AlbumTitle;
    document.getElementById('時間與歌曲數目').textContent = data.TimeAndSongCount;
	document.getElementById('背景圖片').style["background-image"] = "url('" + data.AlbumCoverSource + "')";

    var song = data['song'];
    for (var i = 0; i < song.length; i++)
    {
      var form = document.createElement('form');
      form.action = 'player.php';
      form.method = 'post';
      form.target = 'player';

      var btn = document.createElement('button');
      btn.type = 'submit';
      btn.name = 'song-source';
      btn.value = song[i].songsource;
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

      var input = document.createElement('input');
      input.name = 'song-name';
      input.value = song[i].SongTitle;
      input.type = 'hidden';

      var input2 = document.createElement('input');
      input2.name = 'album-name';
      input2.value = song[i].AlbumTitle;
      input2.type = 'hidden';

      var input3 = document.createElement('input');
      input3.name = 'album-cover-source';
      input3.value = data.AlbumCoverSource;
      input3.type = 'hidden';
	  
	  var input4 = document.createElement('input');
      input4.name = 'lyrics';
      input4.value = song[i].lyrics;
      input4.type = 'hidden';
	  
	//  var request1 = new XMLHttpRequest(); 
 	 //	request1.open('GET', song[i].lyrics);
     	//request1.responseType = 'json';
    	//request1.send();
		//request1.onload = function(){
		//	var data1 = request1.response;
			//var input4 = document.createElement('input');
      //input4.name = 'lyrics';
      //input4.value = data1['song-lyrics'];
      //input4.type = 'hidden';
		//	  } 
		   
	  

      form.appendChild(btn);
      form.appendChild(input);
      form.appendChild(input2);
      form.appendChild(input3);
	  form.appendChild(input4);

      table.appendChild(form);
    }
  }

</script>

</body>
</html>
