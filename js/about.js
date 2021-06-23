var faqArticle = $('.關於-問與答-條目');
var faqArticleDec = $('.關於-問與答-條目-內文');


$(document).on('ready', function () {
    faqInit()
})

var timer;

$(window).resize(function () {
    clearTimeout(timer);
    faqArticleDec.attr('style','position:absolute')
    faqArticleDec.each(function() {
        faqArticle.removeClass('收合')
        faqInit()
    })
    timer = setTimeout(function () {faqArticleDec.attr('style','position:unset')}, 500)
})

function faqInit() {
    faqArticleDec.each(function() {
        $(this).css('height', $(this).height())
    })
    faqArticle.removeClass('展開')
    faqArticle.addClass('收合')
}

$(document).on('click', '.關於-問與答-條目', function (e) {
    if($(this).offsetTop < 0) {
        console.log($(this).offset.top)
        $(this).offset({top: 24})
    }
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
