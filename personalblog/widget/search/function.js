//
// Search Function Widget For Che-Lin Chan's Personal Blog (SFP) made by CHELINCHAN.com.
// 2017 © CheLinChan.com. All right reserved.
//
// Function.js version 1.0.
//

function justdoit() {

	var input = document.getElementById('widget-search-box').value;
	var url = 'http://personalblog.chelinchan.com/search?q=';
	var SearchByDate = '&max-results=20&by-date=true';

	var makeithappen = window.open(url + input + SearchByDate, "_self");


	makeithappen.force();
}
