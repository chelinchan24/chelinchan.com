var now5=new Date();
	var spday5=new Date(2017,6-1,4);

	date5=(spday5.getTime()-now5.getTime())/(24*60*60*1000);
	date5=Math.ceil(date5);

	if (date5 < 0)
  	{
  		date5 = 0;
  	};

　	document.getElementById("hito").value = (date5);


//CheLinChan.com
