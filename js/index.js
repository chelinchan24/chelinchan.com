$(window).ready(function () {
    showCaseLast();
});

$( window ).resize(function() {
    showCaseLast();
});

function showCaseLast() {
    $('#首頁-作品-最後').css('height', $('#首頁-作品-主要').height())
    $('#首頁-作品-最後-作品').css('width',  $('#首頁-作品-最後-作品').height());
};

/* 超人 */
var supermanPreview = $('#首頁-超人-預覽-影片')
var supermanEmbed = $('#首頁-超人-影片-嵌入')
var supermanVideoBox = $('#首頁-超人-影片')
var supermanVideoBoxBg = $('#首頁-超人-影片-背景')
var supermanPreviewBox = $('#首頁-超人-預覽')

var supermanVideoSrc = supermanEmbed.attr('src');

supermanEmbed.css("width", supermanEmbed.height() * 1.77)


$( window ).resize(function() {
    supermanEmbed.css("width", supermanEmbed.height() * 1.77)
});

supermanPreviewBox.on('click', function () {
    supermanPreview.trigger('pause');
    supermanVideoBox.attr('class', '顯示')
    supermanEmbed.attr('src', supermanVideoSrc)
    supermanPreviewBox.css('opacity', '0.5')
})

supermanVideoBoxBg.on('click', function () {
    supermanPreview.trigger('play');
    supermanVideoBox.attr('class', '隱藏')
    supermanEmbed.attr('src', '')
    supermanPreviewBox.css('opacity', '1')
})