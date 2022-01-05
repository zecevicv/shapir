/* #Header
    ======================================================= */

// Hamburger
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header .hamburger');
const body = document.querySelector('body');
const headerLinks = document.querySelector('.header-links');

if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    hamburgerBtn.classList.toggle('is-active');
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

// Scroll BG Color change
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
    delay: 1,
    duration: 5,
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
      nextEl: '.project-information-1 .swiper-arrows .next',
      prevEl: '.project-information-1 .swiper-arrows .prev',
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
      nextEl: '.project-slider .swiper-arrows .next',
      prevEl: '.project-slider .swiper-arrows .prev',
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

/* #Investment Reports Slider
  ======================================================= */
if (document.querySelector('.investment-reports .swiper-container')) {
  new Swiper('.investment-reports .swiper-container', {
    loop: true,
    pagination: {
      el: '.investment-reports .swiper-pagination',
    },
    navigation: {
      nextEl: '.investment-reports .swiper-arrows .next',
      prevEl: '.investment-reports .swiper-arrows .prev',
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

/* #Job Posts Slider
  ======================================================= */
if (document.querySelector('.job-posts .swiper-container')) {
  new Swiper('.job-posts .swiper-container', {
    pagination: {
      el: '.job-posts .swiper-pagination',
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
        slidesPerView: 3
      }
    }
  });
}

/* #Popup
  ======================================================= */
const popups = document.querySelectorAll('.popup');
const popupTogglers = document.querySelectorAll('.popup-toggler');
const popupClosers = document.querySelectorAll('.popup-close');
const popupBackdrops = document.querySelectorAll('.popup-backdrop');

if (popups && popupTogglers) {
  popups.forEach((popup) => {
    gsap.set(popup, {
      display: 'block'
    });
  });

  popupTogglers.forEach((toggler) => {

    toggler.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = document.querySelector(toggler.dataset.popup);

      body.classList.add('no-scroll');
      popup.classList.add('show');
    });
  });
}

if (popupClosers) {
  popupClosers.forEach((closer) => {
    closer.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = closer.closest('.popup');

      body.classList.remove('no-scroll');
      popup.classList.remove('show');

    })
  });
}

if (popupBackdrops) {
  popupBackdrops.forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      e.preventDefault();

      const popup = backdrop.closest('.popup');

      body.classList.remove('no-scroll');
      popup.classList.remove('show');

    })
  });
}

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
});