var calculate = function(e) {
	e.preventDefault();
	var firstNum = parseInt(document.querySelector('#firstNum').value);
	var secondNum = parseInt(document.querySelector('#secondNum').value);
	var operator = document.querySelector('#operator').value;
	var calcBtn = document.querySelector('#calcBtn').value;
	var answer = document.querySelector('#answer').value;

	// console.log(firstNum,secondNum, operator,calcBtn,answer);

	if(isNaN(firstNum)) {
		// document.querySelector('#firstNum').value = 'Please enter a number!';

		document.querySelector('#firstNum').placeholder='Please enter a number!';
	
	}
	if(isNaN(secondNum)) {
		document.querySelector('#secondNum').placeholder='Please enter a number!';
	}


}

calcBtn.addEventListener('click', calculate);