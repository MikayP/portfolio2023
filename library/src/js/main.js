if(document.querySelector('body.page-template-menu_and_footer-php') !== null){
let navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", (e) => { 
  e.preventDefault();
  
  // toggle nav state
  document.body.classList.toggle("nav-visible");
});  
}
  

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


// scroll to site, but not site links
jQuery('.menu-item:not(.window-top):not(.site-link) a').on('click', function(e){
  e.preventDefault();
  var get_section = jQuery(this).attr('href'),
    section_offset = jQuery(get_section).offset().top;
  jQuery('body,html').animate({
    scrollTop: section_offset
  }, 1000);

});


jQuery('.menu-item.window-top').on('click', function(e){
  jQuery('html, body').animate({scrollTop: '0px'}, 1000);

})

 

jQuery('nav a').on('click', function(event) {
  jQuery(this).parent().find('a').removeClass('active');
  jQuery(this).addClass('active');
});

jQuery(window).on('scroll', function() {
  jQuery('.wp-bootstrap-blocks-container').each(function() {
      if(jQuery(window).scrollTop() >= jQuery(this).offset().top) {
        console.log(jQuery(this).prev())
          var id = jQuery(this).attr('id');
          jQuery('nav a').removeClass('active');
          jQuery('nav a[href=#'+ id +']').addClass('active');
      }
  });
});

AOS.init();

if(document.querySelector('body.page-template-menu_and_footer-php') === null){

// Set the date we're counting down to
var countDownDate = new Date("Nov 9, 2023").getTime();
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
// Update the count down every 1 second
var x = setInterval(function() {


  // Display the result in the element with id="demo"
  document.getElementById("baby_days").innerHTML = "&nbsp"+ days + " days and " + hours + " hours";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("baby_days").innerHTML = "Girl is born!";
  }
  return days;
}, 1000);

  var weekOfBaby = Math.floor(40 - (days/7))
  document.getElementById("baby_days_left").innerHTML =days;
} 