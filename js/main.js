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
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('.web-des', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('.psd', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});


sr.reveal('.res-des', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('.ui-ux', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('.e-com', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('#what-I-do', {
  duration: 1000,
  origin: 'bottom',
  distance: '50px'
});

sr.reveal('#button-contact', {
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

// /* -----  slider  -----*/
// var i = 0; // start point
// var images = [];
// var time = 3000;
//
// // image list
// images[0] = 'img/bleemen-home.jpg'
// images[1] = 'img/bleemen-contact.jpg';
// images[2] = 'img/talent2celeb-home.jpg';
//
// // change image
// function changeImg () {
//   document.slide.src = images[i];
//
//   if (i < images.length - 1) {
//     i++;
//   } else {
//     i = 0;
//   }
//
//   setTimeout('changeImg()', time);
// }
//
// window.onload = changeImg;
