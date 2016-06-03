var calculate = function(e) {
	e.preventDefault();
	var firstNum = parseInt(document.querySelector('#firstNum').value);
	var secondNum = parseInt(document.querySelector('#secondNum').value);
	var operator = document.querySelector('#operator').value;
	var calcBtn = document.querySelector('#calcBtn').value;
	var answer = document.querySelector('#answer').value;

	if(isNaN(firstNum)) {
		document.querySelector('#firstNum').value = '';
		document.querySelector('#firstNum').placeholder='Please enter a number!';
	}
	if(isNaN(secondNum)) {
		document.querySelector('#secondNum').value = '';
		document.querySelector('#secondNum').placeholder='Please enter a number!';
	}
	if(operator == '+'){
		var calc = firstNum + secondNum;
		document.querySelector('#answer').textContent = calc;
		return
	}
	if(operator == '-'){
		var calc = firstNum - secondNum;
		document.querySelector('#answer').textContent = calc;
		return
	}
	if(operator == '*'){
		var calc = firstNum * secondNum;
		document.querySelector('#answer').textContent = calc;
		return
	}
	if(operator == '/'){
		var calc = firstNum / secondNum;
		document.querySelector('#answer').textContent = calc;
		return
	}
	else {	
		document.querySelector('#answer').textContent = "Please enter a valid operator!";

	}
}
calcBtn.addEventListener('click', calculate);