"use strict"

$(document).ready(function(){
    $("#regTeacher").click(function(){
        $("#teacherModal").modal();
    });

    $("#regStudent").click(function(){
        $("#studentModal").modal();
    });
});

var password = document.getElementById("userPsw"), 
	confirm_password = document.getElementById("confirmUserPsw");

function validatePassword(){
	if(password.value != confirm_password.value) {
		confirm_password.setCustomValidity("Пароли не совпадают!");
	} else {
		confirm_password.setCustomValidity('');
	}
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;