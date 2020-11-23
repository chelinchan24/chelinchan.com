	 var tag = document.createElement('script');
	 var isplayVideo = true;
	 var isFirstPlayVideo = true;
	 var isMoveProgressbar = false;
	 var videotime = 0;

	 var playNum = 0;
	 var songSource = "";
	 var currentVideo = "";

	 var loop_close = 0;
	 var loop_all = 1;
	 var loop_one = 2;
	 var loop = 0;

	 var isPlayLargeView = false;//大型播放器是否是開啟狀態

	 var data;

   tag.src = "https://www.youtube.com/iframe_api";

   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   var player;
   function onYouTubeIframeAPIReady()
	 {
     player = new YT.Player('video',
		 {
       height: '189',
       width: '336', // 原335x188
       videoId: "",
	   	 playerVars: {'controls' : 0, 'rel' : 0, 'showinfo' : 0},
       events: {
         'onReady': onPlayerReady,
         'onStateChange': onPlayerStateChange
       }
     });
   }

   function onPlayerReady(event)
   {
   	event.target.playVideo();

   	function updateTime()
   	{
   		var oldTime = videotime;
   		if(player && player.getCurrentTime)
   		{
   			videotime = player.getCurrentTime();
   		}

   		if(videotime !== oldTime)
   		{
   			onProgress(videotime);
   		}
   	}
   	timeupdater = setInterval(updateTime, 250);
   }


   	// --------------------------------------------------------
	// 播放狀態
	// --------------------------------------------------------
	 var done = false;
	 function onPlayerStateChange(event)
	{
		var imgPlayPause = document.getElementById('imgPlayPause');
		if (event.data == YT.PlayerState.PLAYING) // 播放
		{
			var duration = document.getElementById('全曲時間');
			var durationTime = new Date(player.getDuration() * 1000);
			var progress = document.getElementById('progress');

			progress.max = player.getDuration();
			duration.textContent = formatDate(durationTime, "mm:ss");

			imgPlayPause.className = '暫停icon 按鈕icon';
			player.playVideo();
			isplayVideo = true;

			if (isPlayLargeView) 
			{
				player.pauseVideo();
			}
		}
		else if (event.data == YT.PlayerState.PAUSED) // 暫停
		{
			 imgPlayPause.className = '播放icon 按鈕icon';
			 player.pauseVideo();
			 isplayVideo = false;
		}
		else if (event.data == YT.PlayerState.ENDED) //  結束
		{
			imgPlayPause.className = '播放icon 按鈕icon';
			isplayVideo = false;

			if (loop == loop_one)
			{
				player.loadVideoById(currentVideo);
			}
			else
			{
				playNextVideo(false);
			}
		}
		else if (event.data == YT.PlayerState.BUFFERING)
		{
			if (isFirstPlayVideo)
			{
				isFirstPlayVideo = false;

				//如果歌詞以及稍後播放列表皆為隱藏則代表第一次開，開啟歌詞列表。
				var isNotOpen = true;
				tabbutton = document.getElementsByClassName("tabbutton");
    			for (i = 0; i < tabbutton.length; i++) 
    			{
    				if (tabbutton[i].className == "tabbutton active") 
    				{
    					isNotOpen = false;
    				}
                }

				if (isNotOpen) 
				{
					document.getElementById('歌詞容器').style.display = "block";
			        tabbutton[0].className += " active";
				}

				//隱藏placeholder
				var placeholder = document.getElementById('video-placeholder');
				placeholder.style.display = "none";
			}
		}
	 }

	// --------------------------------------------------------
	// 選擇指定歌曲
	// --------------------------------------------------------
	 function playerWithNum(song, num)
	 {
		 var request = new XMLHttpRequest();
		 request.open('GET', song);
		 request.responseType = 'json';
		 request.send();
		 request.onload = function()
		 {
			 data = request.response;
			 var song1 = data['song'];

			//  取得元素
			 var songname = document.getElementById('歌曲名稱');
			 var albumname = document.getElementById('專輯名稱');
			 var ablumCoverSource = document.getElementById('專輯封面圖片');

			//  載入json資料
			if (check_Maxlen(song1[num].SongTitle, 18))
			{
				songname.innerHTML = "<marquee scrollamount=\"2\">" + song1[num].SongTitle + "</marquee>"	;
			}
			else
			{
				songname.textContent = song1[num].SongTitle;
			}

			 albumname.textContent = song1[num].AlbumTitle;
			 ablumCoverSource.style["background-image"] = "url('" + data.AlbumCoverSource + "')";

			//  將目前播放的json存起來
			 playNum = num;
			 songSource = song;

			//  載入影片
			 player.loadVideoById(song1[num].songsource);

			//  載入歌詞
			 readsong(song1[num].lyrics);

			 currentVideo = song1[num].songsource;

			 //稍後播放
			 loadPlayLater();
		 }
	 }

	// --------------------------------------------------------
	// 播放下一首歌
	// --------------------------------------------------------
	 function playNextVideo(isClick)
	 {
		//  var request = new XMLHttpRequest();
		//  request.open('GET', songSource);
		//  request.responseType = 'json';
		//  request.send();
		//  request.onload = function()
		//  {
			//  var data = request.response;
			 var song1 = data['song'];

			 if (playNum < song1.length - 1)
			 {
 	 			 playNum++;

				 if (!song1[playNum].songsource) //無法播放的
				 {
					 playNextVideo(isClick);
				 }
				 else
				 {
					 //  取得元素
		 			 var songname = document.getElementById('歌曲名稱');
		 			 var albumname = document.getElementById('專輯名稱');

					 //  載入影片
	  	 			 player.loadVideoById(song1[playNum].songsource);

	 	 			//  載入json資料
					if (check_Maxlen(song1[playNum].SongTitle, 16))
				 	{
					 	songname.innerHTML = "<marquee scrollamount=\"2\">" + song1[playNum].SongTitle + "</marquee>"	;
				 	}
				 	else
				 	{
					 	songname.textContent = song1[playNum].SongTitle;
				 	}
	 	 			 albumname.textContent = song1[playNum].AlbumTitle;

	 	 			//  載入歌詞
	 	 			 readsong(song1[playNum].lyrics);

					 currentVideo = song1[playNum].songsource;

					 //稍後播放
					 loadPlayLater();
				 }
			 }
			 else if (loop == loop_all)
			 {
				 playNum = -1;
				 playNextVideo(false);
			 }
			 else if (isClick)
			 {
				 playNum = -1;
				 playNextVideo(isClick);
			 }
		//  }
	 }

	// --------------------------------------------------------
	// 播放上一首歌
	// --------------------------------------------------------
	 function playPreviousVideo()
	 {
		//  var request = new XMLHttpRequest();
		//  request.open('GET', songSource);
		//  request.responseType = 'json';
		//  request.send();
		//  request.onload = function()
		//  {
			//  var data = request.response;
			 var song1 = data['song'];

			 if (playNum > 0)
			 {
					 playNum--;

				 if (!song1[playNum].songsource)
				 {
					 playPreviousVideo();
				 }
				 else
				 {
					 //  取得元素
					 var songname = document.getElementById('歌曲名稱');
					 var albumname = document.getElementById('專輯名稱');

					 //  載入影片
					 player.loadVideoById(song1[playNum].songsource);

					//  載入json資料
					if (check_Maxlen(song1[playNum].SongTitle, 16))
				 	{
					 	songname.innerHTML = "<marquee scrollamount=\"2\">" + song1[playNum].SongTitle + "</marquee>"	;
				 	}
				 	else
				 	{
					 	songname.textContent = song1[playNum].SongTitle;
				 	}
					 albumname.textContent = song1[playNum].AlbumTitle;

					//  載入歌詞
					 readsong(song1[playNum].lyrics);

					 currentVideo = song1[playNum].songsource;

					 //稍後播放
					 loadPlayLater();
				 }
			 }
		//  }
	 }

	// --------------------------------------------------------
	// 點選稍後播放
	// --------------------------------------------------------
	 function playLaterVideo(num)
	 {
	 	playNum = num;
	 	var song = data['song'];

	 	//  取得元素
	 	var songname = document.getElementById('歌曲名稱');
		var albumname = document.getElementById('專輯名稱');

		//  載入影片
	  	player.loadVideoById(song[playNum].songsource);
	  	if (isPlayLargeView) 
	  	{
	  		player.pauseVideo();
	  	}

	 	//  載入json資料
		if (check_Maxlen(song[playNum].SongTitle, 16))
		{
			songname.innerHTML = "<marquee scrollamount=\"2\">" + song[playNum].SongTitle + "</marquee>"	;
		}
		else
		{
			songname.textContent = song[playNum].SongTitle;
		}
		albumname.textContent = song[playNum].AlbumTitle;

		//  載入歌詞
		readsong(song[playNum].lyrics);

		currentVideo = song[playNum].songsource;

		if (isPlayLargeView) 
		{
			var largeViewSongname = song[playNum].SongTitle;
    		var largeViewAlbumname = song[playNum].AlbumTitle;
    		var largeViewAlbumCoverSource = document.getElementById('專輯封面圖片').style.backgroundImage;
    		var largeViewCurrentTime = 0;
    		var largeViewCurrentVideo1 = song[playNum].songsource;
    		var largeViewLyrics = "";
    		var largeViewIsPlay = true;
    
    		parent.updateLargeView(largeViewSongname, largeViewAlbumname, albumCoverSource, largeViewCurrentVideo1, largeViewCurrentTime, largeViewLyrics, largeViewIsPlay);
		}

		//稍後播放
		loadPlayLater();
	 }

	// --------------------------------------------------------
	// 更新循環播放狀態
	// --------------------------------------------------------
	 function updateLoopState()
	 {
		 var loopImg = document.getElementById('loopImg');

		 if (loop == loop_close)
		 {
			//  循環全部
			 loop = loop_all;
			 loopImg.src = "./images/icons/loop-on.png";

		 }
		 else if (loop == loop_all)
		 {
			//  單曲循環
			loop = loop_one;
			loopImg.src = "./images/icons/loop-single.png";

		 }
		 else if (loop == loop_one)
		 {
			//  關閉循環
		 	loop = loop_close;
			loopImg.src = "./images/icons/loop.png";

		 }
	 }

	// --------------------------------------------------------
	// 進度條移動時處理
	// --------------------------------------------------------
	 var timeout;
	 function seekTo(allowSeekAhead, state)
	 {
		 if (state == false)
		 {
			 clearTimeout(timeout);
			 timeout = setTimeout(function ()
			 {
				 isMoveProgressbar = state;
			 }, 1000);
		 }
		 else
		 {
			 isMoveProgressbar = state;
		 }

		 // var progress = document.getElementById('progress');

		//  if (state)
		//  {
		// 	 var current = document.getElementById('目前時間');
		// 	 var time = new Date(progress.value * 1000);
		// 	 current.textContent = formatDate(time, "mm:ss");
		//  }

		 player.seekTo(progress.value, allowSeekAhead)
	 }

	// --------------------------------------------------------
	// 更新當前時間，進度條。
	// --------------------------------------------------------
	 function onProgress(currentTime)
	 {
	 	var test2 = document.getElementById('目前時間');
		var progress = document.getElementById('progress');
     	var a = new Date(player.getCurrentTime() * 1000);

		if (isMoveProgressbar == false && player.getCurrentTime() != null)
		{
			progress.value = currentTime;
		}

		test2.textContent = formatDate(a, "mm:ss");
	 }

	// --------------------------------------------------------
	// 更新播放按鈕狀態
	// --------------------------------------------------------
   function playpauseVideo()
   {
    var imgPlayPause = document.getElementById('imgPlayPause');
    if (imgPlayPause.className == '暫停icon 按鈕icon')
    {
      imgPlayPause.className = '播放icon 按鈕icon';
      player.pauseVideo();
      isplayVideo = false;
    }
    else
    {
      imgPlayPause.className = '暫停icon 按鈕icon';
			// if (player.getPlayerState() == YT.PlayerState.ENDED)
			// {
			// 	player.stopVideo();
			// }

      player.playVideo();
      isplayVideo = true;
    }
   }

   	// --------------------------------------------------------
	// 調整音量
	// --------------------------------------------------------
   function SoundControl()
	{
		var sound = document.getElementById("SoundLevel");

		var soundicon = document.getElementById('音量控制');

		soundicon.style["background-image"] = sound.value > 50 ? "url('" + "./images/icons/sound-normal.png" + "')" : (sound.value == 0 ? "url('" + "./images/icons/sound-none.png" + "')" : "url('" + "./images/icons/sound-low.png" + "')");
	    
	    player.setVolume(sound.value);
	    parent.updateLargeViewVolume(sound.value);
	}

	// --------------------------------------------------------
	// 載入稍後播放
	// --------------------------------------------------------
	function loadPlayLater()
	{
		var song = data['song'];
		var playLater = document.getElementById('稍後播放內容');
		playLater.innerHTML = '';

		for (var i = playNum + 1; i < song.length; i++) 
		{
			if (song[i].songsource) 
			{
				var playLaterDiv = document.createElement('div');
				var playLaterImgDiv = document.createElement('div');
				var playLaterAlbumNameDiv = document.createElement('div');
				var playLaterSongDiv = document.createElement('div');

				playLaterDiv.className = '一個稍後播放的歌曲';
				playLaterImgDiv.className = '稍後播放封面';
				playLaterAlbumNameDiv.className = '稍後播放專輯名稱';
				playLaterSongDiv.className = '稍後播放歌曲';

				playLaterImgDiv.style["background-image"] = "url('" + data.AlbumCoverSource + "')";
				playLaterAlbumNameDiv.textContent = song[i].AlbumTitle;
				playLaterSongDiv.textContent = song[i].SongTitle;

				playLaterDiv.appendChild(playLaterImgDiv);
				playLaterDiv.appendChild(playLaterSongDiv);
				playLaterDiv.appendChild(playLaterAlbumNameDiv);

				playLaterDiv.data = i;
				playLaterDiv.onclick = function()
				{
					playLaterVideo(this.data);
				}

				playLater.appendChild(playLaterDiv);
			}
		}
	}

	// ---------------------------------------------------------------------

	// 載入歌詞
	function readsong(layrics)
	{
		var request1 = new XMLHttpRequest();
		request1.open('GET', layrics);
		request1.responseType = 'json';
		request1.send();
		request1.onload = function()
		{
			var data1 = request1.response;
			var lyrics = document.getElementById('歌詞');
			if (!data1 || !data1.LyricsContent)
			{
				lyrics.textContent = "";
			}
			else
			{
				lyrics.innerHTML = data1.LyricsContent;
			}

			if (isPlayLargeView) 
			{
				parent.updateLargeViewLyrics(data1.LyricsContent);	
			}
		}
	}

	// --------------------------------------------------------
	// LargeView
	// --------------------------------------------------------
	function closeLaygeView(currentTime1, isPlay) //大型播放器被關閉
	{
		onProgress(currentTime1);
		seekTo(currentTime1, false);

		if (isPlay) 
		{
			player.playVideo();
		}

		isPlayLargeView = false;
	}

	function playNextLargeView() //大型播放器播放下一首歌
	{
		var song1 = data['song'];

		if (playNum < song1.length - 1)
		{
			playNum++;

			if (!song1[playNum].songsource) //無法播放的
			{
				playNextLargeView();
			}
			else
			{
				//  取得元素
		 		var songname = document.getElementById('歌曲名稱');
		 		var albumname = document.getElementById('專輯名稱');

				//  載入影片
	  	 		player.loadVideoById(song1[playNum].songsource);

	 	 		//  載入json資料
				if (check_Maxlen(song1[playNum].SongTitle, 16))
				{
				 	songname.innerHTML = "<marquee scrollamount=\"2\">" + song1[playNum].SongTitle + "</marquee>"	;
				}
				else
				{
				 	songname.textContent = song1[playNum].SongTitle;
				}
				albumname.textContent = song1[playNum].AlbumTitle;

	 	 		//  載入歌詞
	 	 		readsong(song1[playNum].lyrics);

				currentVideo = song1[playNum].songsource;

				//稍後播放
				loadPlayLater();

    			var songname = song1[playNum].SongTitle;
    			var albumname = song1[playNum].AlbumTitle;
    			var albumCoverSource = document.getElementById('專輯封面圖片').style.backgroundImage;
    			var currentTime = 0;
    			var currentVideo1 = song1[playNum].songsource;
    			var lyrics = "";
    			var isPlay = true;
    
    			parent.updateLargeView(songname, albumname, albumCoverSource, currentVideo1, currentTime, lyrics, isPlay);
			}
		}
		else if (loop == loop_all)
		{
			playNum = -1;
			playNextLargeView();
		}
		// else if (isClick)
		// {
			// playNum = -1;
			// playNextVideo(isClick);
		// }
	}

	function syncLargeViewVolume(volume)
	{
		var sound = document.getElementById("SoundLevel");
		var soundicon = document.getElementById('音量控制');

		soundicon.style["background-image"] = volume > 50 ? "url('" + "./images/icons/sound-normal.png" + "')" : (volume == 0 ? "url('" + "./images/icons/sound-none.png" + "')" : "url('" + "./images/icons/sound-low.png" + "')");

	    player.setVolume(volume);
	    sound.value = volume;
	}

	// --------------------------------------------------------
	// 檢查文字字數
	// --------------------------------------------------------
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

	// --------------------------------------------------------
	// 時間
	// --------------------------------------------------------
	function formatDate(date, format, utc) {
    var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }

    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);

    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);

    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
};
