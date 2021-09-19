const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const firstName = form['firstname'].value;
	const lastName = form['lastname'].value;
	const email = form['email'].value;
	const password = form['password'].value;

	if (firstName === '') {
		addErrorTo('firstname', 'First Name is required');
	} else {
		removeErrorFrom('firstname');
	}

	if (lastName === '') {
		addErrorTo('lastname', 'Last Name is required');
	} else {
		removeErrorFrom('lastname');
	}

	if (email === '') {
		addErrorTo('email', 'Email is required');
	} else if (!isValido(email)) {
		addErrorTo('email', 'Email is not valid');
	} else {
		removeErrorFrom('email');
	}

	if (password === '') {
		addErrorTo('password', 'Password is required');
	} else {
		removeErrorFrom('password');
	}
});

const addErrorTo = (elemento, mensaje) => {
	const formControl = form[elemento].parentNode;
	formControl.classList.add('error');

	const small = formControl.querySelector('small');
	small.innerText = mensaje;
};

const removeErrorFrom = (elemento) => {
	const formControl = form[elemento].parentNode;
	formControl.classList.remove('error');
};

const isValido = (email) => {
	var re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};
