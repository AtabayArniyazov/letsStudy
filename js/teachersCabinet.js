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
        var date = new Date(),
            time,
            hours,
            minutes;

        if (date.getHours() < 10) {
            hours = "0" + date.getHours();
        } else {
            hours = date.getHours();
        }

        if (date.getMinutes() < 10) {
            minutes = "0" + date.getMinutes();
        } else {
            minutes = date.getMinutes();
        }

        time = hours + ":" + minutes;

        document.getElementById('currentTime').innerHTML = time;

        window.setTimeout(showTime, 1000);
    })();
};


$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});