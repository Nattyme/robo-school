const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);


sliderItems.forEach(function(slide, index) {
	console.log(slide);
	
	//Скрываем все слайды, кроме первого 
	if(index !== 0) {
		slide.classList.add('hidden');	
	}
	
	//Добавляем индексы
	slide.dataset.index = index;
	
	//Клик по слайдам
	slide.addEventListener('click', function() {
		
		//Скрываем текущий слайд
		slide.classList.add('hidden');
		
		// Рассчитываем индекс следующего слайда
		let nextSlideIndex;
		if (index + 1 === sliderItems.length) {
			nextSlideIndex = 0;	
		} else {
			nextSlideIndex = index + 1;
		}
		console.log(nextSlideIndex);
		
		
		
		//const nextSlideIndex = +slide.dataset.index + 1;
		
		
		//Находим след слайд 
		const nextSlide = slider.querySelector(`[data-index= "${nextSlideIndex}"]`)
		
		//Отображаем след слайд 
		nextSlide.classList.remove('hidden');
	})
});