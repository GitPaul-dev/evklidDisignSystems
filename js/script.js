const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  a11y: {
    enabled: false,
  }
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link')

burger.addEventListener('click', function() {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

let tabsBtn = document.querySelectorAll('.stages__btn');
let tabsItem = document.querySelectorAll('.stages__box');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('stages__btn--active')});
    e.currentTarget.classList.add('stages__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('stages__box--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('stages__box--active');
  });
});

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true,
    active: false,
  });
} );
