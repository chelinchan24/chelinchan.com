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