var request = new XMLHttpRequest();
request.open('GET', './content/合輯.json');
request.responseType = 'json';
request.send();

request.onload = function()
{
  var data = request.response;

  var playlistList = data['playlistList'];

  var playlist = document.getElementById('playlist');

  for (var i = 0; i < playlistList.length; i++)
  {
    var oneplaylist = document.createElement('div');
    var form = document.createElement('form');
    var button = document.createElement('button');
    var nameDiv = document.createElement('div');
    var infoDiv = document.createElement('div');

    oneplaylist.className = '一張合輯';

    form.action = 'playlist.php';
    form.method = 'post';

    button.type = 'submit';
    button.name = 'playlist-source';
    button.className = '合輯封面';

    nameDiv.className = '合輯名稱';

    infoDiv.className = '合輯資訊';

    loadData(playlistList[i].playlistSource, button, nameDiv, infoDiv);

    form.appendChild(button);
    form.appendChild(nameDiv);
    form.appendChild(infoDiv);
    oneplaylist.appendChild(form);
    playlist.appendChild(oneplaylist);
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
    name.textContent = data1.title;
    info.textContent = data1.description;
  }
}
