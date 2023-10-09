let consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', function () {
	alert('Метод для вывода сообщения в веб-консоль')
});

let alt = document.querySelector('#alert')

alt.addEventListener('click', function () {
	alert('Метод для вывода сообщения в уведомление')
});

let ppt = document.querySelector('#prompt')

ppt.addEventListener('click', function () {
	prompt('Метод для вывода сообщения в уведомление с полем для ввода')
});