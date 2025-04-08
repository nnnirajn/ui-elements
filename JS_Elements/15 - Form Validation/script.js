let formSubmit = document.querySelector('#formSubmit');

let inputName = document.querySelector('#inputName');
let inputUserName = document.querySelector('#inputUsername');
let inputUserEmail = document.querySelector('#inputUserEmail');
let inputUserNumber = document.querySelector('#inputUserNumber');
let inputUserPassword = document.querySelector('#inputUserPassword');
let confirmPassword = document.querySelector('#confirmPassword');
let inputUserSex = document.querySelector('#inputUserSex');
let inputUserCountry = document.querySelector('#inputCountry');
let inputUserLan = document.querySelector('#inputUserLanguage');
let inputUserMsg = document.querySelector('#inputMessage');
let inputUserZip = document.querySelector('#inputZip');


formSubmit.addEventListener("click", validateForm);

function validateForm(event) {
	event.preventDefault();

	let inputNameValue = inputName.value.trim();
	let inputUserNameValue = inputUserName.value.trim();
	let inputUserEmailValue = inputUserEmail.value.trim();
	let inputUserNumberValue = inputUserNumber.value.trim();
	let inputUserPasswordValue = inputUserPassword.value.trim();
	let confirmPasswordValue = confirmPassword.value.trim();
	let inputUserSexValue = document.querySelector('input[name="inputUserSex"]:checked');
	let inputUserCountryValue = inputUserCountry.value.trim();
	let inputUserLanValue = document.querySelector('input[name="inputLanguage"]:checked');
	let inputUserMsgValue = document.querySelector('#inputMessage').value.trim();
	let inputUserZipValue = document.querySelector('#inputZip').value.trim();

	// Name Validation  
	if (inputNameValue == "") {
		setFailed(inputName, "Name can not be Empty");
	} else if (!isNameCorrect(inputNameValue)) {
		setFailed(inputName, "Name is not correct!");
	} else {
		setSuccess(inputName);
	}

	// UserName Validation  
	if (inputUserNameValue == "") {
		setFailed(inputUserName, "Username can not be Empty");
	} else if (!isUserNameCorrect(inputUserNameValue)) {
		setFailed(inputUserName, "Username is not correct!");
	} else {
		setSuccess(inputUserName);
	}


	// UserEmail Validation  
	if (inputUserEmailValue == "") {
		setFailed(inputUserEmail, "Email can not be Empty");
	} else if (!isUserEmailCorrect(inputUserEmailValue)) {
		setFailed(inputUserEmail, "Email is not correct!");
	} else {
		setSuccess(inputUserEmail);
	}

	// Mobile Number Validation  
	if (inputUserNumberValue == "") {
		setFailed(inputUserNumber, "Mobile No can not be Empty");
	} else if (!isUserNumberCorrect(inputUserNumberValue)) {
		setFailed(inputUserNumber, "Mobile No is not correct!");
	} else {
		setSuccess(inputUserNumber);
	}

	// Mobile Number Validation  
	if (inputUserPasswordValue == "") {
		setFailed(inputUserPassword, "Password can not be Empty");
	} else if (!isUserPasswordCorrect(inputUserPasswordValue)) {
		setFailed(inputUserPassword, "Password No is not correct!");
	} else {
		setSuccess(inputUserPassword);
	}


	// Confirm Password Validation  
	if (confirmPasswordValue == "") {
		setFailed(confirmPassword, "Password can not be Empty");
	} else if (inputUserPasswordValue !== confirmPasswordValue) {
		setFailed(confirmPassword, "Password No is not match!");
	} else {
		setSuccess(confirmPassword);
	}


	// Radio Button Validation  
	if (inputUserSexValue !== null) {
		setSuccess(inputUserSex);
	} else {

		setFailed(inputUserSex, "Field can not be Empty");
	}

	// Dropdown Validation 
	if (inputUserCountryValue == "") {
		setFailed(inputUserCountry, "Field can not be Empty");
	} else {
		setSuccess(inputUserCountry);
	}

	// Checkbox Validation 
	if (inputUserLanValue !== null) {
		setSuccess(inputUserLanguage);
	} else {
		setFailed(inputUserLanguage, "Field can not be Empty");
	}

	// Textarea Validation
	if (inputUserMsgValue == "") {
		setFailed(inputUserMsg, "Field can not be Empty");
	} else {
		setSuccess(inputUserMsg);
	}

	// Zip Validation  
	if (inputUserZipValue == "") {
		setFailed(inputUserZip, "Zip Field can not be Empty");
	} else if (!isZipCorrect(inputUserZipValue)) {
		setFailed(inputUserZip, "Zip No is not correct!");
	} else {
		setSuccess(inputUserZip);
	}

}


function setFailed(receiveInputField, msg) {
	let parentBox = receiveInputField.parentElement;
	parentBox.className = "input-box failed";
	let errorMsg = parentBox.querySelector(".error-msg");
	errorMsg.innerText = msg;

	let fa = parentBox.querySelector(".fa");
	// we are adding if condition here to avoid 'cannot set properties of null' error
	if (fa) {
		fa.className = "fa fa-exclamation-circle";
	}

}

function setSuccess(receiveInputField) {
	let parentBox = receiveInputField.parentElement;
	parentBox.className = "input-box success";
	let fa = parentBox.querySelector(".fa");
	// we are adding if condition here to avoid 'cannot set properties of null' error
	if (fa) {
		fa.className = "fa fa-check-circle";
	}
}

function isNameCorrect(value) {
	let regexForName = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
	return regexForName.test(value);
}

function isUserNameCorrect(value) {
	let regexForUserName = /^(?=.*[a-zA-Z])[^\*\s]{4,8}$/;
	return regexForUserName.test(value);
}

function isUserEmailCorrect(value) {
	let regexForUserEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	return regexForUserEmail.test(value);
}

function isUserNumberCorrect(value) {
	let regexForUserNumber = /^([987]{1})([234789]{1})([0-9]{8})$/;
	return regexForUserNumber.test(value);
}

function isUserPasswordCorrect(value) {
	let regexForUserPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]).{8,32}$/;
	//   one small, one capital, one special charector, 8 - 32 letter
	return regexForUserPassword.test(value);
}

function isZipCorrect(value) {
	let regexForZip = /^[1-9][0-9][0-9][0-9][0-9][0-9]$/;
	//   Indian Zip
	return regexForZip.test(value);
}


