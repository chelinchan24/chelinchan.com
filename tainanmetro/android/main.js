//地圖樣式切換
var normalMap = "https://chelinchan.com/tainanmetro/maps/images/maps/{z}_{x}_{y}.png";
var simpleMap = "https://chelinchan.com/tainanmetro/maps/images/simplemaps/{z}_{x}_{y}.png";

//地圖設定值
var map = L.map('map', {
    center: [65, -85],
    zoom: 2,
    minZoom: 1,
    maxZoom: 4,
    attributionControl:false,
    zoomControl: false,
});

L.tileLayer(normalMap, {
    noWrap: true,
    tileSize: 256,
}).addTo(map);

$('#輪廓').on('click', function () {
    map.setView([65, -85], 2);

    L.tileLayer(normalMap, {
        noWrap: true,
        tileSize: 256,
    }).addTo(map);
    $('#簡易').removeClass('active')
    $('#輪廓').addClass('active')
})

$('#簡易').on('click', function () {
    map.setView([65, -85], 2);
    L.tileLayer(simpleMap, {
        noWrap: true,
        tileSize: 256,
    }).addTo(map);
    $('#簡易').addClass('active')
    $('#輪廓').removeClass('active')
})

$('#工具列-關於').on('click', function () {
    $('#關於').removeClass('隱藏')
    $('#關於').addClass('顯示')
})

$('#關於-關閉').on('click', function () {
    $('#關於').removeClass('顯示')
    $('#關於').addClass('隱藏')
})
