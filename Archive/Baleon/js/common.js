document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const html = document.querySelector('html'),
    globalWrap = document.querySelector('.global-wrap'),
    body = document.querySelector('body'),
    menuToggle = document.querySelector(".hamburger"),
    menuList = document.querySelector(".main-nav"),
    toggleTheme = document.querySelector(".toggle-theme"),
    testimonialsSlider = document.querySelector(".testimonials__slider"),
    overlay = document.querySelector('.overlay');


  /* =======================================================
  // Menu + Theme Switcher
  ======================================================= */
  menuToggle.addEventListener("click", () => {
    menu();
  });

  // Menu
  function menu() {
    menuToggle.classList.toggle("is-open");
    menuList.classList.toggle("is-visible");
  }

  // Theme Switcher
  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      darkMode();
    });
  };

  function darkMode() {
    if (html.classList.contains('dark-mode')) {
      html.classList.remove('dark-mode');
      localStorage.removeItem("theme");
      document.documentElement.removeAttribute("dark");
    } else {
      html.classList.add('dark-mode');
      localStorage.setItem("theme", "dark");
      document.documentElement.setAttribute("dark", "");
    }
  };


  /* ================================================================
  // Stop Animations During Window Resizing and Switching Theme Modes
  ================================================================ */
  let disableTransition;

  if (toggleTheme) {
    toggleTheme.addEventListener("click", () => {
      stopAnimation();
    });
  }

  window.addEventListener("resize", () => {
    stopAnimation();
  });

  function stopAnimation() {
    document.body.classList.add("disable-animation");
    clearTimeout(disableTransition);
    disableTransition = setTimeout(() => {
      document.body.classList.remove("disable-animation");
    }, 100);
  };


  /* =======================
  // Responsive Videos
  ======================= */
  reframe(".post__content iframe:not(.reframe-off), .page__content iframe:not(.reframe-off)");


  /* =======================
  // LazyLoad Images
  ======================= */
  const lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  });


  /* =======================
  // Zoom Image
  ======================= */
  if (overlay) {
    const images = document.querySelectorAll('.page__content img, .post__content img, .gallery img, .section-gallery img');

    images.forEach(image => {
      if (image.closest('a')) {
        image.classList.add('image-link');
      }
      image.addEventListener('click', e => {
        if (image.classList.contains('image-link')) {
          return;
        }
        overlay.classList.add('active');
        const img = document.createElement('img');
        img.src = image.src;
        while (overlay.firstChild) {
          overlay.removeChild(overlay.firstChild);
        }
        overlay.appendChild(img);
      });
    });

    overlay.addEventListener('click', e => {
      overlay.classList.remove('active');
      while (overlay.firstChild) {
        overlay.removeChild(overlay.firstChild);
      }
    });
  };


  /* ============================
  // Testimonials Slider
  ============================ */
  if (testimonialsSlider) {
    new Splide( testimonialsSlider, {
      perPage: 2,
      perMove: 1,
      gap: 32,
      arrows: false,
      drag: true,
      pagination: false,
      type: 'loop',
      autoScroll: {
        autoStart: false,
        speed: 0.8,
        pauseOnHover: false,
        pauseOnFocus: false
      },
      intersection: {
        inView: {
          autoScroll: true,
        },
        outView: {
          autoScroll: false,
        },
      },
      breakpoints: {
        1024: {
          perPage: 2
        },
        768: {
          perPage: 1
        }
      }
    } ).mount(window.splide.Extensions);
  };


  /* =================================
  // Accordion
  ================================= */
  const items = document.querySelectorAll(".faq .faq__item");

  function toggleAccordion() {
    const itemToggle = this.getAttribute('data-name');

    if (itemToggle === 'closed') {
      this.setAttribute('data-name', 'open');
    } else {
      this.setAttribute('data-name', 'closed');
    }
  }

  items.forEach(item => {
    item.addEventListener('click', toggleAccordion);
    item.addEventListener('keydown', function(event) {
      if (event.keyCode === 13) {
        toggleAccordion.call(this);
      }
    });
  });


  /* =================================
  // Load More Posts
  ================================= */
  var load_posts_button = document.querySelector('.load-more-posts');

  load_posts_button&&load_posts_button.addEventListener("click",function(e){e.preventDefault();var o=document.querySelector(".pagination"),e=pagination_next_url.split("/page")[0]+"/page/"+pagination_next_page_number+"/";fetch(e).then(function(e){if(e.ok)return e.text()}).then(function(e){var n=document.createElement("div");n.innerHTML=e;for(var t=document.querySelector(".grid"),a=n.querySelectorAll(".article--grid"),i=0;i<a.length;i++)t.appendChild(a.item(i));new LazyLoad({elements_selector:".lazy"});pagination_next_page_number++,pagination_next_page_number>pagination_available_pages_number&&(o.style.display="none")})});

});