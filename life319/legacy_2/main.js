$(function()
{
  updateScrollAni();
  $("#header-內容-按鈕").find("a").click(function(event)
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