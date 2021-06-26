var faqArticle = $('.關於-問與答-條目');
var faqArticleDec = $('.關於-問與答-條目-內文');


$(document).on('ready', function () {
    faqInit()
})

var timer;
var width = $(window).width();

$(window).resize(function () {
    if ($(window).width()==width) return;
    width = $(window).width();
    faqArticleDec.attr('style','') //折衷辦法。還沒有找到方法在 resize 後重新抓取高度。
})

function faqInit() {
    faqArticleDec.each(function() {
        $(this).attr('style','')
        $(this).css('height', $(this).height())
    })
    faqArticle.addClass('收合')
}

$(document).on('click', '.關於-問與答-條目', function (e) {
    if ($(this).hasClass('展開')) {
        $(this).removeClass('展開')
        $(this).addClass('收合')
    } else {
        faqArticle.removeClass('展開')
        faqArticle.addClass('收合')
        $(this).removeClass('收合')
        $(this).addClass('展開')
        $(this).unbind('mouseout');
    }
});

$(document).on('click', '.關於-問與答-條目', function (e) {
        console.log('fuck')
});
