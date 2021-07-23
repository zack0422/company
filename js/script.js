const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

$('.drawer-icon').on('click', function (e) {
  e.preventDefault();
  
  $('.drawer-icon').toggleClass('is-active');
  $('.drawer-content').toggleClass('is-active');
  $('.drawer-background').toggleClass('is-active');
  return false;
});

$('a[href^="#"]').on('click', function() {
  let id = $(this).attr('href');
  let header = $('.header').innerHeight();
  let position = 0;
  if (id != '#') {
    position = $(id).offset().top - header;
  };

  $('html,body').animate({
    scrollTop: position
  }, 300
  );
});

$(window).on('scroll', function() {
  if (100 < $(this).scrollTop()) {
    $('.to-top').addClass('is-show');
  } else {
    $('.to-top').removeClass('is-show');
  }
});