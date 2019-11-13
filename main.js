var slideWrapper = document.querySelector('.navbar-rank');
var slides = document.querySelectorAll('.rank-item');
var totalSlides = slides.length;
var sliderHeight = slideWrapper.clientHeight;
var slideIndex = 0;
var slider = document.querySelector('.rank');

slider.style.height = sliderHeight * totalSlides + 'px';

showSlides();

function showSlides() {
    
    for(var i=0;i<slides.length;i++){
        slider.style.top = -(sliderHeight * slideIndex) + 'px';    
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
        slideIndex = 0;
    }
    setTimeout(showSlides, 2500); 
}









