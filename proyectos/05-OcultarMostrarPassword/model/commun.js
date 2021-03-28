/**
 * Autor: EAMM
 * Fecha creacion: 22/03/2021 11:11 a.m
 */
class Commun {
	constructor() {}

	getElement(selector) {
		const element = document.querySelector(selector);
		return element;
	}

	retornaURL(nombre) {
		const rutas = [
			{
				nombre: 'usuario',
				url: '../../backend/controller/',
			},
			{
				nombre: 'persona',
				url: '../../backend/controller/',
			},
			{
				nombre: 'login',
				url: '../../backend/controller/',
			},
			{
				nombre: 'select',
				url: '../../backend/controller/',
			},
		];
		const { url } = rutas.find((ruta) => ruta.nombre === nombre);
		return url;
	}

	// Establecer en Local Storage
	setLocalStorage = (name, data) => {
		localStorage.setItem(name, data);
	};
	// Obtener en Local Storage
	getLocalStorage = (name) => {
		let data = localStorage.getItem(name);
		return data;
	};
	deleteLocalStorage = (name) => {
		localStorage.removeItem(name);
	};
}

export default Commun;
