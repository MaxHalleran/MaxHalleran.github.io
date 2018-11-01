/* eslint-env browser */
/* global $ */

function scrollToView(event) {
  event.preventDefault();
  document.getElementById(event.target.dataset.target).scrollIntoView({
    behavior: 'smooth',
  });
}

function projectFocus() {
  console.log('entered!');
}

function projectBlur() {
  console.log('exited!');
}

$(document).ready(() => {
  /* Adding smooth scrolling to the page
  */
  $('a[href^="#"]').click(scrollToView);

  $('.project').hover(projectFocus, projectBlur);
});
