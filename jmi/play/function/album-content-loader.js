var request = new XMLHttpRequest();
request.open('GET', './content/專輯.json');
request.responseType = 'json';
request.send();

request.onload = function()
{
  var data = request.response;

  var albumList = data['albumList'];

  var album = document.getElementById('album');

  for (var i = 0; i < albumList.length; i++)
  {
    var oneAlbum = document.createElement('div');
    var form = document.createElement('form');
    var button = document.createElement('button');
    var nameDiv = document.createElement('div');
    var infoDiv = document.createElement('div');

    oneAlbum.className = '一張專輯';

    form.action = 'album.php';
    form.method = 'post';

    button.type = 'submit';
    button.name = 'album-source';
    button.className = '專輯封面';

    nameDiv.className = '專輯名稱';

    infoDiv.className = '專輯資訊';

    loadData(albumList[i].albumSource, button, nameDiv, infoDiv);

    form.appendChild(button);
    form.appendChild(nameDiv);
    form.appendChild(infoDiv);
    oneAlbum.appendChild(form);
    album.appendChild(oneAlbum);
  }

}

// json資料, 按鈕, 名稱, 資訊
function loadData(data, button, name, info)
{
  button.value = data;

  var request1 = new XMLHttpRequest();
  request1.open('GET', data);
  request1.responseType = 'json';
  request1.send();

  request1.onload = function()
  {
    var data1 = request1.response;

    button.style["background-image"] = "url('" + data1.AlbumCoverSource + "')";
    button.style["background-size"] = "100%";
    name.textContent = data1.AlbumTitle;
    info.textContent = data1.type + "・" + data1.year;
  }
}
