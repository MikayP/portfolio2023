let navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", (e) => { 
  e.preventDefault();
  
  // toggle nav state
  document.body.classList.toggle("nav-visible");
});    

// Work section
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


jQuery(document).ready(function( $ ) {

  jQuery(window).scroll(function() {
    if (jQuery(document).scrollTop() > 100) {
      jQuery('header').addClass('down');
    } else {
      jQuery('header').removeClass('down');
    }
  });
});


jQuery('.menu-item a').on('click', function(e){
  e.preventDefault();
  var get_section = jQuery(this).attr('href'),
    section_offset = jQuery(get_section).offset().top;
  jQuery('body,html').animate({
    scrollTop: section_offset
  }, 1000);
});
