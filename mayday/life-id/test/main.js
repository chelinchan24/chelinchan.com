var employeeNameInput = document.getElementById('製作證件-右半部-員工資料-姓名-音鋪');
var employeeTitleInput = document.getElementById('製作證件-右半部-員工資料-職稱-音鋪');
var employeeDepartmentInput = document.getElementById('製作證件-右半部-員工資料-部門-音鋪');
var employeeYearInput = document.getElementById('製作證件-右半部-員工資料-到職日-年份-音鋪');
var employeeMonthInput = document.getElementById('製作證件-右半部-員工資料-到職日-月份-音鋪');
var employeeDateInput = document.getElementById('製作證件-右半部-員工資料-到職日-日期-音鋪');


var employeeName = document.getElementById('製作證件-左半部-員工證-大名');
var employeeTitle = document.getElementById('製作證件-左半部-員工證-職稱');
var employeeDepartment = document.getElementById('製作證件-左半部-員工證-部門');
var employeeYear = document.getElementById('員工證_製作證件-年份');
var employeeMonth = document.getElementById('員工證_製作證件-月份');
var employeeDate = document.getElementById('員工證_製作證件-日期');


var employeeNameValue = employeeNameInput.value;
var employeeTitleValue = employeeTitleInput.value;
var employeeDepartmentValue = employeeDepartmentInput.value;
var employeeDateValue = employeeYearInput + ' / ' + employeeMonthInput.value + ' / ' + employeeDateInput.value;


var employeeContentStyle = document.getElementById('製作證件-左半部-員工證');


var chooseCard = document.getElementsByClassName('製作證件_右半部_段落_段落-選項-按鈕-已選擇')[0].id;
var chooseSize = document.getElementsByClassName('製作證件_右半部_段落_段落-選項-按鈕-已選擇')[1].id;


var chooseSizeInfo = document.getElementById('製作證件-左半部-員工證-尺寸');
var chooseSizeInfoCard = '5.4 * 8.6 公分。實際大小將因列表機而異。';
var chooseSizeInfoB7= '8.8* 12.5 公分。實際大小將因列表機而異。';

var chooseSizeType;
var chooseSizeTypeCard = "信用卡尺寸";
var chooseSizeTypeB7 = "B7紙張尺寸"


var holeCheckBox = document.getElementById('製作證件-右半部-樣式-孔位-checkbox');

var nameMaxLength;

//Input 輸入文字
employeeNameInput.addEventListener('input', function (){
	if(!check_Maxlen(employeeNameInput,employeeNameInput.value,18)) {
		employeeName.innerHTML = employeeNameInput.value;
	}
}, false);

employeeTitleInput.addEventListener('input', function (){
	if(!check_Maxlen(employeeTitleInput,employeeTitleInput.value,20)) {
		employeeTitle.innerHTML = employeeTitleInput.value;
	}
}, false);

employeeDepartmentInput.addEventListener('input', function (){
	if(!check_Maxlen(employeeDepartmentInput,employeeDepartmentInput.value,15)) {
		employeeDepartment.innerHTML = employeeDepartmentInput.value;
	}
}, false);

employeeYearInput.addEventListener('input', function (){
	employeeYearInput.maxLength = 4;
	employeeYear.innerHTML = employeeYearInput.value;
}, false);

employeeMonthInput.addEventListener('input', function (){
	employeeMonthInput.maxLength = 2;
	employeeMonth.innerHTML = employeeMonthInput.value;
}, false);

employeeDateInput.addEventListener('input', function (){
	employeeDateInput.maxLength = 2;
	employeeDate.innerHTML = employeeDateInput.value;
}, false);

var checkMaxlen;
var checkfieldname;
var checkf_len;
var typingDisable;

function check_Maxlen(inputName,fieldname,Maxlen)
  {
    var i,f_len,strPN
    f_len = 0;
	maxLength = 0;
    for (i=0;i<fieldname.length;i++)
		{
		  strPN = escape(fieldname.charAt(i)) ;
		  if ((strPN.indexOf('%u'))!= -1)
		  {
			f_len = f_len + 2 ;
			maxLength = maxLength  +1;
		  }      //'若為中文,長度+2
		  else
		  {
			f_len = f_len + 1 ;
			maxLength = maxLength  +1;
		  }      //'若為英文,長度+1
		}
		if (f_len>Maxlen)
		{
		  maxLength = maxLength;
		  lockInput(inputName, maxLength);
		  return true;
		}
    return false;
  }

function lockInput(input, length) {
	console.log("字數已滿"+length);
	input.maxLength = length;
}


$('#製作證件-右半部-員工資料-到職日-年份-音鋪').focus(function() {
    $(this).parent().addClass('製作證件-右半部-員工資料-到職日-輸入-focus');
}) .blur(function() {
    $( "#製作證件-右半部-員工資料-到職日-輸入" ).removeClass('製作證件-右半部-員工資料-到職日-輸入-focus');
});

$('#製作證件-右半部-員工資料-到職日-月份-音鋪').focus(function() {
    $(this).parent().addClass('製作證件-右半部-員工資料-到職日-輸入-focus');
}) .blur(function() {
    $( "#製作證件-右半部-員工資料-到職日-輸入" ).removeClass('製作證件-右半部-員工資料-到職日-輸入-focus');
});

$('#製作證件-右半部-員工資料-到職日-日期-音鋪').focus(function() {
    $(this).parent().addClass('製作證件-右半部-員工資料-到職日-輸入-focus');
}) .blur(function() {
    $( "#製作證件-右半部-員工資料-到職日-輸入" ).removeClass('製作證件-右半部-員工資料-到職日-輸入-focus');
});

//證件
$("#製作證件-右半部-樣式-卡面-選項-黑1").click(function()
{
	$("#製作證件-右半部-樣式-卡面-選項-黑1").addClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  	$("#製作證件-右半部-樣式-卡面-選項-黑2").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
	$("#製作證件-右半部-樣式-卡面-選項-白1").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
	$("#製作證件-右半部-樣式-卡面-選項-白2").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  cleanEmployeeStyle();
  if($("#製作證件-左半部-員工證").hasClass("員工證_B7"))
  {
    $("#製作證件-左半部-員工證").addClass("員工證_B7-黑1")
                         .addClass("員工證_暗");
  }
  else
  {
    $("#製作證件-左半部-員工證").addClass("員工證_信用卡-黑1")
                         .addClass("員工證_暗");
  }
});

$("#製作證件-右半部-樣式-卡面-選項-黑2").click(function()
{
	$("#製作證件-右半部-樣式-卡面-選項-黑2").addClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  	$("#製作證件-右半部-樣式-卡面-選項-白1").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
	$("#製作證件-右半部-樣式-卡面-選項-白2").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
	$("#製作證件-右半部-樣式-卡面-選項-黑1").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  cleanEmployeeStyle();
  if($("#製作證件-左半部-員工證").hasClass("員工證_B7"))
  {
    $("#製作證件-左半部-員工證").addClass("員工證_B7-黑2")
                         .addClass("員工證_暗");
  }
  else
  {
    $("#製作證件-左半部-員工證").addClass("員工證_信用卡-黑2")
                         .addClass("員工證_暗");
  }
});

$("#製作證件-右半部-樣式-卡面-選項-白1").click(function()
{
	$("#製作證件-右半部-樣式-卡面-選項-白1").addClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  	$("#製作證件-右半部-樣式-卡面-選項-白2").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
	$("#製作證件-右半部-樣式-卡面-選項-黑1").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
	$("#製作證件-右半部-樣式-卡面-選項-黑2").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  cleanEmployeeStyle();
  if($("#製作證件-左半部-員工證").hasClass("員工證_B7"))
  {
    $("#製作證件-左半部-員工證").addClass("員工證_B7-白1")
                         .addClass("員工證_亮");
  }
  else
  {
    $("#製作證件-左半部-員工證").addClass("員工證_信用卡-白1")
                         .addClass("員工證_亮");
  }
});

$("#製作證件-右半部-樣式-卡面-選項-白2").click(function()
{
	$("#製作證件-右半部-樣式-卡面-選項-白2").addClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  	$("#製作證件-右半部-樣式-卡面-選項-白1").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
	$("#製作證件-右半部-樣式-卡面-選項-黑1").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
	$("#製作證件-右半部-樣式-卡面-選項-黑2").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  
  cleanEmployeeStyle();
  if($("#製作證件-左半部-員工證").hasClass("員工證_B7"))
  {
    $("#製作證件-左半部-員工證").addClass("員工證_B7-白2")
                         .addClass("員工證_亮");
  }
  else
  {
    $("#製作證件-左半部-員工證").addClass("員工證_信用卡-白2")
                         .addClass("員工證_亮");
  }
});

$("#製作證件-右半部-樣式-尺寸-選項-信用卡").click(function()
{
  $("#製作證件-右半部-樣式-尺寸-選項-信用卡").addClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  $("#製作證件-右半部-樣式-尺寸-選項-B7").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇")

  $("#製作證件-左半部-員工證").removeClass("員工證_B7")
                       .addClass("員工證_信用卡");
  changeEmployeeStyleSize();
});

$("#製作證件-右半部-樣式-尺寸-選項-B7").click(function()
{
  $("#製作證件-右半部-樣式-尺寸-選項-B7").addClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇");
  $("#製作證件-右半部-樣式-尺寸-選項-信用卡").removeClass("製作證件_右半部_段落_段落-選項-按鈕-已選擇")

  $("#製作證件-左半部-員工證").removeClass("員工證_信用卡")
                       .addClass("員工證_B7");
  changeEmployeeStyleSize();
});

function cleanEmployeeStyle()
{
  $("#製作證件-左半部-員工證").removeClass('員工證_B7-白1')
                       .removeClass('員工證_B7-白2')
                       .removeClass('員工證_B7-黑1')
                       .removeClass('員工證_B7-黑2')
                       .removeClass('員工證_信用卡-白1')
                       .removeClass('員工證_信用卡-白2')
                       .removeClass('員工證_信用卡-黑1')
                       .removeClass('員工證_信用卡-黑2')
                       .removeClass('員工證_亮')
                       .removeClass('員工證_暗');
}

function changeEmployeeStyleSize()
{	
  if($("#製作證件-左半部-員工證").hasClass("員工證_信用卡"))
  {
    if($("#製作證件-左半部-員工證").hasClass("員工證_B7-白1"))
    {
      $("#製作證件-左半部-員工證").removeClass("員工證_B7-白1")
                           .addClass("員工證_信用卡-白1");
    }
    else if($("#製作證件-左半部-員工證").hasClass("員工證_B7-白2"))
    {
      $("#製作證件-左半部-員工證").removeClass("員工證_B7-白2")
                           .addClass("員工證_信用卡-白2");
    }
    else if($("#製作證件-左半部-員工證").hasClass("員工證_B7-黑1"))
    {
      $("#製作證件-左半部-員工證").removeClass("員工證_B7-黑1")
                           .addClass("員工證_信用卡-黑1");
    }
    else if($("#製作證件-左半部-員工證").hasClass("員工證_B7-黑2"))
    {
      $("#製作證件-左半部-員工證").removeClass("員工證_B7-黑2")
                           .addClass("員工證_信用卡-黑2");
    }
  }
  else
  {
    if($("#製作證件-左半部-員工證").hasClass("員工證_信用卡-白1"))
    {
      $("#製作證件-左半部-員工證").removeClass("員工證_信用卡-白1")
                           .addClass("員工證_B7-白1");
    }
    else if($("#製作證件-左半部-員工證").hasClass("員工證_信用卡-白2"))
    {
      $("#製作證件-左半部-員工證").removeClass("員工證_信用卡-白2")
                           .addClass("員工證_B7-白2");
    }
    else if($("#製作證件-左半部-員工證").hasClass("員工證_信用卡-黑1"))
    {
      $("#製作證件-左半部-員工證").removeClass("員工證_信用卡-黑1")
                           .addClass("員工證_B7-黑1");
    }
    else if($("#製作證件-左半部-員工證").hasClass("員工證_信用卡-黑2"))
    {
      $("#製作證件-左半部-員工證").removeClass("員工證_信用卡-黑2")
                           .addClass("員工證_B7-黑2");
    }
  }

	showChooseSizeInfo();
}

//辨識目前卡片大小

window.onload = function () {
	showChooseSizeInfo();
};

function showChooseSizeInfo() {
	chooseSize = document.getElementsByClassName('製作證件_右半部_段落_段落-選項-按鈕-已選擇')[1].id;
	
	if ( chooseSize === "製作證件-右半部-樣式-尺寸-選項-信用卡") {
			chooseSizeInfo.innerHTML = chooseSizeInfoCard;
			chooseSizeType = chooseSizeTypeCard;
	} else {
			chooseSizeInfo.innerHTML = chooseSizeInfoB7;
			chooseSizeType = chooseSizeTypeB7;
	} 
}

//視窗
var doneBtn = document.getElementById('產生按鈕-做好了');
var popWindowBg = document.getElementById('整頁視窗-遮罩');
var popWindowCloseBtn = document.getElementById('整頁視窗-下載-關閉');
var popWindowThanksBack = document.getElementById('整頁視窗-感謝您-上一步');

var popWindow = document.getElementById('整頁視窗');
var popWindowDownload = document.getElementById('整頁視窗-視窗-下載');
var popWindowThanks = document.getElementById('整頁視窗-視窗-感謝您');

var downloadBtnJustImage = document.getElementById('整頁視窗-視窗-下載-下載選項-左-下載純圖片');
var downloadBtnA4 = document.getElementById('整頁視窗-視窗-下載-下載選項-右-下載A4');

var popNotDownloading = document.getElementById('整頁視窗-視窗-感謝您-無法下載');
var popWindowNotDownload = document.getElementById('整頁視窗-視窗-沒有下載');
var popNotDownloadingBack = document.getElementById('整頁視窗-沒有下載-上一步');
	
doneBtn.onclick = function() {
	
	employeeNameValue = employeeNameInput.value;
	employeeTitleValue = employeeTitleInput.value;
	employeeDepartmentValue = employeeDepartmentInput.value;
	employeeDateValue = employeeYearInput + ' / ' + employeeMonthInput.value + ' / ' + employeeDateInput.value;
	
	if ( employeeNameValue == '' ) {
		alert('別忘了填寫您的大名哦！');
		return false;
	} else if ( employeeTitleValue == '') {
		alert('別忘了填寫您的職稱哦！');
		return false;
	} else if ( employeeDepartmentValue == '') {
		alert('別忘了填寫您的部門哦！');
		return false;
	} else if (  employeeYearInput.value == '') {
		alert('別忘了填寫您的到職日哦！');
		return false;
	} else if ( employeeMonthInput.value == '' ) {
		alert('別忘了填寫您的到職日哦！');
		return false;
	} else if ( employeeDateInput.value == '' ) {
		alert('別忘了填寫您的到職日哦！');
		return false;
	} 
	
	popWindow.className = "整頁視窗-顯示";
	popWindowDownload.className = "整頁視窗-視窗-顯示";
	popWindowThanks.className = "整頁視窗-視窗-隱藏";
	popWindowNotDownload.className = "整頁視窗-視窗-隱藏";
	$('body').addClass('停止捲動');
};

popWindowBg.onclick = function() {
	popWindow.className = "整頁視窗-隱藏";
	$('body').removeClass('停止捲動');
};

popWindowCloseBtn.onclick = function() {
	popWindow.className = "整頁視窗-隱藏";
	$('body').removeClass('停止捲動');
};

popWindowThanksBack.onclick = function() {
	popWindowDownload.className = "整頁視窗-視窗-顯示";
	popWindowThanks.className = "整頁視窗-視窗-隱藏";
}

popNotDownloading.onclick = function() {
	popWindowNotDownload.className = "整頁視窗-視窗-顯示";
	popWindowThanks.className = "整頁視窗-視窗-隱藏";
}

popNotDownloadingBack.onclick = function() {
	popWindowNotDownload.className = "整頁視窗-視窗-隱藏";
	popWindowThanks.className = "整頁視窗-視窗-顯示";
}

//產生證件
var justImageButton = document.getElementById("整頁視窗-視窗-下載-下載選項-左-下載純圖片");
var a4Button = document.getElementById("整頁視窗-視窗-下載-下載選項-右-下載A4");

var canvas = document.getElementById("證件輸出-繪製");
var ctx;
var image;
	
	//卡片樣式
var cardWhite1 = './id/card-white-1.jpg';
var cardWhite2 = './id/card-white-2.jpg';
var cardBlack1 = './id/card-black-1.jpg';
var cardBlack2 = './id/card-black-2.jpg';

	//B7紙張樣式
var B7White1 = './id/B7-white-1.jpg';
var B7White2 = './id/B7-white-2.jpg';
var B7Black1 = './id/B7-black-1.jpg';
var B7Black2 = './id/B7-black-2.jpg';

	//A4 畫板
var paperWidth = 2480;
var paperHeight = 3508;

	// 信用卡尺寸
var cardWidth = 644; //638
var cardHeight = 1022; //1016
	
	// B7 紙張尺寸
var B7Width = 1045; //1039
var B7Height = 1482; //1476

var textBlack = "#000000"
var textWhite = "#ffffff"


var cardNamePosX = 63;
var cardNamePosY = 523;

var cardTitlePosX = 63;
var cardTitlePosY = 589;

var cardDepartmentPosX = 63;
var cardDepartmentPosY = 741;

var cardDatePosX = 340;
var cardDatePosY = 741;


var B7NamePosX = 112;
var B7NamePosY = 793;

var B7TitlePosX = 112;
var B7TitlePosY = 889;

var B7DepartmentPosX = 112;
var B7DepartmentPosY = 1109;

var B7DatePosX = 565;
var B7DatePosY = 1109;


	//產生純圖片員工證
justImageButton.onclick = function () {
	ctx = canvas.getContext('2d');
	image = new Image();

	employeeNameValue = employeeNameInput.value;
	employeeTitleValue = employeeTitleInput.value;
	employeeDepartmentValue = employeeDepartmentInput.value;
	employeeDateValue = employeeYearInput.value + ' / ' + employeeMonthInput.value + ' / ' + employeeDateInput.value;
	
	chooseCard = document.getElementsByClassName('製作證件_右半部_段落_段落-選項-按鈕-已選擇')[0].id;
	chooseSize = document.getElementsByClassName('製作證件_右半部_段落_段落-選項-按鈕-已選擇')[1].id;

	if ( chooseCard === "製作證件-右半部-樣式-卡面-選項-白1") {
		if ( chooseSize === "製作證件-右半部-樣式-尺寸-選項-信用卡") {
			idGen("card",cardWidth,cardHeight,cardWhite1,textBlack);
		} else {
			idGen("B7",B7Width,B7Height,B7White1,textBlack);
		}
	} else if ( chooseCard === "製作證件-右半部-樣式-卡面-選項-白2") {
		if ( chooseSize === "製作證件-右半部-樣式-尺寸-選項-信用卡") {
			idGen("card",cardWidth,cardHeight,cardWhite2,textBlack);
		} else {
			idGen("B7",B7Width,B7Height,B7White2,textBlack);
		}
	} else if ( chooseCard === "製作證件-右半部-樣式-卡面-選項-黑1") {
		if ( chooseSize === "製作證件-右半部-樣式-尺寸-選項-信用卡") {
			idGen("card",cardWidth,cardHeight,cardBlack1,textWhite);
		} else {
			idGen("B7",B7Width,B7Height,B7Black1,textWhite);
		}
	} else if ( chooseCard === "製作證件-右半部-樣式-卡面-選項-黑2") {
		if ( chooseSize === "製作證件-右半部-樣式-尺寸-選項-信用卡") {
			idGen("card",cardWidth,cardHeight,cardBlack2,textWhite);
		} else {
			idGen("B7",B7Width,B7Height,B7Black2,textWhite);
		}
	} 
	
	popWindowDownload.className = "整頁視窗-視窗-隱藏";
	popWindowThanks.className = "整頁視窗-視窗-顯示";
};

	//產生A4員工證
a4Button.onclick = function () {
	console.log('a4');
	ctx = canvas.getContext('2d');
	image = new Image();

	employeeNameValue = employeeNameInput.value;
	employeeTitleValue = employeeTitleInput.value;
	employeeDepartmentValue = employeeDepartmentInput.value;
	employeeDateValue = employeeYearInput.value + ' / ' + employeeMonthInput.value + ' / ' + employeeDateInput.value;
	
	chooseCard = document.getElementsByClassName('製作證件_右半部_段落_段落-選項-按鈕-已選擇')[0].id;
	chooseSize = document.getElementsByClassName('製作證件_右半部_段落_段落-選項-按鈕-已選擇')[1].id;

	if ( chooseCard === "製作證件-右半部-樣式-卡面-選項-白1") {
		if ( chooseSize === "製作證件-右半部-樣式-尺寸-選項-信用卡") {
			idGenA4("card",cardWidth,cardHeight,cardWhite1,textBlack);
		} else {
			idGenA4("B7",B7Width,B7Height,B7White1,textBlack);
		}
	} else if ( chooseCard === "製作證件-右半部-樣式-卡面-選項-白2") {
		if ( chooseSize === "製作證件-右半部-樣式-尺寸-選項-信用卡") {
			idGenA4("card",cardWidth,cardHeight,cardWhite2,textBlack);
		} else {
			idGenA4("B7",B7Width,B7Height,B7White2,textBlack);
		}
	} else if ( chooseCard === "製作證件-右半部-樣式-卡面-選項-黑1") {
		if ( chooseSize === "製作證件-右半部-樣式-尺寸-選項-信用卡") {
			idGenA4("card",cardWidth,cardHeight,cardBlack1,textWhite);
		} else {
			idGenA4("B7",B7Width,B7Height,B7Black1,textWhite);
		}
	} else if ( chooseCard === "製作證件-右半部-樣式-卡面-選項-黑2") {
		if ( chooseSize === "製作證件-右半部-樣式-尺寸-選項-信用卡") {
			idGenA4("card",cardWidth,cardHeight,cardBlack2,textWhite);
		} else {
			idGenA4("B7",B7Width,B7Height,B7Black2,textWhite);
		}
	} 
	
	popWindowDownload.className = "整頁視窗-視窗-隱藏";
	popWindowThanks.className = "整頁視窗-視窗-顯示";
};
	
var namePosX;
var titlePosX;
var departmentPosX;
var datePosX;

var namePosY;
var titlePosY;
var departmentPosY;
var datePosY;

var nameFontSize;
var	titleFontSize;
var	departmentFontSize;
var	dateFontSize;
	
function idGen(size,w,h,style,textColor) {
	getInfoPosSize(size);
	
	console.log(size,w,h,style,textColor);
	
	canvas.width = w;
	canvas.height = h;
	image.onload = function() {
		ctx.drawImage(this, 0, 0, w, h);
		drawText(employeeNameValue,nameFontSize,namePosX,namePosY,'bold',textColor);
		drawText(employeeTitleValue,titleFontSize,titlePosX,titlePosY,'400',textColor);
		drawText(employeeDepartmentValue,departmentFontSize,departmentPosX,departmentPosY,'bold',textColor);
		drawText(employeeDateValue,dateFontSize,datePosX,datePosY,'bold',textColor);
		
		console.log(employeeDateValue,dateFontSize,datePosX,datePosY);
		
		exportId();
};	
	image.src = style;
}

function idGenA4(size,w,h,style,textColor) {
	getInfoPosSize(size);
	
	canvas.width = 2480;
	canvas.height = 3508;
	ctx.rect(0,0,2480,3508);
	ctx.fillStyle="#ffffff";
	ctx.fill();
	image.onload = function() {
		ctx.drawImage(this, 0, 0, w, h);
		drawText(employeeNameValue,nameFontSize,namePosX,namePosY,'bold',textColor);
		drawText(employeeTitleValue,titleFontSize,titlePosX,titlePosY,'400',textColor);
		drawText(employeeDepartmentValue,departmentFontSize,departmentPosX,departmentPosY,'bold',textColor);
		drawText(employeeDateValue,dateFontSize,datePosX,datePosY,'bold',textColor);
		exportId();
	};	
	image.src = style;
}


holeCheckBox.addEventListener( 'change', function() {
	console.log('hello');
	if (holeCheckBox.checked === true) {
		cardWhite1 = './id/card-white-1-hole.jpg';
		cardWhite2 = './id/card-white-2-hole.jpg';
		cardBlack1 = './id/card-black-1-hole.jpg';
		cardBlack2 = './id/card-black-2-hole.jpg';
		
		B7White1 = './id/B7-white-1-hole.jpg';
		B7White2 = './id/B7-white-2-hole.jpg';
		B7Black1 = './id/B7-black-1-hole.jpg';
		B7Black2 = './id/B7-black-2-hole.jpg';
	} else {
		cardWhite1 = './id/card-white-1.jpg';
		cardWhite2 = './id/card-white-2.jpg';
		cardBlack1 = './id/card-black-1.jpg';
		cardBlack2 = './id/card-black-2.jpg';
		
		B7White1 = './id/B7-white-1.jpg';
		B7White2 = './id/B7-white-2.jpg';
		B7Black1 = './id/B7-black-1.jpg';
		B7Black2 = './id/B7-black-2.jpg';
	}
});

function getInfoPosSize (size) {
	
	if (size === "B7") {
		namePosX = B7NamePosX;
		titlePosX = B7TitlePosX;
		departmentPosX = B7DepartmentPosX;
		datePosX = B7DatePosX;
		
		namePosY = B7NamePosY;
		titlePosY = B7TitlePosY;
		departmentPosY = B7DepartmentPosY;
		datePosY = B7DatePosY;
		
		nameFontSize = 68;
		titleFontSize = 51;
		departmentFontSize = 45;
		dateFontSize = 45;
		
	} else {
		namePosX = cardNamePosX;
		titlePosX = cardTitlePosX;
		departmentPosX = cardDepartmentPosX;
		datePosX = cardDatePosX;
		
		namePosY = cardNamePosY;
		titlePosY = cardTitlePosY;
		departmentPosY = cardDepartmentPosY;
		datePosY = cardDatePosY;
		
		nameFontSize = 46;
		titleFontSize = 35;
		departmentFontSize = 31;
		dateFontSize = 31;
	}
}

function drawText(text,size,x,y,weight,color) {
	ctx.save();
	ctx.fillStyle = color;
	ctx.textBaseline = "hanging"; 
	ctx.font = weight + ' ' + size + 'px Noto Sans TC';
	console.log(weight);
	ctx.fillText(text,x,y);
	ctx.restore();
}

function exportId () {
	var idResult = canvas.toDataURL("image/jpeg");   /*.replace("image/jpeg", "image/octet-stream");*/
	
	var image = new Image();
	image.id = "idExport";
	image.src = idResult;
	console.log = image;
	document.getElementById('整頁視窗-視窗-沒有下載-員工證輸出').appendChild(image);
	
	var a = document.createElement('a');
         a.href = idResult;
         a.download = '人生無限公司_' + employeeDepartmentValue + '_' + employeeNameValue + '_員工證_' + chooseSizeType + '.jpg';
         a.click();
}