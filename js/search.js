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

	calendar();
}


// work with calendar--------------------------------------------------------------------------------------------------------------------------
// document.getElementById("myCalendar").addEventListener("click", calendar, false);

    function calendar(){
        var date = new Date(),
            months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
            dayOfWeek = date.getDay(),
            day = date.getDate(),
            month,
            year = date.getFullYear(),
            fullDate,
            plus6day,
            fullDatePlus6day,
            newDate1 = new Date(year, date.getMonth(), day),
            newDate2 = new Date(year, date.getMonth()+1, day);

            newDate1.setDate(0);
            newDate2.setDate(0);

        if (dayOfWeek === 0) {
            dayOfWeek = 7;
        }


        function fullDate() {
            date.setDate(date.getDate() - (dayOfWeek - 1));
            fullDate = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        }

        function plusDay(days) {
            date.setDate(date.getDate() + 6);
            plus6day = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
        }

        fullDate();
        plusDay(6);

        document.getElementById("dateForCalendar").innerHTML = fullDate;
        document.getElementById("dateForCalendar2").innerHTML = plus6day;
        datesOfThedaysOfTheWeek();
    };


function nextWeek() {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        lastDate1 = document.getElementById("dateForCalendar").innerHTML.split(" "),
        lastDate2 = document.getElementById("dateForCalendar2").innerHTML.split(" "),
        day1 = Number(lastDate1[0]),
        day2 = Number(lastDate2[0]),
        month1,
        month2,
        year1 = Number(lastDate1[2]),
        year2 = Number(lastDate2[2]),
        new1Date, new2Date, result1Date, result2Date;

    for (var i = 0; i < months.length; i++) {
        if (lastDate1[1] === months[i]) {
            month1 = i;
        }
    }

    for (var i = 0; i < months.length; i++) {
        if (lastDate2[1] === months[i]) {
            month2 = i;
        }
    }

    new1Date = new Date(year1, month1, day1);
    new1Date.setDate(day1+7);
    result1Date = new1Date.getDate() + " " + months[new1Date.getMonth()] + " " + new1Date.getFullYear();
        
    new2Date = new Date(year2, month2, day2);
    new2Date.setDate(day2+7);
    result2Date = new2Date.getDate() + " " + months[new2Date.getMonth()] + " " + new2Date.getFullYear();

    document.getElementById("dateForCalendar").innerHTML = result1Date;
    document.getElementById("dateForCalendar2").innerHTML = result2Date;
    nextDatesOfThedaysOfTheWeek();
}

function previousWeek() {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        lastDate1 = document.getElementById("dateForCalendar").innerHTML.split(" "),
        lastDate2 = document.getElementById("dateForCalendar2").innerHTML.split(" "),
        day1 = Number(lastDate1[0]),
        day2 = Number(lastDate2[0]),
        month1,
        month2,
        year1 = Number(lastDate1[2]),
        year2 = Number(lastDate2[2]),
        new1Date, new2Date, result1Date, result2Date;

    for (var i = 0; i < months.length; i++) {
        if (lastDate1[1] === months[i]) {
            month1 = i;
        }
    }

    for (var i = 0; i < months.length; i++) {
        if (lastDate2[1] === months[i]) {
            month2 = i;
        }
    }

    new1Date = new Date(year1, month1, day1);
    new2Date = new Date(year2, month2, day2);

    new1Date.setDate(day1-7);
    result1Date = new1Date.getDate() + " " + months[new1Date.getMonth()] + " " + new1Date.getFullYear();

    new2Date.setDate(day2-7);
    result2Date = new2Date.getDate() + " " + months[new2Date.getMonth()] + " " + new2Date.getFullYear();

    document.getElementById("dateForCalendar").innerHTML = result1Date;
    document.getElementById("dateForCalendar2").innerHTML = result2Date;
    previousDatesOfThedaysOfTheWeek();
}

function datesOfThedaysOfTheWeek() {
    var months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        date = new Date(),
        dayOfWeek = date.getDay(),
        result = [];
        
    if (dayOfWeek === 1) {
        var dayOfWeek1 = new Date (date.getFullYear(), date.getMonth(), date.getDate());
            
        dayOfWeek1.setDate(date.getDate() - (date.getDay() - 1));
        result[0] = dayOfWeek1.getDate() + "/" + Number(dayOfWeek1.getMonth() + 1);

        for (var j=1,i = 2; i < 8; i++, j++) {
            dayOfWeek1.setDate(dayOfWeek1.getDate() + 1);
            result[j] = dayOfWeek1.getDate() + "/" + Number(dayOfWeek1.getMonth() + 1);
        }
    }

    if (dayOfWeek === 2) {
        var dayOfWeek2 = new Date (date.getFullYear(), date.getMonth(), date.getDate());
            
        dayOfWeek2.setDate(date.getDate() - (date.getDay() - 1));
        result[0] = dayOfWeek2.getDate() + "/" + Number(dayOfWeek2.getMonth() + 1);

        for (var j=1,i = 2; i < 8; i++, j++) {
            dayOfWeek2.setDate(dayOfWeek2.getDate() + 1);
            result[j] = dayOfWeek2.getDate() + "/" + Number(dayOfWeek2.getMonth() + 1);
        }
    }

    if (dayOfWeek === 3) {
        var dayOfWeek3 = new Date (date.getFullYear(), date.getMonth(), date.getDate());
            
        dayOfWeek3.setDate(date.getDate() - (date.getDay() - 1));
        result[0] = dayOfWeek3.getDate() + "/" + Number(dayOfWeek3.getMonth() + 1);

        for (var j=1,i = 2; i < 8; i++, j++) {
            dayOfWeek3.setDate(dayOfWeek3.getDate() + 1);
            result[j] = dayOfWeek3.getDate() + "/" + Number(dayOfWeek3.getMonth() + 1);
        }
    }

    if (dayOfWeek === 4) {
        var dayOfWeek4 = new Date (date.getFullYear(), date.getMonth(), date.getDate());
            
        dayOfWeek4.setDate(date.getDate() - (date.getDay() - 1));
        result[0] = dayOfWeek4.getDate() + "/" + Number(dayOfWeek4.getMonth() + 1);

        for (var j=1,i = 2; i < 8; i++, j++) {
            dayOfWeek4.setDate(dayOfWeek4.getDate() + 1);
            result[j] = dayOfWeek4.getDate() + "/" + Number(dayOfWeek4.getMonth() + 1);
        }
    }

    if (dayOfWeek === 5) {
        var dayOfWeek5 = new Date (date.getFullYear(), date.getMonth(), date.getDate());
            
        dayOfWeek5.setDate(date.getDate() - (date.getDay() - 1));
        result[0] = dayOfWeek5.getDate() + "/" + Number(dayOfWeek5.getMonth() + 1);

        for (var j=1,i = 2; i < 8; i++, j++) {
            dayOfWeek5.setDate(dayOfWeek5.getDate() + 1);
            result[j] = dayOfWeek5.getDate() + "/" + Number(dayOfWeek5.getMonth() + 1);
        }
    }

    if (dayOfWeek === 6) {
        var dayOfWeek6 = new Date (date.getFullYear(), date.getMonth(), date.getDate());
            
        dayOfWeek6.setDate(date.getDate() - (date.getDay() - 1));
        result[0] = dayOfWeek6.getDate() + "/" + Number(dayOfWeek6.getMonth() + 1);

        for (var j=1,i = 2; i < 8; i++, j++) {
            dayOfWeek6.setDate(dayOfWeek6.getDate() + 1);
            result[j] = dayOfWeek6.getDate() + "/" + Number(dayOfWeek6.getMonth() + 1);
        }
    }

    if (dayOfWeek === 0) { // 0 - it's a sunday
        var dayOfWeek0 = new Date (date.getFullYear(), date.getMonth(), date.getDate());
            
        dayOfWeek0.setDate(date.getDate() - (7 - 1));
        result[0] = dayOfWeek0.getDate() + "/" + Number(dayOfWeek0.getMonth() + 1);

        for (var j=1,i = 2; i < 8; i++, j++) {
            dayOfWeek0.setDate(dayOfWeek0.getDate() + 1);
            result[j] = dayOfWeek0.getDate() + "/" + Number(dayOfWeek0.getMonth() + 1);
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

function nextDatesOfThedaysOfTheWeek() {
    var arrWithDatesOfThedaysOfTheWeek = [
            document.getElementById("monday").innerHTML.split("/"),
            document.getElementById("tuesday").innerHTML.split("/"),
            document.getElementById("wednesday").innerHTML.split("/"),
            document.getElementById("thursday").innerHTML.split("/"),
            document.getElementById("friday").innerHTML.split("/"),
            document.getElementById("saturday").innerHTML.split("/"),
            document.getElementById("sunday").innerHTML.split("/")],
        date = new Date(),
        day = arrWithDatesOfThedaysOfTheWeek[6][0],
        month = arrWithDatesOfThedaysOfTheWeek[6][1],
        year = document.getElementById("dateForCalendar2").innerHTML.split(" "),
        new1Date,
        result = [];

    new1Date = new Date (year[2], month-1, day);

    for (var j=0,i = 1; i < 8; i++, j++) {
        new1Date.setDate(new1Date.getDate() + 1);

        result[j] = new1Date.getDate() + "/" + Number(new1Date.getMonth() + 1);
    }

    document.getElementById("monday").innerHTML = result[0];
    document.getElementById("tuesday").innerHTML = result[1];
    document.getElementById("wednesday").innerHTML = result[2];
    document.getElementById("thursday").innerHTML = result[3];
    document.getElementById("friday").innerHTML = result[4];
    document.getElementById("saturday").innerHTML = result[5];
    document.getElementById("sunday").innerHTML = result[6];
}

function previousDatesOfThedaysOfTheWeek() {
    var arrWithDatesOfThedaysOfTheWeek = [
            document.getElementById("monday").innerHTML.split("/"),
            document.getElementById("tuesday").innerHTML.split("/"),
            document.getElementById("wednesday").innerHTML.split("/"),
            document.getElementById("thursday").innerHTML.split("/"),
            document.getElementById("friday").innerHTML.split("/"),
            document.getElementById("saturday").innerHTML.split("/"),
            document.getElementById("sunday").innerHTML.split("/")],
        date = new Date(),
        day = arrWithDatesOfThedaysOfTheWeek[0][0],
        month,
        year = document.getElementById("dateForCalendar2").innerHTML.split(" "),
        new1Date,
        result = [];

    if (arrWithDatesOfThedaysOfTheWeek[0][1] >= 1) {
        month = arrWithDatesOfThedaysOfTheWeek[0][1] 
    } else {
        month = 12;
    }

    new1Date = new Date(year[2], month-1, day),
    new1Date.setDate(0);

    for (var j=0, i = 1; i < 8; i++) {
        var temporary;

        if ((Number(day) - i) > 0) {
            temporary = (Number(day) - i) + "/" + (Number(month));
            result.unshift(temporary);
        } else {
            if ((Number(month) - 1) >= 1) {
                temporary = (new1Date.getDate() - j) + "/" + (Number(month)-1);
                j++;
                result.unshift(temporary);
            } else {
                temporary = (new1Date.getDate() - j) + "/" + 12;
                j++;
                result.unshift(temporary);
            }
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

function onClickOnField(EO) {
    EO = EO || window.event;
    // console.log("Id кликнутой ячейки " + EO.target.id);

    var temporary = EO.target.id.split("_"),
        months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
        dayAndMonth = document.getElementById(temporary[1]).innerHTML.split("/"),
        hour = temporary[0] + ":00 ",
        day = dayAndMonth[0] + " ",
        month = months[dayAndMonth[1]-1] + " ",
        year1 = document.getElementById("dateForCalendar").innerHTML.split(" "),
        year2 = document.getElementById("dateForCalendar2").innerHTML.split(" "),
        dateForReturn;

    year1 = year1[2];
    year2 = year2[2];

    if (year1 !== year2) {
        if (Number(dayAndMonth[0]) > 24 && Number(dayAndMonth[0]) <= 31) {
            dateForReturn = hour + day + month + year1;
        } else {
            dateForReturn = hour + day + month + year2;
        }
    } else {
        dateForReturn = hour + day + month + year2
    }
    
    console.log(dateForReturn);
 
    // var modalConfirmSelectedDate = document.getElementById("modalConfirmSelectedDate");
    // modalConfirmSelectedDate.innerHTML = " " + day + month + hour + "- " + (Number(temporary[0])+1) + ":00";
}