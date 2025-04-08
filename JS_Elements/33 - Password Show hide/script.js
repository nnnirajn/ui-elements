function showPassword() {
	const getInputField = document.getElementById("inputField"); 
	const getCheckbox = document.getElementById("checkbox");
	const getLabel = document.getElementById("label");
	
	if(getInputField.type == "password"){
	  getInputField.type = "text";
	  getLabel.innerHTML = "Hide password"
	}else if(getInputField.type == "text") {
	  getInputField.type = "password";
	  getLabel.innerHTML = "Show password"
	}
  }