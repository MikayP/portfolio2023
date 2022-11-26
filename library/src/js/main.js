let navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", (e) => { 
  e.preventDefault();
  
  // toggle nav state
  document.body.classList.toggle("nav-visible");
});    


jQuery(document).ready(function( $ ) {


  jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 100) {
      jQuery('header').addClass('down');
    } else {
      jQuery('header').removeClass('down');
    }
  });
});

