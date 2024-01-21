const offers = document.querySelectorAll('.offer');

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

// Вызов карусели
$(document).ready(function(){
    $("#slider-teachers").owlCarousel({
        items: 4,
        loop: true
    });
  });
