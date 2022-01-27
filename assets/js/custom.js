(function() {
  "use strict";
   ShowHideSlideBtn(false);

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight
    if (!header.classList.contains('fixed-top')) {
      offset += 70
    }
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
    document.getElementById("ul").style.width = "0";
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active');
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault();
      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Clients Slider
   */
  var logoCount = 5;
      new Splide('.splide', {
        easing: 'linear',
        waitForTransition: true,
        type: 'loop',
        autoplay: true,
        perPage: logoCount,
        perMove: 1,
        arrows: false,
        interval: 0,
        speed: 4000,
        padding: 20,
        pagination: false,
        breakpoints:{
          480: {
            perPage: 2
          },
          640: {
            perPage: 2
          },
          768: {
            perPage: 4
          },
          1300: {
            perPage: 5
          }
        }
      } ).mount();

  /**
   * Contact Slider (Office Locations)
   */
   new Swiper('.contact-slider', {
    speed: 400,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      //el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  /**
   * Our success stories
   */
   new Swiper('.our-success-stories', {
    speed: 400,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      //el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

  /**
   * homebanner-slider
   */
   new Swiper('.homebanner-slider', {
    speed: 400,
    loop: true,
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  });

/**
   * subbanner-slider
   */
 new Swiper('.subbanner-slider', {
  speed: 400,
  loop: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});  

/**
   * Products & Services
   */
 new Swiper('.products-slider', {
  speed: 400,
  loop: false,
  slidesPerView: 'auto',
  pagination: {
    //el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 15
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 2.1,
      spaceBetween: 5
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 15
    },
    992: {
      slidesPerView: 2.4,
      spaceBetween: 15
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/**
   * Leadership Slider
*/
 new Swiper('.leadership', {
  speed: 400,
  loop: false,
  slidesPerView: 'auto',
  pagination: {
   // el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15
    },
    425: {
      slidesPerView: 1.4,
      spaceBetween: 15
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 2.1,
      spaceBetween: 15
    },
    992: {
      slidesPerView:4,
      spaceBetween: 15
    }
  }
});

///Swiper slider new
new Swiper('.otherservices', {
  speed: 400,
  loop: false,
  slidesPerView: 'auto',
  pagination: {
   // el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.6,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 3.3,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 2.8,
      spaceBetween: 10
    },
    992: {
      slidesPerView:4.2,
      spaceBetween: 10
    }
  }
});

//how-operator
$(document).ready(function () {
  var swiper = new Swiper('.how-operator', {
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    speed: 500,
    loop: true,
    spaceBetween:0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });
});

//ourvalues
$(document).ready(function () {
  var swiper = new Swiper('.ourvalues', {
    autoplay: {
      delay: 10000,
      disableOnInteraction: false
    },
    speed: 500,
    loop: true,
    spaceBetween:0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  });
});

/**
   * Careers Slider
   */
 new Swiper('.careers-slider', {
  speed: 400,
  loop: false,
  slidesPerView: 'auto',
  pagination: {
   // el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    992: {
      slidesPerView: 2.2,
      spaceBetween: 10
    }
  }
});

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

//home banner slider
$(".homebanner-slider").on({
    mouseenter: function () {
	ShowHideSlideBtn(true);
    },
    mouseleave: function () {
	ShowHideSlideBtn(false);
    }
});

function ShowHideSlideBtn(show) {
    if (show)
    {
      $('.swiperbuttonprev').show();
      $('.swiperbuttonnext').show();	
    } else {
      $('.swiperbuttonprev').hide();
      $('.swiperbuttonnext').hide();
    }
}

//m-slider
var mySwiper = new Swiper ('.m-slider', {
	speed: 400,
  loop: false,
  slidesPerView: 'auto',
  pagination: {
   // el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 15
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    992: {
      slidesPerView:4,
      spaceBetween: 10
    }
  }
});

//popup js
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')
//myModal.addEventListener('shown.bs.modal', function () {
  //myInput.focus();
//});

//popup vertical center
$(document).ready(function() {
  console.log("document is ready");
 });
 window.onload = function() {
   console.log("window is loaded");
};

//defualt video paly and pause button hide
var vids = $("video"); 
  $.each(vids, function(){
         this.controls = false; 
  }); 
  $("video").click(function() {
    //console.log(this); 
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  });
