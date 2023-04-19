function addToScreen(value) {
	document.getElementById('result').value += value;
}

function clearScreen() {
	document.getElementById('result').value = '';
}

function backspace() {
	let result = document.getElementById('result').value;
	document.getElementById('result').value = result.substring(0, result.length - 1);
}

function calculate() {
	let result = document.getElementById('result').value;
	let answer = eval(result);
	document.getElementById('result').value = answer;
}
