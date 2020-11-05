const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header-nav');
const headerMenu = document.querySelector('.header__menu');
const headerBlock = document.querySelector('.navbar-block');


headerBurger.addEventListener('click', () => {
	headerNav.classList.toggle('navbar-active')
	if(headerMenu.classList.contains('nav-opened')) {
		headerMenu.classList.remove('nav-opened')
		headerBlock.classList.remove('nav-opened')
	}else {
		headerMenu.classList.add('nav-opened')
		headerBlock.classList.add('nav-opened')
	}
})