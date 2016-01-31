var ClassList = require('classlist');
var domready = require('domready');

function onNavTogglerClick (event) {
	if (event.preventDefault) event.preventDefault();

	var list = ClassList(document.body);

	list.toggle('nav-open');
}

domready(function () {
	var navToggler = document.querySelector('.nav-toggler');

	navToggler.addEventListener('click', onNavTogglerClick);
});