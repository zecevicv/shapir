/* #Header
    ======================================================= */

// Scroll BG Color change
const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-white');
    } else {
      header.classList.remove('header-white');
    }
  });

  if (window.scrollY > 0) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
}

/* #Banner Slider
  ======================================================= */
if (document.querySelector('.banner-slider .swiper-container')) {
  new Swiper('.banner-slider .swiper-container', {
    pagination: {
      el: '.banner-slider .swiper-pagination',
    },
  });
}

/* #Home Projects
  ======================================================= */
if (document.querySelector('.home-projects .swiper-container')) {
  new Swiper('.home-projects .swiper-container', {
    effect: 'fade',
    pagination: {
      el: '.home-projects .swiper-pagination',
    },
  });
}