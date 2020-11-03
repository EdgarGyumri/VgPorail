const accardeonHeader = document.querySelector('.profession-header');
const allAccardeonHeaders = document.querySelectorAll('.profession-header')
const accardeonBody = document.querySelector('.profession-body');
const allAccardeonBodys = document.querySelectorAll('.profession-body')
const profession = document.querySelector('.profession');
const professionItem = document.querySelector('.profession-item')


profession.addEventListener('click', event => {
	let target = event.target;

	if(target.classList.contains('profession-header')) {
		allAccardeonBodys.forEach(item => {
			item.classList.remove('opened')
		})
		allAccardeonHeaders.forEach(item => {
			item.classList.remove('border')
		})
		let firstTarget = target.nextElementSibling;
		firstTarget.classList.toggle('opened');
		target.classList.toggle('border')
	}else if(target.parentNode.classList.contains('profession-header')) {
		allAccardeonBodys.forEach(item => {
			item.classList.remove('opened')
		})
		allAccardeonHeaders.forEach(item => {
			item.classList.remove('border')
		})
		let secondTarget = target.parentNode.nextElementSibling;
		secondTarget.classList.toggle('opened');
		target.parentNode.classList.toggle('border');
	}else {
		accardeonHeader.style.borderBottomRightRadius = '15px';
		accardeonHeader.style.borderBottomLeftRadius = '15px';
	}
})