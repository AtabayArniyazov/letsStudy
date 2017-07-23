"use strict"

// ------------------------------------------------------------------------------
var header = document.getElementById("header");

header.addEventListener("click", wichContent, false);

function wichContent(EO) {
	EO = EO || window.event;
	console.log("Id кликнутого элемента " + EO.target.id);

	var targetID = EO.target.id;

	document.getElementById('content').innerHTML = "";
	document.getElementById('content').innerHTML = document.getElementById(targetID + "Content").innerHTML;
}
// ------------------------------------------------------------------------------

window.onload = function(){
    (function showTime(){
        var date = new Date();
        var time = date.getHours()+':'+date.getMinutes();
        document.getElementById('currentTime').innerHTML = time;
        window.setTimeout(showTime, 1000);
    })();
};


$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});