var url = location.href;

var urlGenButton = document.getElementById("搜尋-按鈕-產生網址");
var searchTextInput = document.getElementById("搜尋-輸入框-音鋪");
var searchResult = document.getElementById("搜尋-結果-凹鋪");
var searchResultBox = document.getElementById("搜尋-結果");
var buttonsBox = document.getElementById("搜尋-按鈕-正常");
var resultButtonBox = document.getElementById("搜尋-按鈕-完成後");
var restartButton = document.getElementById("搜尋-按鈕-完成後-重來");

var resultDisplaying = false;

//if (url.includes("?q=")) {
//	$( "body" ).load( "./result.html");
//}

$("#搜尋-輸入框-音鋪").bind('keydown.return', hotkeyReturnDown);

function hotkeyReturnDown() {
	"use strict";
	buttonClicked();
}

urlGenButton.onclick = function() {
	"use strict";
	buttonClicked();
};

restartButton.onclick = function() {
	"use strict";
	buttonClicked();
};

searchResult.onclick = function() {
	"use strict";
	window.getSelection().selectAllChildren(searchResult);
};

function buttonClicked() {
	"use strict";
	if (resultDisplaying === false) {
		var searchContent = searchTextInput.value;
	
		if (searchContent.includes(" ")) {
			searchContent = searchContent.replace(/\s/g, "+");
		}
		
		searchResultBox.className = "淡入";
		searchResult.className = "展開";
		searchResult.innerHTML = "chelinchan.com/jgi/result.html?q=" + searchContent;
		buttonsBox.className = "淡出";
		resultButtonBox.className = "淡入";
		
		window.getSelection().selectAllChildren( searchResult );
		$(document).bind('keydown.return', hotkeyReturnDown);
		resultDisplaying = true;
	} else {
		searchResultBox.className = "淡出";
		searchTextInput.value = "";
		searchResult.className = "";
		searchTextInput.focus();
		resultButtonBox.className = "淡出";
		buttonsBox.className = "淡入";
		
		resultDisplaying = false;
	}
}

document.getElementById("搜尋-按鈕-完成後-預覽").onclick = function() {
	"use strict";
	var win = window.open("http://chelinchan.com/jgi/result.html?q=" + searchTextInput.value, '_blank');
  	win.focus();
};