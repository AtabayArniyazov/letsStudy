"use strict"

// ------------------------------------------------------------------------------
var header = document.getElementById("header");

header.addEventListener("click", wichContent, false);

function wichContent(EO) {
	EO = EO || window.event;
	console.log("Id кликнутого элемента " + EO.target.id);

	var targetID = EO.target.id;

	document.getElementById("content").innerHTML = "";
	document.getElementById("content").innerHTML = document.getElementById(targetID + "Content").innerHTML;
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



// work with calendar--------------------------------------------------------------------------------------------------------------------------
document.getElementById("myCalendar").addEventListener("click", calendar, false);

    function calendar(){
        var date = new Date(),
            months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
            dayOfWeek = date.getDay(),
            day = date.getDate(),
            month,
            year = date.getFullYear(),
            fullDate,
            plus6day,
            fullDatePlus6day;

        function fullDate() {
            for (var i = 0; i < months.length; i++) {

                if (date.getMonth() === i) {
                    if (dayOfWeek !== 1) {
                        if (dayOfWeek === 0) {
                            day -= 6;
                        } else {
                            day -= (dayOfWeek - 1);
                        }
                    }

                    fullDate = day + " " + months[i] + " " + year;
                }
            }
        }

        function plusDay(days) {
            for (var i = 0; i < months.length; i++) {
                fullDatePlus6day = new Date(year, date.getMonth(), day);
                fullDatePlus6day.setDate(day+days);

                if (fullDatePlus6day.getMonth() === i) {
                    plus6day = fullDatePlus6day.getDate() + " " + months[i] + " " + fullDatePlus6day.getFullYear();
                }
            }
        }

        fullDate();
        plusDay(6);

        document.getElementById("dateForCalendar").innerHTML = fullDate;
        document.getElementById("dateForCalendar2").innerHTML = plus6day;
        datesOfThedaysOfTheWeek();
    };


function nextWeek() {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        lastDate = document.getElementById("dateForCalendar2").innerHTML.split(" "),
        day = Number(lastDate[0]),
        month,
        year = Number(lastDate[2]),
        new1Date, result1Date, result2Date;

        for (var i = 0; i < months.length; i++) {
            if (lastDate[1] === months[i]) {
                month = i;
            }
        }

        for (var i = 0; i < months.length; i++) {
            new1Date = new Date(year, month, day);
            new1Date.setDate(day+1);

            if (new1Date.getMonth() === i) {
                result1Date = new1Date.getDate() + " " + months[i] + " " + new1Date.getFullYear();
            }
        }

        for (var i = 0; i < months.length; i++) {
            new1Date = new Date(year, month, day);
            new1Date.setDate(day+7);

            if (new1Date.getMonth() === i) {
                result2Date = new1Date.getDate() + " " + months[i] + " " + new1Date.getFullYear();
            }
        }

        document.getElementById("dateForCalendar").innerHTML = result1Date;
        document.getElementById("dateForCalendar2").innerHTML = result2Date;
}

function previousWeek() {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        lastDate = document.getElementById("dateForCalendar2").innerHTML.split(" "),
        day = Number(lastDate[0]),
        month,
        year = Number(lastDate[2]),
        new1Date, result1Date, result2Date;

        for (var i = 0; i < months.length; i++) {
            if (lastDate[1] === months[i]) {
                month = i;
            }
        }

        for (var i = 0; i < months.length; i++) {
            new1Date = new Date(year, month, day);
            new1Date.setDate(day-13);

            if (new1Date.getMonth() === i) {
                result1Date = new1Date.getDate() + " " + months[i] + " " + new1Date.getFullYear();
            }
        }

        for (var i = 0; i < months.length; i++) {
            new1Date = new Date(year, month, day);
            new1Date.setDate(day-7);

            if (new1Date.getMonth() === i) {
                result2Date = new1Date.getDate() + " " + months[i] + " " + new1Date.getFullYear();
            }
        }

        document.getElementById("dateForCalendar").innerHTML = result1Date;
        document.getElementById("dateForCalendar2").innerHTML = result2Date;
}

function datesOfThedaysOfTheWeek() {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        date = new Date(),
        day = date.getDate(),
        month = months[date.getMonth()],
        year = date.getFullYear(),
        new1Date = new Date(year,date.getMonth()+1, day),
        result = [];

        new1Date.setDate(0);
        
        for (var j=0, i = 0; i < 8; i++) {
            var temporary;

            if (day+i <= new1Date.getDate()) {
                temporary = (Number(day) + i) + "/" + (Number(date.getMonth())+1);
                result.push(temporary);
            } else {
                temporary = (j+1) + "/" + (Number(date.getMonth())+1);
                j++;
                result.push(temporary);
            }
        }

        document.getElementById("monday").innerHTML = result[0];
        document.getElementById("tuesday").innerHTML = result[1];
        document.getElementById("wednesday").innerHTML = result[2];
        document.getElementById("thursday").innerHTML = result[3];
        document.getElementById("friday").innerHTML = result[4];
        document.getElementById("saturday").innerHTML = result[5];
        document.getElementById("sunday").innerHTML = result[6];
}

// function datesOfThedaysOfTheWeek() {
//     var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
//         lastDate = document.getElementById("dateForCalendar").innerHTML.split(" "),
//         day = Number(lastDate[0]),
//         month,
//         year = Number(lastDate[2]),
//         new1Date, result1Date, result2Date;

//         for (var i = 0; i < months.length; i++) {
//             if (lastDate[1] === months[i]) {
//                 month = i;
//             }
//         }

//         new1Date = new Date(year, month, day);
//         document.getElementById("monday").innerHTML = new1Date.getDate() + "/" + (Number(new1Date.getMonth())+1);
//         new1Date.setDate(day+1);
//         document.getElementById("tuesday").innerHTML = new1Date.getDate() + "/" + (Number(new1Date.getMonth())+1);
//         new1Date.setDate(day+2);
//         document.getElementById("wednesday").innerHTML = new1Date.getDate() + "/" + (Number(new1Date.getMonth())+1);
//         new1Date.setDate(day+3);
//         document.getElementById("thursday").innerHTML = new1Date.getDate() + "/" + (Number(new1Date.getMonth())+1);
//         new1Date.setDate(day+4);
//         document.getElementById("friday").innerHTML = new1Date.getDate() + "/" + (Number(new1Date.getMonth())+1);
//         new1Date.setDate(day+5);
//         document.getElementById("saturday").innerHTML = new1Date.getDate() + "/" + (Number(new1Date.getMonth())+1);
//         new1Date.setDate(day+6);
//         document.getElementById("sunday").innerHTML = new1Date.getDate() + "/" + (Number(new1Date.getMonth())+1);


//     // document.getElementById(daysOfTheWeek).innerHTML = day + "/" + month;
// }