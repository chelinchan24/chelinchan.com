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

/* MV */
var MVPreview = $('.MV區塊-預覽-影片')
var MVEmbed = $('#MV-播放器-嵌入')
var MVVideoBox = $('#MV-播放器')
var MVVideoBoxBg = $('#MV-播放器-背景')
var MVPreviewBox = $('#首頁-MV-預覽')

var videoplayed = false;

MVEmbed.css("width", MVEmbed.height() * 1.77)


$( window ).resize(function() {
    MVEmbed.css("width", MVEmbed.height() * 1.77)
});

$('#首頁-時光機-預覽').on('click', function () {
    mvPlay('時光機')
    nowPlaying = '時光機'
})

$('#首頁-超人-預覽').on('click', function () {
    mvPlay('超人')
    nowPlaying = '超人'
})

$('#首頁-倉頡-預覽').on('click', function () {
    mvPlay('倉頡')
    nowPlaying = '倉頡'
})

$('#首頁-勇敢-預覽').on('click', function () {
    mvPlay('勇敢')
    nowPlaying = '勇敢'
})

var nowPlaying;

function mvPlay(mv) {
    if (nowPlaying !== mv) {
        if (mv == '時光機') {
            player.loadVideoById("hKPtVlSW2qA")
        }
        else if (mv == '超人') {
            player.loadVideoById("ptmxLFZkoZ4")
        }
        else if (mv == '倉頡') {
            player.loadVideoById("hiKYufVEUtI")
        }
        else if (mv == '勇敢') {
            player.loadVideoById("S56Zzj-Nmww")
        }
        videoplayed = false;
    }

    console.log(nowPlaying, mv)

    MVPreview.trigger('pause');
    MVVideoBox.attr('class', '顯示')
    player.playVideo()
    MVPreviewBox.css('opacity', '0.5')
    $('html').css('overflow-y', 'hidden')

    gtag('event', mv + '_play', {
        'event_category': 'MV',
        'event_label': 'regret_videos',
    });
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('MV-播放器-嵌入', {
        videoId: '',
        events: {
            onStateChange: onPlayerStateChange
        }
    });
}

MVVideoBoxBg.on('click', function () {
    MVPreview.trigger('play');
    MVVideoBox.attr('class', '隱藏')
    player.pauseVideo()
    MVPreviewBox.css('opacity', '1')
    $('html').css('overflow-y', 'scroll')

    gtag('event', nowPlaying + '_close', {
        'event_category': 'MV',
        'event_label': 'regret_videos',
    });

    if (videoplayed === true) {
        showRegret(nowPlaying)
    }

})

function showRegret(video) {

    var textBox = '#首頁-' + video + '-文字'
    var textPlayBox = '#首頁-' + video + '-預覽-播放'

    $(textBox).addClass('顯示')
    $(textPlayBox).addClass('文字顯示')

    gtag('event', nowPlaying + '_end', {
        'event_category': 'MV',
        'event_label': 'regret_videos',
    });
}

function onPlayerStateChange(event) {
    if(event.data === 0) {
        videoplayed = true
    }
}

var mobileMenuOpenBtn = $('#導覽列-行動-右-選單_開啟')
var mobileMenuCloseBtn = $('#導覽列-行動-右-選單_關閉')
var mobileMenuLogo = $('.導覽列-行動-左-圖標')
var mobileMenuIcon = $('.導覽列-行動-右-選單')

mobileMenuOpenBtn.on('click', function () {
    // mobileMenuLogo.css('filter', 'none')
    mobileMenuIcon.css('filter', 'none')
})

mobileMenuCloseBtn.on('click', function () {
    // mobileMenuLogo.css('filter', 'invert(1)')
    mobileMenuIcon.css('filter', 'invert(1)')
})
