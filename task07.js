var operand_1 = parseInt(prompt("Enter a number!"));
var operand_2 = parseInt(prompt("Enter another number!"));

var operation = prompt("Enter an operation. Like '+', '-', '*', '/', or '%' etc.");

var answer = 0;

if (operation == "+"){
	answer = operand_1 + operand_2;
}

if (operation == "-"){
	answer = operand_1 - operand_2;
}

if (operation == "*"){
	answer = operand_1 * operand_2;
}

if (operation == "/"){
	answer = operand_1 / operand_2;
}

if (operation == "%"){
	answer = operand_1 % operand_2;
}

document.write("<br>" + operand_1 + " " + operation + " " + operand_2 + " = " + answer + "<br>");

alert(operand_1 + " " + operation + " " + operand_2 + " = " + answer );
