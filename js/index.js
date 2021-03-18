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

var videoplayed = false;

supermanEmbed.css("width", supermanEmbed.height() * 1.77)


$( window ).resize(function() {
    supermanEmbed.css("width", supermanEmbed.height() * 1.77)
});

supermanPreviewBox.on('click', function () {
    supermanPreview.trigger('pause');
    supermanVideoBox.attr('class', '顯示')
    player.playVideo()
    supermanPreviewBox.css('opacity', '0.5')
    $('html').css('overflow-y', 'hidden')

    gtag('event', 'superman_play', {
        'event_category': 'superman',
        'event_label': 'regret_videos',
    });
})

supermanVideoBoxBg.on('click', function () {
    supermanPreview.trigger('play');
    supermanVideoBox.attr('class', '隱藏')
    player.pauseVideo()
    supermanPreviewBox.css('opacity', '1')
    $('html').css('overflow-y', 'scroll')

    gtag('event', 'superman_close', {
        'event_category': 'superman',
        'event_label': 'regret_videos',
    });

    if (videoplayed === true) {
        showRegret()
    }

})

function showRegret() {
    $('#首頁-超人-文字').attr('class', '顯示')
    $('#首頁-超人-預覽-播放').attr('class', '文字顯示')

    gtag('event', 'superman_end', {
        'event_category': 'superman',
        'event_label': 'regret_videos',
    });
}

function onPlayerStateChange(event) {
    if(event.data === 0) {
        videoplayed = true
    }
}