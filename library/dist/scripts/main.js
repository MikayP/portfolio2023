let navButton=document.querySelector(".nav-button");function openCity(e,t){var n,a,o;for(a=document.getElementsByClassName("tabcontent"),n=0;n<a.length;n++)a[n].style.display="none";for(o=document.getElementsByClassName("tablinks"),n=0;n<o.length;n++)o[n].className=o[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}navButton.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.toggle("nav-visible")})),jQuery(document).ready((function(e){jQuery(window).scroll((function(){jQuery(document).scrollTop()>100?jQuery("header").addClass("down"):jQuery("header").removeClass("down")}))})),jQuery(".menu-item a").on("click",(function(e){e.preventDefault();var t=jQuery(this).attr("href"),n=jQuery(t).offset().top;jQuery("body,html").animate({scrollTop:n},1e3)}));