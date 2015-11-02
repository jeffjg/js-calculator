$(document).ready(function() {

	var 	num1 = '',
			num2 = '',
			operator = undefined,
			solution = undefined;

	function changeDisplay(x) {
 		$('.display').text(x);
	}

	function isOperator(i) {
		if(i === '+' || i === '-' || i === '*' || i === '/') {
			return true;
		}
		return false;
	}

	function clearMem() {
		num1 = '';
		num2 = '';
		operator = undefined;
		solution = undefined;
	}

	function userInput(buttonClicked) {
		if(!isNaN(buttonClicked)) {
			if(operator === undefined) {
				num1 += buttonClicked;
				changeDisplay(num1);
			} else {
				num2 += buttonClicked;
				console.log("number 2 is " + num2);
				changeDisplay(num1 + " " + operator + " " + num2);
			}
		}

		if(isOperator(buttonClicked)) {
			operator = buttonClicked;
			changeDisplay(num1 + " " + operator);
		}

		if(buttonClicked === 'sum') {
			num1 = parseFloat(num1);
			num2 = parseFloat(num2);
			solution = eval(num1 + operator + num2);
			changeDisplay(solution);
			clearMem();
		}

		if(buttonClicked === 'clear') {
			clearMem();
			changeDisplay('');
		}

	};


	$("td").click(function() {
		userInput(this.getAttribute('data-value'));
	});


});

