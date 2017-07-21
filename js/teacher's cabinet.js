"use strict"

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

function notice1() {
	document.getElementById('content').innerHTML = "";
	document.getElementById('content').innerHTML = document.getElementById('notice1').innerHTML;
}

function message1() {
	document.getElementById('content').innerHTML = "";
	document.getElementById('content').innerHTML = document.getElementById('message1').innerHTML;
}