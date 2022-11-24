let navButton = document.querySelector(".nav-button");

navButton.addEventListener("click", (e) => { 
  e.preventDefault();
  
  // toggle nav state
  document.body.classList.toggle("nav-visible");
});    