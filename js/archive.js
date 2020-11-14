const html = document.querySelector('html');
const body = document.querySelector('body');
const overflow = document.querySelector('.overflow');
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header-nav');
const headerMenu = document.querySelector('.header__menu');
const headerBlock = document.querySelector('.navbar-block');
const headerData = document.querySelector('.header-data');
const headerCabinet = document.querySelector('.header-cabinet');
const headerDataLogout = document.querySelector('.header-data__logout')
const navbarLink = document.querySelector('.navbar-link');
const filtresBlock = document.querySelector('.filtres-block');
const allProfessionImgs = document.querySelectorAll('.profession-img');
const allAccardeonHeaders = document.querySelectorAll('.filtres-block__header');
const allAccardeonBodys = document.querySelectorAll('.profession-body');
const filtresBlockHeader = document.querySelector('.d');


headerBurger.addEventListener('click', () => {
	
	body.classList.toggle('body-active');
	overflow.classList.toggle('overflow-active');
	html.classList.toggle('.html-overflow');

	if(headerMenu.classList.contains('nav-opened')) {
		headerNav.classList.remove('navbar-active');
		headerMenu.classList.remove('nav-opened')
		headerBlock.classList.remove('nav-opened')
	}else {
		headerNav.classList.add('navbar-active');
		headerMenu.classList.add('nav-opened')
		headerBlock.classList.add('nav-opened')
	}
})

function collapseMakerThree(event) {
	let target = event.target;


	if(target.classList.contains('filtres-block__header')) {
		if(target.nextElementSibling.classList.contains('filtres-opened')) {
			target.nextElementSibling.classList.toggle('filtres-opened')
			target.classList.toggle('border');
			target.lastElementChild.classList.toggle('transform');
		}else {
			allAccardeonBodys.forEach(item => {
				item.classList.remove('filtres-opened')
			})
			allAccardeonHeaders.forEach(item => {
				item.classList.remove('border')
			})
			allProfessionImgs.forEach(item => {
				item.classList.remove('transform')
			})
			let firstTarget = target.nextElementSibling;
			firstTarget.classList.toggle('filtres-opened');
			target.classList.toggle('border');
			target.lastElementChild.classList.toggle('transform');
		}
	}else if(target.parentNode.classList.contains('filtres-block__header')) {
		if(target.parentNode.nextElementSibling.classList.contains('filtres-opened')) {
			target.parentNode.nextElementSibling.classList.toggle('filtres-opened');
			target.parentNode.classList.toggle('border');
			target.parentNode.lastElementChild.classList.toggle('transform');
		}else{
			allAccardeonBodys.forEach(item => {
				item.classList.remove('filtres-opened')
			})
			allAccardeonHeaders.forEach(item => {
				item.classList.remove('border')
			})
			allProfessionImgs.forEach(item => {
				item.classList.remove('transform')
			})
			let secondTarget = target.parentNode.nextElementSibling;
			secondTarget.classList.toggle('filtres-opened');
			target.parentNode.classList.toggle('border');
			target.parentNode.lastElementChild.classList.toggle('transform');
		}
	}
}


filtresBlock.addEventListener('click', event => {
	collapseMakerThree(event)
})

navbarLink.addEventListener('click', e => {

	e.preventDefault();
	navbarLink.classList.add('navbar-link__disabled');
	headerCabinet.classList.add('data-active');
	navbarBlockElement.classList.add('navbar-block__active')

})

headerCabinet.addEventListener('click', () => {

	headerData.classList.toggle('data-active');

})

headerDataLogout.addEventListener('click', () => {

	navbarLink.classList.remove('navbar-link__disabled')
	headerData.classList.remove('data-active');
	headerCabinet.classList.remove('data-active');
	navbarBlockElement.classList.remove('navbar-block__active')

})