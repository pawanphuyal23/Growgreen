
console.log("a");

function logIn(){
	var name = document.getElementById("name");
	var pass = document.getElementById("pass");

	if (name.value == "") {
		name.style.border = "2px solid red";
		name.placeholder = 'Please enter valid Username';
	}

	if (pass.value == "") {
		pass.style.border = "2px solid red";
		pass.placeholder = 'Please enter your Password';
	}

	else{
		alert("Thank you for loging in")
		name.placeholder = 'Username';
		pass.placeholder = 'Password';
		name.value = '';
		pass.value = '';
	}
}