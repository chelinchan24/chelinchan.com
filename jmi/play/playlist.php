<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>playlist</title>
<div id="讀取畫面"><img src="./images/source/loading.gif" id="讀取圖片"></div>
<link href="./css/所有頁面通用樣式.css" rel="stylesheet" type="text/css">
<link href="./css/合輯頁面樣式.css" rel="stylesheet" type="text/css">
<link href="./css/讀取畫面.css" rel="stylesheet" type="text/css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js" type="text/javascript"></script>
</head>

<body>
<div id="合輯資訊欄盒子">
<!-- 背景開始 -->
<div id="合輯資訊欄上半部背景">
<div id="背景圖片" style="background-image:; background-repeat:no-repeat; background-size: 110%; background-position: center;">
</div>
</div>
<div id="合輯資訊欄下半部背景">
<div id="播放按鈕" onclick="callPlayerFunction(0);"><img src="./images/icons/album-page-play-button-icon.png" id="播放按鈕icon">播放</span></div>
<div id="分享按鈕" >收藏⋯</span></div>
<div id="分享選單">
<a href="" target="_blank" id="Youtube">
<div class="一個選項">收藏到 Youtube</div>
</a>
</div>
</div>
<!-- 背景結束 -->
<!-- 合輯資訊開始 -->
<div id="合輯資訊盒子">
<img src="" id="合輯封面">
<div id="合輯文字資訊">
<div id="類型">合輯
</div>
<div id="名稱">
</div>
<div id="合輯介紹">
</div>
<div id="發佈日期與歌曲數量"></div>
</div>
</div>
</div>
<!-- 合輯資訊結束 -->
<!-- 曲目區塊頂端標題開始 -->
<div id="曲目區塊頂端標題">
<span class="順序 縮排">順序</span>
<span class="曲目">曲目</span>
<span class="長度">長度</span>
</div>
<div id="曲目區塊">
</div>
<div id="底部">
<!-- <div id="歌曲數量">共首歌曲</div> -->
</div>
<!--<div id="尋人">
<a href="https://chelinchan.com/searchperson" target="_blank"><img src="./images/source/尋人.png" id="尋人圖片" height="110px" width="709px"></a>
</div>-->
<!-- 曲目區塊頂端標題結束 -->
<script>
$(window).load(function(){
	$.fx.off = !$.fx.off;
	$('#讀取畫面').hide(30000);
	});

	var requestURL = "<? echo $_POST["playlist-source"];?>";
</script>
<script src="./function/playlist-list-content-loader.js"></script>
</body>
</html>
