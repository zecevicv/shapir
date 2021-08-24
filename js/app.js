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
  if (window.innerWidth < 1024) {
    new Swiper('.home-projects .swiper-container', {
      pagination: {
        el: '.home-projects .swiper-pagination',
      },
      effect: 'slide',
      slidesPerView: 1.1
    });
  } else {
    new Swiper('.home-projects .swiper-container', {
      pagination: {
        el: '.home-projects .swiper-pagination',
      },
      effect: 'fade',
      slidesPerView: 1
    });
  }
}

/* #Home Numbers Animation
  ======================================================= */
const homeNumbers = document.querySelectorAll('.home-numbers .num');

homeNumbers.forEach((num) => {
  gsap.from(num, {
    delay: 2,
    duration: 2.5,
    innerHTML: 0,
    snap: {
      innerHTML: 1
    },
    scrollTrigger: ".home-numbers .bottom .text"
  });
});

/* #Project Information 1
  ======================================================= */
if (document.querySelector('.project-information-1 .swiper-container')) {
  new Swiper('.project-information-1 .swiper-container', {
    pagination: {
      el: '.project-information-1 .swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-arrows .next',
      prevEl: '.swiper-arrows .prev',
    },
    slidesPerView: 1.15
  });
}

/* #Project Slider
  ======================================================= */
if (document.querySelector('.project-slider .swiper-container')) {
  new Swiper('.project-slider .swiper-container', {
    pagination: {
      el: '.project-slider .swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-arrows .next',
      prevEl: '.swiper-arrows .prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 4
      }
    }
  });
}