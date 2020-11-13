const html = document.querySelector('html');
const body = document.querySelector('body');
const overflow = document.querySelector('.overflow');
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header-nav');
const headerMenu = document.querySelector('.header__menu');
const headerBlock = document.querySelector('.navbar-block');
const allAccardeonHeaders = document.querySelectorAll('.profession-header');
const profession = document.querySelector('.profession');
const allAccardeonBodys = document.querySelectorAll('.profession-body');
const allProfessionImgs = document.querySelectorAll('.profession-img');
const allResultBodys = document.querySelectorAll('.result__body');
const allResultItems = document.querySelectorAll('.result-body__item');


function collapseMakerOne(event) {
	let target = event.target;


	if(target.classList.contains('profession-header')) {
		if(target.nextElementSibling.classList.contains('opened')) {
			target.nextElementSibling.classList.toggle('opened')
			target.classList.toggle('border');
			target.lastElementChild.classList.toggle('transform');
		}else {
			allAccardeonBodys.forEach(item => {
				item.classList.remove('opened')
			})
			allAccardeonHeaders.forEach(item => {
				item.classList.remove('border')
			})
			allProfessionImgs.forEach(item => {
				item.classList.remove('transform')
			})
			let firstTarget = target.nextElementSibling;
			firstTarget.classList.toggle('opened');
			target.classList.toggle('border');
			target.lastElementChild.classList.toggle('transform');
		}
	}else if(target.parentNode.classList.contains('profession-header')) {
		if(target.parentNode.nextElementSibling.classList.contains('opened')) {
			target.parentNode.nextElementSibling.classList.toggle('opened');
			target.parentNode.classList.toggle('border');
			target.parentNode.lastElementChild.classList.toggle('transform');
		}else{
			allAccardeonBodys.forEach(item => {
				item.classList.remove('opened')
			})
			allAccardeonHeaders.forEach(item => {
				item.classList.remove('border')
			})
			allProfessionImgs.forEach(item => {
				item.classList.remove('transform')
			})
			let secondTarget = target.parentNode.nextElementSibling;
			secondTarget.classList.toggle('opened');
			target.parentNode.classList.toggle('border');
			target.parentNode.lastElementChild.classList.toggle('transform');
		}
	}
}

profession.addEventListener('click', event => {
	collapseMakerOne(event)
})


headerBurger.addEventListener('click', () => {
	
	body.classList.toggle('body-active');
	overflow.classList.toggle('overflow-active');
	html.classList.toggle('.html-overflow');

	if(headerMenu.classList.contains('nav-opened')) {
		headerMenu.classList.remove('nav-opened');
		headerBlock.classList.remove('nav-opened');
	}else {
		headerMenu.classList.add('nav-opened');
		headerBlock.classList.add('nav-opened');
	}
})
