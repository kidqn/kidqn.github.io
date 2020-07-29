let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.querySelectorAll('#home-carousel .slide');
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

let SwiperInfo = new Swiper('.info-carousel', {
  spaceBetween: 0,
  slidesPerView:'auto',
  allowTouchMove: true,
  disableOnInteraction: true
});
let SwiperTop = new Swiper('.news-carousel', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: true,
  disableOnInteraction: true
});
