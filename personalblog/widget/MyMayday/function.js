// JavaScript Document

var now=new Date();
	var spday=new Date(2017,3-1,18);
	
	date=(spday.getTime()-now.getTime())/(24*60*60*1000);
	date=Math.ceil(date); 
	
	if (date < 0) 
  	{
  		date = 0;
  	};
	
　	document.getElementById("LIFE-3-18").value = (date);

var now2=new Date();
	var spday2=new Date(2017,3-1,19);
	
	date2=(spday2.getTime()-now2.getTime())/(24*60*60*1000);
	date2=Math.ceil(date2); 
	
	if (date2 < 0) 
  	{
  		date2 = 0;
  	};
	
　	document.getElementById("LIFE-3-19").value = (date2);

var now3=new Date();
	var spday3=new Date(2017,3-1,21);
	
	date3=(spday3.getTime()-now3.getTime())/(24*60*60*1000);
	date3=Math.ceil(date3); 
	
	if (date3 < 0) 
  	{
  		date3 = 0;
  	};
	
　	document.getElementById("LIFE-3-21").value = (date3);

var now4=new Date();
	var spday4=new Date(2017,3-1,20);
	
	date4=(spday4.getTime()-now4.getTime())/(24*60*60*1000);
	date4=Math.ceil(date4); 
	
	if (date4 < 0) 
  	{
  		date4 = 0;
  	};
	
　	document.getElementById("LIFE-3-20").value = (date4);

var now5=new Date();
	var spday5=new Date(2017,3-1,29);
	
	date5=(spday5.getTime()-now5.getTime())/(24*60*60*1000);
	date5=Math.ceil(date5); 
	
	if (date5 < 0) 
  	{
  		date5 = 0;
  	};
	
　	document.getElementById("park").value = (date5);


//CheLinChan.com