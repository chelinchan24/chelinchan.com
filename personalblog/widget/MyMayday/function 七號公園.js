// JavaScript Document

var now=new Date();
	var spday=new Date(2017,3-1,29);
	
	date=(spday.getTime()-now.getTime())/(24*60*60*1000);
	date=Math.ceil(date); 
	
	if (date < 0) 
  	{
  		date = 0;
  	};
	
　	document.getElementById("park").value = (date);


//CheLinChan.com