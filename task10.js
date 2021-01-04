var actual_password = "bcc001141";

var input_password = prompt("Enter Password. Hint: bcc001141");

if (input_password === ""){
	while(input_password === ""){
	input_password = prompt("Please enter a Valid Password. Hint: bcc001141");
	}
}

if (input_password === actual_password){
	alert("Correct Password! The password you entered matches the correct password.");
}else{
	alert("Wrong Password!");
}

