//地圖樣式切換
var normalMap = "https://chelinchan.com/tainanmetro/maps/images/maps/{z}_{x}_{y}.png";
var simpleMap = "https://chelinchan.com/tainanmetro/maps/images/simplemaps/{z}_{x}_{y}.png";

//地圖設定值
var map = L.map('map', {
    center: [65, -85],
    zoom: 2,
    zoomSnap: 0.5,
    minZoom: 1,
    maxZoom: 4,
    attributionControl:false,
    zoomControl: false,
    smoothWheelZoom: true,
});

var imageUrl = './route.svg',
    imageBounds = [
        [200, -200],
        [0, 0]
    ];

L.imageOverlay(imageUrl, imageBounds).addTo(map);

var aboutTab = $("#工具列-選項-關於");
var mapTab = $("#工具列-選項-路網圖")

$('#工具列-選項-關於').on('click', function () {
    $('#關於').removeClass('隱藏')
    $('#關於').addClass('顯示')
    aboutTab.addClass('啟用')
    mapTab.removeClass('啟用')
})

$('#工具列-選項-路網圖').on('click', function () {
    $('#關於').removeClass('顯示')
    $('#關於').addClass('隱藏')
    aboutTab.removeClass('啟用')
    mapTab.addClass('啟用')
})

var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
if(isAndroid) {
    $('#android').css('display', 'block')
}
