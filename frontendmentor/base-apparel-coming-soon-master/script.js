const form1 = document.querySelector('#formulario');

form1.addEventListener('submit', (e) => {
	e.preventDefault();
	const email = form1[0].value;

	if (!isValido(email)) {
		form1.classList.add('error');
		form1.classList.remove('success');
	} else {
		form1.classList.add('success');
		form1.classList.remove('error');
	}
});

const isValido = (email) => {
	var re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
