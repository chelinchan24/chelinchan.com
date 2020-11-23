<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Player</title>

<div id="讀取畫面"><img src="./images/source/player-loading.png" id="讀取圖片"></div>
<link href="./css/player.css" rel="stylesheet" type="text/css">
<link href="./css/所有頁面通用樣式.css" rel="stylesheet" type="text/css">

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>

</head>
<body>
<div id="資訊欄">
<div id="專輯封面">
<div id="專輯封面圖片-plceholder"></div>
<div id="專輯封面圖片" style="background:url(''); background-size: 70px 70px;"></div>
</div>
<div id="歌曲與專輯名稱盒子">
<div id="歌曲名稱">
</div>
<div id="專輯名稱">
</div>
</div>
<div id="時間計算"><output id="目前時間">00:00</output> / <output id="全曲時間">00:00</output></div>
</div>
<div id="blankspace"></div>
<div id="player">
</div>
<div id="影片進度列">
<input id="progress" type="range" onclick="seekTo(true, false)" oninput="seekTo(false, true)" onmouseup="seekTo(true, false)" value="0">
</div>
</div>
<div id="播放控制按鈕盒子">
<div id="音量控制" class="滑桿icon" style="background-image:url('./images/icons/sound-normal.png'); background-size: 100%;">
<div id="音量滑桿盒子">
<div id="音量滑桿"><input type="range" id="SoundLevel" value="100" oninput="SoundControl()" class="滑桿本體"></div>
</div></div>
<button onclick="playPreviousVideo();"><img src="./images/icons/previous-button.png" class="上下首 按鈕icon"></button>
<button id="play" onclick="playpauseVideo()"><div id="imgPlayPause" class="播放icon 按鈕icon"></div></button>
<button onclick="playNextVideo(true);"><img src="./images/icons/next-button.png" class="上下首 按鈕icon"></button>
<button onclick="updateLoopState()"><img id="loopImg" src="./images/icons/loop.png" class="循環 按鈕icon"></button>
</div>
<!-- 歌詞開始 -->
<div id="播放器與資訊欄佔位方塊"></div>
<div id="頁籤盒子">
<style>
</style>
<div id="列表頁籤">
<button class="tabbutton" onclick="playerTabs(event, '歌詞容器')">
<img src="./images/icons/lyrics_button.png" class="頁籤按鈕">
</button>
<button class="tabbutton" onclick="playerTabs(event, '稍後播放容器')">
<img src="./images/icons/queue_button.png" class="頁籤按鈕">
</button>
</div>
<div id="歌詞容器" class="tabcontent">
<div id="歌詞">
</div>
</div>

<div id="稍後播放容器" class="tabcontent">
<div id="稍後播放標題與內容">
<div id="稍後播放標題">稍後播放</div>
<div id="稍後播放內容">
</div>
</div>
</div>
</div>
<!-- <div id="video-placeholder" style="display: block;">
</div> -->
<div id="影片與其他控制選項">
<div id="其他影片控制選項">
<div id="選項盒子">
<div id="大型播放器" onmouseover="ShowLargePlayerTips()" onmouseout="HideLargePlayerTips()" onclick="LargePlayer()" class="選項icon" style="background:url('./images/icons/maxmize-video.png'); background-size: 100%;">
</div>
<div id="隱藏影像" onmouseover="ShowVideoHideTips()" onmouseout="HideVideoHideTips()" onclick="videoHide()" class="選項icon" style="background:url('./images/icons/hide-video.png'); background-size: 100%;">
</div>
</div>
<div id="隱藏影像提示" class="一則提示">
隱藏影像
</div>
<div id="大型播放器提示" class="一則提示">
大型檢視模式
</div>
<script>
function ShowVideoHideTips() {
	document.getElementById('隱藏影像提示').style.opacity = "1";
	document.getElementById('隱藏影像提示').style.visibility = "visible";
}

function HideVideoHideTips() {
	document.getElementById('隱藏影像提示').style.opacity = "0";
	document.getElementById('隱藏影像提示').style.visibility = "hidden";

}

function ShowLargePlayerTips() {
	document.getElementById('大型播放器提示').style.opacity = "1";
	document.getElementById('大型播放器提示').style.visibility = "visible";
}

function HideLargePlayerTips() {
	document.getElementById('大型播放器提示').style.opacity = "0";
	document.getElementById('大型播放器提示').style.visibility = "hidden";
}
</script>

</div>
<div id="video">
</div>
</div>
<div id="影像已隱藏">
<span id="隱藏影像提示文字">影像已隱藏</span>
<button id="顯示影像" onClick="videoDisplay()">顯示影像</button>
</div>
<script> //大型播放器
function LargePlayer() {
	parent.SwitchToLargeView();

	var isPlay = player.getPlayerState() == 1;
	isPlayLargeView = true;
    player.pauseVideo();

    var songname = document.getElementById('歌曲名稱').textContent;
    var albumname = document.getElementById('專輯名稱').textContent;
    var albumCoverSource = document.getElementById('專輯封面圖片').style.backgroundImage;
    var currentTime = player.getCurrentTime();
    var lyrics = document.getElementById('歌詞').innerHTML;
    var song = data['song'];

    parent.updateLargeView(songname, albumname, albumCoverSource, currentVideo, currentTime, lyrics, isPlay);
    parent.updateLatgeViewPlayLater(song, playNum);
}

</script>

<script> //關閉影像
function videoHide() {
	// document.getElementById('video').style.display = "none";
	document.getElementById('影像已隱藏').style.visibility = "visible";
	document.getElementById('影像已隱藏').style.opacity = "1";
}

function videoDisplay() {
	document.getElementById('video').style.display = "block";
	document.getElementById('影像已隱藏').style.visibility = "hidden";
	document.getElementById('影像已隱藏').style.opacity = "0";
}
</script>
<script> //頁籤
function playerTabs(evt, tab) {
    var i, tabcontent, tabbutton;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabbutton = document.getElementsByClassName("tabbutton");
    for (i = 0; i < tabbutton.length; i++) {
        tabbutton[i].className = tabbutton[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}
</script>
<script>
$(window).load(function(){
	$.fx.off = !$.fx.off;
	$('#讀取畫面').hide(30000);
	});
</script>
<script src="./function/player.js"></script>
</body>
</html>
