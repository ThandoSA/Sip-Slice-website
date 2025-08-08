// ========== SCROLL UP BUTTON CLICK (Smooth Scroll to Top) ==========
document.addEventListener('DOMContentLoaded', () => {
  const scrollUpEl = document.getElementById('scroll-up');
  if (scrollUpEl) {
    scrollUpEl.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
// === Section Reveal Animation ===
document.addEventListener('DOMContentLoaded', () => {
  const revealSections = document.querySelectorAll('.section');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });
    revealSections.forEach(section => {
      observer.observe(section);
    });
  } else {
    // Fallback for old browsers
    revealSections.forEach(section => section.classList.add('revealed'));
  }
});

// ======= NAVIGATION MENU TOGGLE =======
const navMenu = document.getElementById('nav__menu');
const navToggle = document.getElementById('nav__toggle');
const navClose = document.getElementById('nav__close');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
}
if (navClose && navMenu) {
  navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));
}

// Remove menu on mobile after clicking a link
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900 && navMenu) {
      navMenu.classList.remove('show-menu');
    }
  });
});


// ========== CHANGE BACKGROUND HEADER ON SCROLL ==========
const scrollHeader = () => {
  const header = document.getElementById('header');
  if (header) {
    window.scrollY >= 50
      ? header.classList.add('scroll-header')
      : header.classList.remove('scroll-header');
  }
};
window.addEventListener('scroll', scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});


// ========== SCROLL SECTIONS ACTIVE LINK ==========
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollDown = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');
    if (navLink) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);


// ========== SHOW SCROLL UP BUTTON ==========
function scrollUp() {
  const scrollUpEl = document.getElementById('scroll-up');
  if (scrollUpEl) {
    window.scrollY >= 350
      ? scrollUpEl.classList.add('show-scroll')
      : scrollUpEl.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);


// ========== SHOW/HIDE CART (if present) ==========
const cart = document.getElementById('cart');
const cartShop = document.getElementById('cart-shop');
const cartClose = document.getElementById('cart-close');
if (cartShop && cart) {
  cartShop.addEventListener('click', () => cart.classList.add('show-cart'));
}
if (cartClose && cart) {
  cartClose.addEventListener('click', () => cart.classList.remove('show-cart'));
}


// ========== DARK/LIGHT THEME TOGGLE ==========
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

if (themeButton) {
  // Previously selected topic (if user selected)
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  // Get current theme/icon
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

  // Apply previously selected theme
  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
  }

  // Toggle theme on button click
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });
}