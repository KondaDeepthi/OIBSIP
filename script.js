const form = document.querySelector('form');
const greeting = document.querySelector('#greeting');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const nameInput = document.querySelector('#name');
	const name = nameInput.value;
	greeting.textContent = `Hello, ${name}!`;
});
