var faqArticle = $('.關於-問與答-條目');
var faqArticleDec = $('.關於-問與答-條目-內文');


$(document).on('ready', function () {
    faqInit()
})

$(window).resize(function () {
    faqArticleDec.each(function() {
        $(this).attr('style','')
    })
})

function faqInit() {
    faqArticleDec.each(function() {
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
