const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header-nav');
const headerMenu = document.querySelector('.header__menu');
const headerBlock = document.querySelector('.navbar-block');
const filtresBlock = document.querySelector('.filtres-block');
const allProfessionImgs = document.querySelectorAll('.profession-img');
const allAccardeonHeaders = document.querySelectorAll('.filtres-block__header');
const allAccardeonBodys = document.querySelectorAll('.profession-body');
const filtresBlockHeader = document.querySelector('.d');


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