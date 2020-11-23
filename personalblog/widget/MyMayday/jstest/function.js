/* ------ 數位 ------ */
/* 數位全票 */

function addDigFullPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var DigFullPriceTicketTotal = document.getElementById("DigFullPriceTicketTotal").value;
	var DigFullPricePriceTotal = document.getElementById("DigFullPricePriceTotal").value;

	document.getElementById("Price").value = parseInt(Price) + 270; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("DigFullPriceTicketTotal").value = parseInt(DigFullPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("DigFullPricePriceTotal").value = parseInt(DigFullPricePriceTotal) + 270; /* 在票價單獨計算裡增加票價 */
}

function SubtractDigFullPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var DigFullPriceTicketTotal = document.getElementById("DigFullPriceTicketTotal").value;
	var DigFullPricePriceTotal = document.getElementById("DigFullPricePriceTotal").value;

	if(parseInt(DigFullPriceTicketTotal) > 0) {
	document.getElementById("Price").value = parseInt(Price) - 270; /* 在總價格裡減少一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
	document.getElementById("DigFullPriceTicketTotal").value = parseInt(DigFullPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
	document.getElementById("DigFullPricePriceTotal").value = parseInt(DigFullPricePriceTotal) - 270; /* 在票價單獨計算裡減少票價 */
	}
}

/* 數位早場 */
function addDigEarlyPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var DigEarlyPriceTicketTotal = document.getElementById("DigEarlyPriceTicketTotal").value;
	var DigEarlyPricePriceTotal = document.getElementById("DigEarlyPricePriceTotal").value;

	document.getElementById("Price").value = parseInt(Price) + 250; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("DigEarlyPriceTicketTotal").value = parseInt(DigEarlyPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("DigEarlyPricePriceTotal").value = parseInt(DigEarlyPricePriceTotal) + 250; /* 在票價單獨計算裡增加票價 */

}

function SubtractDigEarlyPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var DigEarlyPriceTicketTotal = document.getElementById("DigEarlyPriceTicketTotal").value;
	var DigEarlyPricePriceTotal = document.getElementById("DigEarlyPricePriceTotal").value;

	if(parseInt(DigEarlyPriceTicketTotal) > 0) {
	document.getElementById("Price").value = parseInt(Price) - 250; /* 在總價格裡減少一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
	document.getElementById("DigEarlyPriceTicketTotal").value = parseInt(DigEarlyPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
	document.getElementById("DigEarlyPricePriceTotal").value = parseInt(DigEarlyPricePriceTotal) - 250; /* 在票價單獨計算裡減少票價 */
	}
}

/* 數位優待票 */
function addDigConcessionPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var DigConcessionPriceTicketTotal = document.getElementById("DigConcessionPriceTicketTotal").value;
	var DigConcessionPricePriceTotal = document.getElementById("DigConcessionPricePriceTotal").value;


	document.getElementById("Price").value = parseInt(Price) + 250; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("DigConcessionPriceTicketTotal").value = parseInt(DigConcessionPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("DigConcessionPricePriceTotal").value = parseInt(DigConcessionPricePriceTotal) + 250; /* 在票價單獨計算裡增加票價 */

}

function SubtractDigConcessionPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var DigConcessionPriceTicketTotal = document.getElementById("DigConcessionPriceTicketTotal").value;
	var DigConcessionPricePriceTotal = document.getElementById("DigConcessionPricePriceTotal").value;

	if(parseInt(DigConcessionPriceTicketTotal) > 0) {
	document.getElementById("Price").value = parseInt(Price) - 250; /* 在總價格裡減少一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
	document.getElementById("DigConcessionPriceTicketTotal").value = parseInt(DigConcessionPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
	document.getElementById("DigConcessionPricePriceTotal").value = parseInt(DigConcessionPricePriceTotal) - 250; /* 在票價單獨計算裡減少票價 */
	}
}

/* 數位半票 */
function addDigHalfPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var DigHalfPriceTicketTotal = document.getElementById("DigHalfPriceTicketTotal").value;
	var DigHalfPricePriceTotal = document.getElementById("DigHalfPricePriceTotal").value;


	document.getElementById("Price").value = parseInt(Price) + 135; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("DigHalfPriceTicketTotal").value = parseInt(DigHalfPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("DigHalfPricePriceTotal").value = parseInt(DigHalfPricePriceTotal) + 135; /* 在票價單獨計算裡增加票價 */

}

function SubtractDigHalfPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var DigHalfPriceTicketTotal = document.getElementById("DigHalfPriceTicketTotal").value;
	var DigHalfPricePriceTotal = document.getElementById("DigHalfPricePriceTotal").value;

	if(parseInt(DigHalfPriceTicketTotal) > 0) {
	document.getElementById("Price").value = parseInt(Price) - 135; /* 在總價格裡減少一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
	document.getElementById("DigHalfPriceTicketTotal").value = parseInt(DigHalfPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
	document.getElementById("DigHalfPricePriceTotal").value = parseInt(DigHalfPricePriceTotal) - 135; /* 在票價單獨計算裡減少票價 */
	}
}



/* ------ 數位3D ------ */
/* 3D全票 */
function addDig3DFullPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var Dig3DFullPriceTicketTotal = document.getElementById("Dig3DFullPriceTicketTotal").value;
	var Dig3DFullPricePriceTotal = document.getElementById("Dig3DFullPricePriceTotal").value;


	document.getElementById("Price").value = parseInt(Price) + 330; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("Dig3DFullPriceTicketTotal").value = parseInt(Dig3DFullPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("Dig3DFullPricePriceTotal").value = parseInt(Dig3DFullPricePriceTotal) + 330; /* 在票價單獨計算裡增加票價 */

}

function SubtractDig3DFullPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var Dig3DFullPriceTicketTotal = document.getElementById("Dig3DFullPriceTicketTotal").value;
	var Dig3DFullPricePriceTotal = document.getElementById("Dig3DFullPricePriceTotal").value;

	if(parseInt(Dig3DFullPriceTicketTotal) > 0) {
	document.getElementById("Price").value = parseInt(Price) - 330; /* 在總價格裡減少一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
	document.getElementById("Dig3DFullPriceTicketTotal").value = parseInt(Dig3DFullPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
	document.getElementById("Dig3DFullPricePriceTotal").value = parseInt(Dig3DFullPricePriceTotal) - 330; /* 在票價單獨計算裡減少票價 */
	}
}

/* 3D早場 */
function addDig3DEarlyPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var Dig3DEarlyPriceTicketTotal = document.getElementById("Dig3DEarlyPriceTicketTotal").value;
	var Dig3DEarlyPricePriceTotal = document.getElementById("Dig3DEarlyPricePriceTotal").value;


		document.getElementById("Price").value = parseInt(Price) + 310; /* 在總價格裡增加一張票價 */
		document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
		document.getElementById("Dig3DEarlyPriceTicketTotal").value = parseInt(Dig3DEarlyPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
		document.getElementById("Dig3DEarlyPricePriceTotal").value = parseInt(Dig3DEarlyPricePriceTotal) + 310; /* 在票價單獨計算裡增加票價 */

}

function SubtractDig3DEarlyPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var Dig3DEarlyPriceTicketTotal = document.getElementById("Dig3DEarlyPriceTicketTotal").value;
	var Dig3DEarlyPricePriceTotal = document.getElementById("Dig3DEarlyPricePriceTotal").value;

	if (parseInt(Dig3DEarlyPriceTicketTotal) > 0) {
		document.getElementById("Price").value = parseInt(Price) - 310; /* 在總價格裡減少一張票價 */
		document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
		document.getElementById("Dig3DEarlyPriceTicketTotal").value = parseInt(Dig3DEarlyPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
		document.getElementById("Dig3DEarlyPricePriceTotal").value = parseInt(Dig3DEarlyPricePriceTotal) - 310; /* 在票價單獨計算裡減少票價 */
	}

}

/* 3D優待票 */
function addDig3DConcessionPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var Dig3DConcessionPriceTicketTotal = document.getElementById("Dig3DConcessionPriceTicketTotal").value;
	var Dig3DConcessionPricePriceTotal = document.getElementById("Dig3DConcessionPricePriceTotal").value;


	document.getElementById("Price").value = parseInt(Price) + 310; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("Dig3DConcessionPriceTicketTotal").value = parseInt(Dig3DConcessionPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("Dig3DConcessionPricePriceTotal").value = parseInt(Dig3DConcessionPricePriceTotal) + 310; /* 在票價單獨計算裡增加票價 */

}

function SubtractDig3DConcessionPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var Dig3DConcessionPriceTicketTotal = document.getElementById("Dig3DConcessionPriceTicketTotal").value;
	var Dig3DConcessionPricePriceTotal = document.getElementById("Dig3DConcessionPricePriceTotal").value;

	if (parseInt(Dig3DConcessionPriceTicketTotal) > 0) {
		document.getElementById("Price").value = parseInt(Price) - 310; /* 在總價格裡減少一張票價 */
		document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
		document.getElementById("Dig3DConcessionPriceTicketTotal").value = parseInt(Dig3DConcessionPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
		document.getElementById("Dig3DConcessionPricePriceTotal").value = parseInt(Dig3DConcessionPricePriceTotal) - 310; /* 在票價單獨計算裡減少票價 */

	}

}


/* 3D半票 */
function addDig3DHalfPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var Dig3DHalfPriceTicketTotal = document.getElementById("Dig3DHalfPriceTicketTotal").value;
	var Dig3DHalfPricePriceTotal = document.getElementById("Dig3DHalfPricePriceTotal").value;


	document.getElementById("Price").value = parseInt(Price) + 165; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("Dig3DHalfPriceTicketTotal").value = parseInt(Dig3DHalfPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("Dig3DHalfPricePriceTotal").value = parseInt(Dig3DHalfPricePriceTotal) + 165; /* 在票價單獨計算裡增加票價 */

}

function SubtractDig3DHalfPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var Dig3DHalfPriceTicketTotal = document.getElementById("Dig3DHalfPriceTicketTotal").value;
	var Dig3DHalfPricePriceTotal = document.getElementById("Dig3DHalfPricePriceTotal").value;

	if (parseInt(Dig3DHalfPriceTicketTotal) > 0) {

		document.getElementById("Price").value = parseInt(Price) - 165; /* 在總價格裡減少一張票價 */
		document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
		document.getElementById("Dig3DHalfPriceTicketTotal").value = parseInt(Dig3DHalfPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
		document.getElementById("Dig3DHalfPricePriceTotal").value = parseInt(Dig3DHalfPricePriceTotal) - 165; /* 在票價單獨計算裡減少票價 */

	}
}

/* ------ IMAX ------ */
/* IMAX全票 */
function addIMAXFullPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var IMAXFullPriceTicketTotal = document.getElementById("IMAXFullPriceTicketTotal").value;
	var IMAXFullPricePriceTotal = document.getElementById("IMAXFullPricePriceTotal").value;


	document.getElementById("Price").value = parseInt(Price) + 340; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("IMAXFullPriceTicketTotal").value = parseInt(IMAXFullPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("IMAXFullPricePriceTotal").value = parseInt(IMAXFullPricePriceTotal) + 340; /* 在票價單獨計算裡增加票價 */

}

function SubtractIMAXFullPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var IMAXFullPriceTicketTotal = document.getElementById("IMAXFullPriceTicketTotal").value;
	var IMAXFullPricePriceTotal = document.getElementById("IMAXFullPricePriceTotal").value;

	if (parseInt(IMAXFullPriceTicketTotal) > 0 ) {

		document.getElementById("Price").value = parseInt(Price) - 340; /* 在總價格裡減少一張票價 */
		document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
		document.getElementById("IMAXFullPriceTicketTotal").value = parseInt(IMAXFullPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
		document.getElementById("IMAXFullPricePriceTotal").value = parseInt(IMAXFullPricePriceTotal) - 340; /* 在票價單獨計算裡減少票價 */

	}
}

/* IMAX早場 */
function addIMAXEarlyPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var IMAXEarlyPriceTicketTotal = document.getElementById("IMAXEarlyPriceTicketTotal").value;
	var IMAXEarlyPricePriceTotal = document.getElementById("IMAXEarlyPricePriceTotal").value;


	document.getElementById("Price").value = parseInt(Price) + 320; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("IMAXEarlyPriceTicketTotal").value = parseInt(IMAXEarlyPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("IMAXEarlyPricePriceTotal").value = parseInt(IMAXEarlyPricePriceTotal) + 320; /* 在票價單獨計算裡增加票價 */

}

function SubtractIMAXEarlyPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var IMAXEarlyPriceTicketTotal = document.getElementById("IMAXEarlyPriceTicketTotal").value;
	var IMAXEarlyPricePriceTotal = document.getElementById("IMAXEarlyPricePriceTotal").value;

	if (parseInt(IMAXEarlyPriceTicketTotal) > 0 ) {

		document.getElementById("Price").value = parseInt(Price) - 320; /* 在總價格裡減少一張票價 */
		document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
		document.getElementById("IMAXEarlyPriceTicketTotal").value = parseInt(IMAXEarlyPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
		document.getElementById("IMAXEarlyPricePriceTotal").value = parseInt(IMAXEarlyPricePriceTotal) - 320; /* 在票價單獨計算裡減少票價 */

	}
}

/* IMAX優待票 */
function addIMAXConcessionPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var IMAXConcessionPriceTicketTotal = document.getElementById("IMAXConcessionPriceTicketTotal").value;
	var IMAXConcessionPricePriceTotal = document.getElementById("IMAXConcessionPricePriceTotal").value;


	document.getElementById("Price").value = parseInt(Price) + 320; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("IMAXConcessionPriceTicketTotal").value = parseInt(IMAXConcessionPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("IMAXConcessionPricePriceTotal").value = parseInt(IMAXConcessionPricePriceTotal) + 320; /* 在票價單獨計算裡增加票價 */

}

function SubtractIMAXConcessionPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var IMAXConcessionPriceTicketTotal = document.getElementById("IMAXConcessionPriceTicketTotal").value;
	var IMAXConcessionPricePriceTotal = document.getElementById("IMAXConcessionPricePriceTotal").value;

	if (parseInt(IMAXConcessionPriceTicketTotal) > 0) {

		document.getElementById("Price").value = parseInt(Price) - 320; /* 在總價格裡減少一張票價 */
		document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
		document.getElementById("IMAXConcessionPriceTicketTotal").value = parseInt(IMAXConcessionPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
		document.getElementById("IMAXConcessionPricePriceTotal").value = parseInt(IMAXConcessionPricePriceTotal) - 320; /* 在票價單獨計算裡減少票價 */

	}
}

/* IMAX半票 */
function addIMAXHalfPrice() { /* 增加 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var IMAXHalfPriceTicketTotal = document.getElementById("IMAXHalfPriceTicketTotal").value;
	var IMAXHalfPricePriceTotal = document.getElementById("IMAXHalfPricePriceTotal").value;


	document.getElementById("Price").value = parseInt(Price) + 170; /* 在總價格裡增加一張票價 */
	document.getElementById("Ticket").value = parseInt(Ticket) + 1; /* 在總票數裡新增一張票 */
	document.getElementById("IMAXHalfPriceTicketTotal").value = parseInt(IMAXHalfPriceTicketTotal) + 1; /*在票價數量單獨計算裡增加票數 */
	document.getElementById("IMAXHalfPricePriceTotal").value = parseInt(IMAXHalfPricePriceTotal) + 170; /* 在票價單獨計算裡增加票價 */

}

function SubtractIMAXHalfPrice() { /* 減少 */
	var Price = document.getElementById("Price").value;
	var Ticket = document.getElementById("Ticket").value;
	var IMAXHalfPriceTicketTotal = document.getElementById("IMAXHalfPriceTicketTotal").value;
	var IMAXHalfPricePriceTotal = document.getElementById("IMAXHalfPricePriceTotal").value;

	if (parseInt(IMAXHalfPriceTicketTotal) > 0) {
		document.getElementById("Price").value = parseInt(Price) - 170; /* 在總價格裡減少一張票價 */
		document.getElementById("Ticket").value = parseInt(Ticket) - 1; /* 在總票數裡減少一張票 */
		document.getElementById("IMAXHalfPriceTicketTotal").value = parseInt(IMAXHalfPriceTicketTotal) - 1; /*在票價數量單獨計算裡減少票數 */
		document.getElementById("IMAXHalfPricePriceTotal").value = parseInt(IMAXHalfPricePriceTotal) - 170; /* 在票價單獨計算裡減少票價 */
	}

}
