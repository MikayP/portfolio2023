let navButton=document.querySelector(".nav-button");function openCity(e,t){var n,o,a;for(o=document.getElementsByClassName("tabcontent"),n=0;n<o.length;n++)o[n].style.display="none";for(a=document.getElementsByClassName("tablinks"),n=0;n<a.length;n++)a[n].className=a[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}navButton.addEventListener("click",(e=>{e.preventDefault(),document.body.classList.toggle("nav-visible")})),jQuery(document).ready((function(e){jQuery(window).scroll((function(){jQuery(document).scrollTop()>100?jQuery("header").addClass("down"):jQuery("header").removeClass("down")}))})),jQuery(".menu-item:not(.window-top):not(.site-link) a").on("click",(function(e){e.preventDefault();var t=jQuery(this).attr("href"),n=jQuery(t).offset().top;jQuery("body,html").stop.animate({scrollTop:n},1e3)})),jQuery(".menu-item.window-top").on("click",(function(e){jQuery("html, body").animate({scrollTop:"0px"},1e3)})),AOS.init();