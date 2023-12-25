const nameStr = document.querySelector('#nameStr');
const emailStr = document.querySelector('#emailStr');

//Забираем из хранилища данные ввода и выводим на экран
nameStr.textContent = localStorage.getItem('name');
emailStr.textContent = localStorage.getItem('email');



