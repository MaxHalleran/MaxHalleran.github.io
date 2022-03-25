/* eslint-env browser */
/* global $ */

function scrollToView(event) {
  event.preventDefault();
  document.getElementById(event.target.dataset.target).scrollIntoView({
    behavior: 'smooth',
  });
}

$(document).ready(() => {
  /* Adding smooth scrolling to the page
  */
  $('a[href^="#"]').click(scrollToView);
});
