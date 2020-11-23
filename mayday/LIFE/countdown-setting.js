$('#clock').countdown('2018/09/30 11:00:00', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span>%D</span> <span id="text">天</span> '
    + '<span>%H</span> <span id="text">小時</span> '
    + '<span>%M</span> <span id="text">分</span> '
    + '<span>%S</span> <span id="text">秒</span> '));
 })
	.on('finish.countdown', function(event) {
  $(this).html('<div id="購票開始">購 票 開 始</div>')
    .parent().addClass('disabled');
});