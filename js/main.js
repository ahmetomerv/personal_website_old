// smooth scroll
$('#nav_scroll').localScroll();
$('.wrapper').localScroll();


// scroll reveal
window.sr = ScrollReveal();
sr.reveal('header', {
  duration: 2000,
  origin: 'top'
});

sr.reveal('.web-dev', {
  duration: 1500,
  origin: 'left',
  distance: '300px'
});

sr.reveal('.web-des', {
  duration: 1500,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.psd', {
  duration: 1500,
  origin: 'right',
  distance: '300px'
});


sr.reveal('.res-des', {
  duration: 1500,
  origin: 'left',
  distance: '300px'
});

sr.reveal('.ui-ux', {
  duration: 1500,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.e-com', {
  duration: 1500,
  origin: 'right',
  distance: '300px'
});

sr.reveal('#what-I-do', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('#button-contact', {
  duration: 1000,
  origin: 'top',
  distance: '50px'
});
