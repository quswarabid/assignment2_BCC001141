var guess = parseInt(prompt("Enter a number!"));

var secret = 5;


if (guess === secret){
	alert("Bingo, correct answer!");
}
if (guess + 1 === secret){
	alert("Close Enough!");
}