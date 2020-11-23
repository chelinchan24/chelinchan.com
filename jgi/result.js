var url = location.href;
var searchText;

var inputContent = document.getElementById('展示-搜尋-輸入框-內容');

var inputContentPos = inputContent.getBoundingClientRect();
var inputContentTop = inputContentPos.top;
var inputContentLeft = inputContentPos.left;

var searchBtn = document.getElementById('展示-搜尋-按鈕-產生網址');
var searchBtnPos = searchBtn.getBoundingClientRect();
var searchBtnTop = searchBtnPos.top;
var searchBtnLeft = searchBtnPos.left;

var cursor = document.getElementById("游標");

var 	guideTextBox = document.getElementById("說明-內文");
var stepOne = document.getElementById("說明-內文-第一步");
var stepTwo = document.getElementById("說明-內文-第二步");
var stepThree = document.getElementById("說明-內文-第三步");
var isThisHard = document.getElementById("說明-內文-對你來說真的很困難嗎？");

var stepHide = "說明-隱藏";

window.addEventListener("load", function () {
	"use strict";
	//判斷搜尋內容
	if(url.indexOf('?q=')!==-1){
		var ary1 = url.split('?q=');
		console.log(ary1[0],ary1[1]);
		//ary1[0] = 'index.html'，ary1[1] = '搜尋內容'
		searchText = decodeURI(ary1[1]);
	}
	
	
	//開始展示
	curMove(inputContentTop + 100,inputContentLeft -50);
	
	stepShowing("y","n","n","n");

	setTimeout( function() {
		curMove(inputContentTop + 10,inputContentLeft + 20);
		stepShowing("n","y","n","n");
		
		inputContent.className = "展示-搜尋-輸入框-內容_hover";
		//文字輸入
		var options = {
		strings: [searchText],
		typeSpeed: 80
		};
		
		var typed = new Typed("#展示-搜尋-輸入框-內容", options);
	},1500);
	
		//判斷游標是否移進搜尋框
	if (cursor.getBoundingClientRect().top === 328) {
		cursor.style.display = "none"; //更改游標樣式
	} else {
	}
	
	setTimeout( function() {
		curMove(searchBtnTop + 20, searchBtn.offsetWidth / 2 + searchBtnLeft + 10);
		cursor.className = "游標-箭頭";
		stepShowing("n","n","y","n");
		searchBtn.className = "按鈕_hover";
	},4000);
	
	setTimeout( function() {
		searchBtn.className = "按鈕_focus";
		stepShowing("n","n","n","y");
	},6000);
	
	setTimeout( function() {
		location.href= "https://google.com/search?q=" + searchText;
	},7500);
});

function stepShowing(one,two,three,hard) {
	if (one === "y") {
		one = "";
	} else {
		one = stepHide;
	}
	
	if (two === "y") {
		two = "";
	} else {
		two = stepHide;
	}
	
	if (three === "y") {
		three = "";
	} else {
		three = stepHide;
	}
	
	if (hard === "y") {
		hard = "";
	} else {
		hard = stepHide;
	}
	
	stepOne.className = one;
	stepTwo.className = two;
	stepThree.className = three;
	isThisHard.className = hard;
}

function curMove(posTop,posLeft) {
	"use strict";
	cursor.style.top = posTop + "px";
	cursor.style.left = posLeft + "px";
}