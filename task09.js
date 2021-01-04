var alphabet = prompt("Enter an alphabet.");

var x = isVowel(alphabet);

if (x){
	document.write("<br>TRUE<br>");
}else{
	document.write("<br>FALSE<br>");
}

document.write("<br><br>");


function isVowel(input){
	if (input === "a" || input === "e" || input === "i" || input === "o" || input === "U" || input === "A" || input === "E" || input === "I" || input === "O" || input === "U"){
		alert("It's a Vowel!");
		return true;
	}else{
		alert("Not a Vowel!");
		return false;
	}
	
}