var grade_1 = parseInt(prompt("What are your marks in Subject #1?"));

var grade_2 = parseInt(prompt("What are your marks in Subject #2?"));

var grade_3 = parseInt(prompt("What are your marks in Subject #3?"));

var total_marks = parseInt(prompt("What are total marks?"));

/*
	var percentage_1 = (grade_1/total_marks)*100;
	var percentage_2 = (grade_2/total_marks)*100;
	var percentage_3 = (grade_3/total_marks)*100;
*/

var obtained_marks = grade_1 + grade_2 + grade_3;
var obtained_percentage = (obtained_marks / total_marks) * 100;

document.write("<br><h1>Marksheet</h1><br>");

if (obtained_percentage > 0 && obtained_percentage <= 60){
	document.write("<br>Total Marks: " + total_marks + " <br>");
	document.write("<br>Marks Obtained: " + obtained_marks+ "  <br>");
	document.write("<br>Percentage: " + obtained_percentage + "  <br>");
	document.write("<br>Grade: Failed!<br>");
	document.write("<br>Remarks: Sorry, try again!<br>");
}
if (obtained_percentage > 60 && obtained_percentage <= 70){
	document.write("<br>Total Marks: " + total_marks + " <br>");
	document.write("<br>Marks Obtained: " + obtained_marks+ "  <br>");
	document.write("<br>Percentage: " + obtained_percentage + "  <br>");
	document.write("<br>Grade: B <br>");
	document.write("<br>Remarks: You need to Improve! <br>");
}
if (obtained_percentage > 70 && obtained_percentage <= 80){
	document.write("<br>Total Marks: " + total_marks + " <br>");
	document.write("<br>Marks Obtained: " + obtained_marks+ "  <br>");
	document.write("<br>Percentage: " + obtained_percentage + "  <br>");
	document.write("<br>Grade: A  <br>");
	document.write("<br>Remarks: Good!  <br>");
}
if (obtained_percentage > 80 && obtained_percentage < 100){
	document.write("<br>Total Marks: " + total_marks + " <br>");
	document.write("<br>Marks Obtained: " + obtained_marks+ "  <br>");
	document.write("<br>Percentage: " + obtained_percentage + "  <br>");
	document.write("<br>Grade: A-one  <br>");
	document.write("<br>Remarks: Excellent  <br>");
}


document.write("<br><br>");


/*
else{
	alert("some error occured");
}
*/