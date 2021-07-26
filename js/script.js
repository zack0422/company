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

$('.header__nav li a').on('click', function() {
  $('.header__nav li a').removeClass('is-active');
  $(this).addClass('is-active');
});

$('.qa__q').on('click', function() {
  $(this).next().slideToggle();
  $(this).children('.qa__icon').toggleClass('is-open');
});

$('.js-modal-open').on('click', function(e) {
  e.preventDefault();
  let target = $(this).data('target');
  $(target).show();
  $('body').addClass('is-fixed')
  // モーダルが開いたら、bodyにfixedを付与
  $('body').style.position = 'fixed';
  $('body').style.top = `-${window.scrollY}px`;
  return false;
});

$('.js-modal-close').on('click', function(e) {
  e.preventDefault();
  let target = $(this).data('target');
  $(target).hide();
  $('body').removeClass('is-fixed')
  // モーダルが閉じられ時...
  const top = document.body.style.top;
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  return false;
});