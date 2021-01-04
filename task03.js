/*--------------------------------------------------------------*/
var a = 4;
if (++a === 5) {
	alert("given condition for variable a is true");
	document.write("<b>In part A, given condition for variable a is true!<br>");
}


/*--------------------------------------------------------------*/
var b = 82;
if (b++ === 83){
	alert("given condition for variable b is true");
	document.write("<b>In part B, given condition for variable b is true!<br>");
}


/*--------------------------------------------------------------*/
var c = 12;
if (c++ === 13){
	alert("condition 1 is true");
	document.write("<b>In part C, condition 1 is true!<br>");
}
if (c === 13){
	alert("condition 2 is true");
	document.write("<b>In part C, condition 2 is true!<br>");
}
if (++c < 14){
	alert("condition 3 is true");
	document.write("<b>In part C, condition 3 is true!<br>");
}
if(c === 14){
	alert("condition 4 is true");
	document.write("<b>In part C, condition 4 is true!<br>");
}

/*--------------------------------------------------------------*/
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
	alert("The cost equals");
	document.write("<b>In part D, The cost equals!<br>");
}
/*--------------------------------------------------------------*/
if (true){
	alert("True");
	document.write("<b>In part E, the condition is TRUE!<br>");
}
if (false){
	alert("False");
	document.write("<b>In part E, the condition is FALSE!<br>");
}
