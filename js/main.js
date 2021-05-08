var isLoading = true;

$(window).load(function() {
    isLoading = false;
    setTimeout('loadingOut()', 1000);
});

$('html').css('overflow-y','hidden')

function loadingOut() {
    $("#讀取").addClass("讀取_離開")
    autoAnimations()
    $('html').css('overflow-y','scroll')
}

/* 動畫 */
var scrollFadeIn = $('.動畫-捲動進入');
var windowBottom = $(window).scrollTop() + $(window).height();

    //自動動畫
function autoAnimations() {
    $(".動畫-淡入").addClass('動畫-淡入_執行');

    scrollFadeIn.each(function (i) {
        if ($(this).offset().top < windowBottom) {
            $(this).addClass('動畫-捲動進入_執行');
            // $(this).css("transition-delay", "0.5s")
        }
    })
}
    //捲動動畫

$(window).scroll(function() {
    scrollFadeIn.each( function(i) {
        var itemBoxBottom = $(this).offset().top + $(this).scrollTop();
        var windowBottom = $(window).scrollTop() + window.innerHeight;
        var itemBoxTop = $(this).offset().top - $(window).scrollTop();

        //動畫進入
        if( windowBottom - 30 > itemBoxBottom ){
            $(this).addClass('動畫-捲動進入_執行');
        }
    });

    $('.動畫-捲動浮出').each( function(i) {
        var itemBoxBottom = $(this).offset().top + $(this).scrollTop();
        var windowBottom = $(window).scrollTop() + window.innerHeight;
        //動畫進入
        if( windowBottom - 50 > itemBoxBottom ){
            $(this).addClass('動畫-捲動浮出_執行').removeClass('動畫-捲動浮出-離開_執行');
        }
    })
});

/* 導覽列 */
var openMenu = $('#導覽列-行動-右-選單_開啟');
var closeMenu = $('#導覽列-行動-右-選單_關閉');
var menuContent = $('#導覽列-行動-內容');
var menuContentShow = '導覽列-行動-內容_展示';
var menuContentHide = '導覽列-行動-內容_隱藏';

var menuContentItem = $('.導覽列-行動-選項')

openMenu.click(function () {
    menu = true;
    setViewHeight()
    menuContent.addClass(menuContentShow).removeClass('動畫-選單-淡出 動畫-選單-淡出_執行').addClass('動畫-選單-淡入 動畫-選單-淡入_執行').removeClass(menuContentHide);
    menuContentItem.addClass('動畫-選單_選項-進入 動畫-選單_選項-進入_執行');
});

closeMenu.click(function () {
    menu = false;
    menuContent.addClass('動畫-選單-淡出 動畫-選單-淡出_執行');
    setTimeout('menuContent.addClass(menuContentHide)', 150);
});

/* 多性別選項 */
$('#導覽列-行動-內容-下-多性別選項').click(function () {
    createGenderWidnow("reSelected")
})

$('#頁腳-多性別選項').click(function () {
    createGenderWidnow("reSelected")
})

/* 作品連結 */
function workLink(link) {
    window.open(link, '_blank');
}
