// Находим нужные элементы на странице - кнопка модалки, модалка, кнопка закрытия
const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');
const offers = document.querySelectorAll('.offer');


// Прослушиваем клик на кнопке Открытия, открываем модалку
button.addEventListener('click', function(){ 
    modal.classList.remove('none');
});

// Прослушиваем клик по кнопке закрытия, закрываем модалку
buttonClose.addEventListener('click', function(){
    modal.classList.add('none');
    console.log('click');
})

modal.addEventListener('click', function(){
   
    
});

// offer section card color change
for (let offer of offers) {
    offer.onmouseover = function(){
        offer.classList.add('offer--active');
    };
    offer.onmouseout = function(){
        offer.classList.remove('offer--active');
    }
}


// const mouseoutHandler = function(){
//     offer.classList.remove('offer--active');
// }
// offer.onmouseout = mouseoutHandler;
console.log(offers)
