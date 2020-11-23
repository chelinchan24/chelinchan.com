//讀取畫面
$(document).ready(function(){
	function doneLoading() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
    	$('#讀取畫面').addClass('讀取畫面-完成');
		$('#讀取畫面').on('transitionend', function () {
			$('#讀取畫面').remove();
		});
		//$('body').addClass('body-完成');
	}
	setTimeout(doneLoading, 1000);
});

$(function()
{
  updateScrollAni();
  $('body').find("a").click(function(event)
  {
    if (this.hash)
    {
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    }
  });

  $(document).scroll(function(event)
  {
    updateScrollAni();
  });
});

function updateScrollAni()
{
  var curTop = $("header").offset().top + $("header").outerHeight();
  var curBtm = $(window).scrollTop() + $(window).height();
}

var counter = false;

$(document).ready(function(e) {
	
	//故事日期
	function CountdownStart() {
			Date.prototype.addDays = function(days) {
			var date = new Date(this.valueOf());
			date.setDate(date.getDate() + days);
			return date;
		}
		var date1 = new Date("2017/03/19");
		var date2 = new Date();
		var timeDiff = Math.abs(date2.getTime() - date1.getTime());
		var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
		
		var year = document.getElementById("年");
		var mon = document.getElementById("月");
		var day = document.getElementById("日");
		
		var duration = 1300;
		var i = diffDays / duration;
		var interval = setInterval(function(){
			duration -= 50;
			year.textContent = date1.addDays(duration * i).getFullYear();
			mon.textContent = date1.addDays(duration * i).getMonth() + 1;
			day.textContent = date1.addDays(duration * i).getDate();
			
			if(duration <= 0)
			{
				clearInterval(interval);
			}
		}, 50);
	}
	
	$(window).scroll(function() {
		$('.標題容器').each( function(i){
            
            var titleBoxBottom = $(this).offset().top + $(this).scrollTop();
            var windowBottom = $(window).scrollTop() + $(window).height();
			var titleBoxTop = $(this).offset().top - $(window).scrollTop();
            
			
			//動畫進入
            if( windowBottom > titleBoxBottom ){
                $(this).addClass('標題容器-動畫-進入').removeClass('標題容器-動畫-離開');
            }
			
			//動畫離開
			if( titleBoxTop < -70 ){
                $(this).removeClass('標題容器-動畫-進入').addClass('標題容器-動畫-離開');
            } else if ( titleBoxBottom > windowBottom - 0 ){
                $(this).removeClass('標題容器-動畫-進入').addClass('標題容器-動畫-離開');
            } 
            
        }); 
		
		$('#故事-標題-倒數').each( function(i){
            
            var titleBoxBottom = $(this).offset().top + $(this).outerHeight();
            var windowBottom = $(window).scrollTop() + $(window).height();
            
						
			if (counter === false) {
				if( windowBottom > titleBoxBottom ){
					CountdownStart();
					counter = true;
				} else {
				}
			}
        }); 
	});
});

