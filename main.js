const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');


sliderItems.forEach(function(slide, index) {
	console.log(slide);
	
	//Скрываем все слайды, кроме первого 
	if(index !== 0) slide.classList.add('hidden');	
	
	//Добавляем индексы
	slide.dataset.index = index;
	
	//Добавляем data атрибут active для первого /активного слайда
	sliderItems[0].setAttribute('data-active', '');
	
	
	
	//Клик по слайдам
	slide.addEventListener('click', function() {
		
		//Скрываем текущий слайд
		slide.classList.add('hidden');
		slide.removeAttribute('data-active');
		
		
		// Рассчитываем индекс следующего слайда
		const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
		
		//Находим след слайд 
		const nextSlide = slider.querySelector(`[data-index= "${nextSlideIndex}"]`)
		
		//Отображаем след слайд 
		nextSlide.classList.remove('hidden');
		nextSlide.setAttribute('data-active', '');
	})
});

btnNext.onclick = function(){
	console.log('Next Slide');
	
	//Скрываем текущий слайд
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');
	
	//Показываем след слайд
	const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}

btnPrev.onclick = function(){
	console.log('Prev Slide');
	
	//Скрываем текущий слайд
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');
	
	//Показываем след слайд
	const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	
	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}

