var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var isFirstLoadPlayState = false;
var play;
function onYouTubeIframeAPIReady()
{
	play = new YT.Player('youtubeVideo',
		{
			height: '500',
			width: '889', // 原500x898
            videoId: "",
	   	    playerVars: {'controls' : 1, 'rel' : 0, 'showinfo' : 0},
            events: 
            {
            	'onReady': onPlayerReady,
            	'onStateChange': onPlayerStateChange
            }
        });
}

function onPlayerReady(event){}

function onPlayerStateChange(event)
{
	if (event.data == YT.PlayerState.PLAYING) // 播放
	{
		if (!isFirstLoadPlayState) 
		{
			play.pauseVideo();
			isFirstLoadPlayState = true;
		}
	}
	else if (event.data == YT.PlayerState.PAUSED) // 暫停
	{}
	else if (event.data == YT.PlayerState.ENDED) //  結束
	{
		parent.frames['player'].playNextLargeView();
	}
	else if (event.data == YT.PlayerState.BUFFERING)//緩衝
	{}
}

function updateLargeView(songname, albumname, ablumCoverSource, currentVideo, currentTime, lyrics, isPlay)
{
	document.getElementById('專輯名稱').textContent = albumname;
	document.getElementById('歌曲名稱').textContent = songname;
	document.getElementById('專輯封面圖片').style["background-image"] = ablumCoverSource;
	document.getElementById('歌詞').innerHTML = lyrics;
	play.loadVideoById(currentVideo);
	play.seekTo(currentTime, false);
	isFirstLoadPlayState = isPlay;
}

function updateLargeViewLyrics(lyrics)
{
	document.getElementById('歌詞').innerHTML = lyrics;
}

function updateLargeViewVolume(volume)
{
	play.setVolume(volume);
}

function updateLatgeViewPlayLater(songData, playNum)
{
	var playLater = document.getElementById('稍後播放內容');
	playLater.innerHTML = '';

	for (var i = playNum + 1; i < songData.length; i++) 
	{
		if (songData[i].songsource) 
		{
			var playLaterDiv = document.createElement('div');
			var playLaterImgDiv = document.createElement('div');
			var playLaterAlbumNameDiv = document.createElement('div');
			var playLaterSongDiv = document.createElement('div');

			/* playLaterDiv.className = '一個稍後播放的歌曲';
			playLaterImgDiv.className = '稍後播放封面';
			playLaterAlbumNameDiv.className = '稍後播放專輯名稱';
			playLaterSongDiv.className = '稍後播放歌曲'; */

			// playLaterImgDiv.style["background-image"] = "url('" + data.AlbumCoverSource + "')";
			// playLaterAlbumNameDiv.textContent = song[i].AlbumTitle;
			// playLaterSongDiv.textContent = song[i].SongTitle;

			// playLaterDiv.appendChild(playLaterImgDiv);
			// playLaterDiv.appendChild(playLaterAlbumNameDiv);
			// playLaterDiv.appendChild(playLaterSongDiv);

			// playLaterDiv.data = i;
			// playLaterDiv.onclick = function()
			// {
				// parent.frames['player'].playLaterVideo(this.data);
			// }

			// playLater.appendChild(playLaterDiv);
		}
	}
}

function closeLaygeView()
{
	var isPlay = play.getPlayerState() == 1;
	play.pauseVideo();
	var currentTime = play.getCurrentTime();
	var volume = play.getVolume();
	
	parent.frames['player'].closeLaygeView(currentTime, isPlay);
	parent.frames['player'].syncLargeViewVolume(volume);
}

