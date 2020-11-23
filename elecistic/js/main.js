// 導覽列
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 70) {
        $('#導覽列-行動版').addClass("導覽列-行動版_捲動");
		$('#導覽列').addClass("導覽列_捲動");
    } else {
        console.log('a');
        $('#導覽列-行動版').removeClass("導覽列-行動版_捲動");
		$('#導覽列').removeClass("導覽列_捲動");
    }
});

window.onload = function(){
	//行動版導覽列選單
	document.getElementById("導覽列-行動版-導覽列-選單按鈕").onclick = function (){
		var menu = document.getElementById("導覽列-行動版-選單");
		var bg = document.getElementById("導覽列-行動版-遮罩");
		menu.style.visibility = "visible";
		menu.style.opacity = "1";
		bg.style.visibility = "visible";
		bg.style.opacity = "0.7";
		$('#導覽列-行動版').addClass("導覽列-行動版_捲動");
	};
	
	//行動版導覽列遮罩
	document.getElementById("導覽列-行動版-遮罩").onclick = function (){
		var menu = document.getElementById("導覽列-行動版-選單");
		var bg = document.getElementById("導覽列-行動版-遮罩");
		menu.style.visibility = "hidden";
		menu.style.opacity = "0";
		bg.style.visibility = "hidden";
		bg.style.opacity = "0";
	};
};


$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
