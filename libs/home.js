// Controll tat ca slides trong page
let slideIndex = [1,1,1,1,1,1,1];
let slideId = ["home-carousel", 
              "deal1-carousel", 
              "deal2-carousel",
              "deal3-carousel",
              "deal4-carousel",
              "deal5-carousel",
              "all-deals-carousel"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
function currentSlide(n, no) {
  showSlides(slideIndex[no] = n, no);
}

function showSlides(n, no) {
  let i;
  const slides = document.querySelectorAll(`#${slideId[no]} > .slide`);
  const dots = document.querySelectorAll(`#${slideId[no]} > .color-area > .dots > .dot`);
  const colorText = document.querySelector(`#${slideId[no]} > .color-area > .color-text`);
  if (n > slides.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  if(dots && dots.length) {
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex[no]-1].className += " active";
    // for deal carousel
    if(colorText) {
      colorText.innerText = dots[slideIndex[no]-1].getAttribute("color-text");
    }
  }
  slides[slideIndex[no]-1].style.display = "block";   
}


// Control swipper, marquee trong page
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

// Controll tab panels trong page
function openPage(pageName, contentId) {
  let i, tabcontent, tablinks;
  tabcontent = document.querySelectorAll(`#${contentId} > .tabcontent`);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove('active')
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).classList.add('active')
}

//mobile menu 
function openMenu(x) {
  if(x.classList.contains('change')) {
    closeNav(); 
  } else {
    openNav();
  }
  x.classList.toggle("change");
}
function openNav() {
  document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
  document.getElementById("mobile-menu").style.width = "0%";
  document.getElementById("mobile-menu-btn").classList.remove("change");
}

// search field handle
function displaySearch() {
  document.getElementById("search-result").classList.toggle("show");
  document.body.classList.toggle('no-scroll')
}
function checkShowResult(e){   
  e.stopPropagation();
  if (document.getElementById('search-result').contains(e.target)){
    // Clicked in box
    console.log(e.target.className)
    if(e.target.className !== 'search-wrapper' && (document.getElementById('search-result').classList.contains('show'))) {
      document.getElementById("search-result").classList.remove("show");
      document.body.classList.remove('no-scroll')
    }
  }
}
window.addEventListener('click', (e) => this.checkShowResult(e));
document.addEventListener('touchstart', (e) => this.checkShowResult(e));

// show 12 chi nhanh
function showStores() {
  document.getElementById("hnam-stores").classList.toggle("show");
}