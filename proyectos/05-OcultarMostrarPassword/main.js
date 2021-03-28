import Login from './model/login.js';

const login = new Login();

login.iconoPass.addEventListener('click', () => {
	login.changeIconoPassword();
});

document.addEventListener('DOMContentLoaded', () => {
	console.log('Iniciar');
	console.log(login);
});
