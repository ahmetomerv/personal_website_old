// smooth scroll
$('#nav_scroll').localScroll();
$('.wrapper').localScroll();


// scroll reveal
window.sr = ScrollReveal();

sr.reveal('header', {
  duration: 2000,
  origin: 'top'
});

sr.reveal('.card', {
  duration: 1000,
  origin: 'bottom',
  distance: '100px'
});

sr.reveal('#what-I-do', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('.primary-button', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('.workbox', {
  duration: 1500,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('.tool', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px'
});

sr.reveal('.code-icon', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px'
});

sr.reveal('.design-icon', {
  duration: 2000,
  origin: 'bottom',
  distance: '100px'
});

sr.reveal('.logo-container', {
  duration: 2000,
  origin: 'bottom',
  distance: '50px'
});


// loader
var loader = document.getElementById('loader');
window.addEventListener('load', function() {
  loader.style.display = 'none';
})
