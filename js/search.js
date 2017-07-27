"use strict"

$(document).ready(function() {
	// Доп параметры show & hide
	$('#openCloseParametr').show();
	$('#blockParametr').hide();

	$('#openCloseParametr').click(function(event) {
    	event.preventDefault(); // Для того чтобы при нажатии на ссылку не кидало вверх
    	$('#blockParametr').slideToggle();
  	});

	// рейтинг звезд
	
});

function teachersPage(EO) {
	EO = EO || window.event;
	console.log("Id кликнутого элемента " + EO.target.id);
	
	function determineTimeZone() {
		var date = new Date(),
			timeZone;

		if (date.getHours() > date.getUTCHours()) {
			timeZone = " (GMT+" + (Number(date.getHours()) - Number(date.getUTCHours())) + ")";
		}
		if (date.getHours() < date.getUTCHours()) {
			timeZone = " (GMT" + (Number(date.getHours()) - Number(date.getUTCHours())) + ")";
		}
		if (date.getHours() == date.getUTCHours()) {
			timeZone = " (GMT 0";
		}

		return timeZone;
	}

	document.getElementById("mainContent").innerHTML = document.getElementById("teachersPageContent").innerHTML;
	document.getElementById("timeAndTimezone").innerHTML = determineTimeZone();


	// sideDiv position fixed when scrolling and sideDiv => top=0
	var elemPos = document.getElementById("aside").getBoundingClientRect();

	window.onscroll = function() {
		var scrollPos = document.getElementById("aside").getBoundingClientRect();

		if (scrollPos.top < 10) {
			document.getElementById("aside").style.position = "fixed";
			document.getElementById("aside").style.top = 0;
			document.getElementById("aside").style.width = "360px";
		}

		if (document.getElementById("wrap").getBoundingClientRect().top > 0) {
			document.getElementById("aside").style.position = "static";
			document.getElementById("aside").style.top = document.getElementById("wrap").getBoundingClientRect().top;
		}
	}
}