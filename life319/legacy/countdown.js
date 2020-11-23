// JavaScript Document

var now=new Date();
	var spday=new Date(2017,3-1,19);
	
	date=(spday.getTime()-now.getTime())/(24*60*60*1000);
	date=Math.ceil(date); 
	
　	document.getElementById("countdown").value = (date);