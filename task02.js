




//document.write("<br><br><br>");


var spec = prompt("Please input the color of any road traffic signal", "Like Red, or Green, or Blue etc.");

if (spec=="RED" || spec=="Red" || spec=="red"){
	alert("Must Stop!");
	document.write("<b>Must Stop!<br>");
}
if (spec=="GREEN" || spec=="Green" || spec=="green"){
	alert("Ready to Move.");
	document.write("<b>Ready to Move.<br>");
}
if (spec=="BLUE" || spec=="Blue" || spec=="blue"){
	alert("Move now.");
	document.write("<b>Move now.<br>");
}