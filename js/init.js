function msieversion()
{
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0) // If Internet Explorer, return version number
    {
        alert('您無法在 Internet Explorer 瀏覽本網站。請使用其它的瀏覽器，謝謝您。');
    }

    return false;
}

$(document).ready(function (){
    setViewHeight();
    msieversion();
})

/* 抓取視窗高度 */
function setViewHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
