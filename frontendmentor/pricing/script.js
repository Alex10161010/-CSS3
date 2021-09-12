const toggle = document.querySelector('#toggle');
const planes = document.querySelector('#box-planes');

toggle.addEventListener('change', (e) => {
	planes.classList.toggle('show-monthly');
});
