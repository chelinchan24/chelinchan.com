<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>album</title>
<!-- <div id="讀取畫面"><img src="./images/source/loading.gif" id="讀取圖片"></div> -->
<link href="./css/所有頁面通用樣式.css" rel="stylesheet" type="text/css">
<link href="./css/專輯頁面樣式.css" rel="stylesheet" type="text/css">
<link href="./css/讀取畫面.css" rel="stylesheet" type="text/css">

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
</head>

<body>
<div id="專輯資訊欄盒子">
<!-- 背景開始 -->
<div id="專輯資訊欄上半部背景">
<div id="背景圖片" style="background-image:; background-size: 110%; background-position: center;">
</div>
</div>
<div id="專輯資訊欄下半部背景">
<div id="播放按鈕" onclick="callPlayerFunction(firstVideo);" class="none"><img src="./images/icons/album-page-play-button-icon.png" id="播放按鈕icon">播放</span></div>
<div id="分享按鈕" >收藏⋯</span></div>
<div id="分享選單">
<a href="" target="_blank" id="Youtube">
  <div class="一個選項">收藏到 Youtube</div>
</a>
</div>
</div>
<!-- 背景結束 -->
<!-- 專輯資訊開始 -->
 <script>
var win = window,
    docEl = document.documentElement;

win.onscroll = function(){
   var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
   document.getElementById('專輯資訊盒子').className =  sTop > 270 ? "浮動-專輯資訊盒子" : "none" ;
   document.getElementById('專輯封面').className =  sTop > 270 ? "浮動-專輯封面" : "none" ;
   document.getElementById('專輯文字資訊').className =  sTop > 270 ? "浮動-專輯文字資訊" : "none" ;
   document.getElementById('名稱').className =  sTop > 270 ? "浮動-名稱" : "none" ;
   document.getElementById('歌曲數目與可提供數目').className =  sTop > 270 ? "浮動-年份與類型" : "none" ;
   document.getElementById('播放按鈕').className =  sTop > 270 ? "浮動-播放按鈕" : "none" ;
   document.getElementById('可提供數目說明').className =  sTop > 270 ? "浮動-可提供數目說明" : "none" ;
   document.getElementById('年份與類型').className =  sTop > 270 ? "浮動-年份與類型" : "none" ;
   document.getElementById('專輯資訊盒子').css({visibility: sTop > 305 ? "visible":"hidden"});
   
};
</script> 
<div id="專輯資訊盒子" class="none">
<img src="" id="專輯封面" class="none">
<div id="專輯文字資訊" class="none">
<div id="年份與類型" class="none">
</div>
<div id="名稱" class="none">
</div>
<div id="歌曲數目與可提供數目"></div><div id="可提供數目說明" class="none">
<div id="問號icon">
</div>
<div id="說明內容">
<div id="說明內容文字">
前者的歌曲數量指的是專輯中的歌曲數量，而「現可提供」則是官方已
<br>在 Youtube 上發佈，您能夠在就是五月天中聆聽的曲目數量。</div>
</div>
</div>
</div>
</div>
</div>
<!-- 專輯資訊結束 -->
<!-- 曲目區塊頂端標題開始 -->
<div id="曲目區塊頂端標題">
<span class="順序 縮排">順序</span>
<span class="曲目">曲目</span>
<span class="長度">長度</span>
</div>
<div id="曲目區塊">
</div>
<div id="底部">
<div id="歌曲數量"></div>
<div class="歌曲資訊來源 縮排" id="封面來源"></div>
<div class="歌曲資訊來源 縮排" id="曲目資訊來源"></div>
<div class="區塊盒子">
<div class="段落標題盒子">
<a name="你可能會喜歡" class="段落標題">你可能也會喜歡⋯</a>
</div>
<div class="一張專輯">
    <form action="album.php" method="post">

        <button id="你可能會喜歡button1" type="submit" name="album-source" value="專輯.json" class="專輯封面" style="background-image:url('./images/source/no-playing.png'); background-size: 100%;"></button>

        <div id="你可能會喜歡名稱div1" class="專輯名稱">
        專輯
        </div>
        <div id="你可能會喜歡資訊div1" class="專輯資訊">
        年份
        </div>
    </form>
</div>
<div class="一張專輯">
    <form action="album.php" method="post">

        <button id="你可能會喜歡button2" type="submit" name="album-source" value="專輯.json" class="專輯封面" style="background-image:url('./images/source/no-playing.png'); background-size: 100%;"></button>

        <div id="你可能會喜歡名稱div2" class="專輯名稱">
        專輯
        </div>
        <div id="你可能會喜歡資訊div2" class="專輯資訊">
        年份
        </div>
    </form>
</div>
<div class="一張專輯">
    <form action="album.php" method="post">

        <button id="你可能會喜歡button3" type="submit" name="album-source" value="專輯.json" class="專輯封面" style="background-image:url('./images/source/no-playing.png'); background-size: 100%;"></button>

        <div id="你可能會喜歡名稱div3" class="專輯名稱">
        專輯
        </div>
        <div id="你可能會喜歡資訊div3" class="專輯資訊">
        年份
        </div>
    </form>
</div>
<div class="一張專輯">
    <form action="album.php" method="post">

        <button id="你可能會喜歡button4" type="submit" name="album-source" value="專輯.json" class="專輯封面" style="background-image:url('./images/source/no-playing.png'); background-size: 100%;"></button>

        <div id="你可能會喜歡名稱div4" class="專輯名稱">
        專輯
        </div>
        <div id="你可能會喜歡資訊div4" class="專輯資訊">
        年份
        </div>
    </form>
</div>
</div>
</div>
<!-- <div id="尋人">
<a href="http://chelinchan.com/searchperson" target="_blank"><img src="./images/source/尋人.png" id="尋人圖片" height="110px" width="709px"></a>
</div> -->
<!-- 曲目區塊頂端標題結束 -->
<script>
$(window).load(function(){
	$.fx.off = !$.fx.off;
	$('#讀取畫面').hide(27000);
	});

	var requestURL = "<? echo $_POST["album-source"];?>";
</script>
<script src="./function/album-list-content-loader.js"></script>
</body>
</html>
