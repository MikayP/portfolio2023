if(null!==document.querySelector("body.page-template-menu_and_footer-php")){document.querySelector(".nav-button").addEventListener("click",(e=>{e.preventDefault(),document.body.classList.toggle("nav-visible")}))}function openCity(e,t){var n,o,a;for(o=document.getElementsByClassName("tabcontent"),n=0;n<o.length;n++)o[n].style.display="none";for(a=document.getElementsByClassName("tablinks"),n=0;n<a.length;n++)a[n].className=a[n].className.replace(" active","");document.getElementById(t).style.display="block",e.currentTarget.className+=" active"}jQuery(document).ready((function(e){jQuery(window).scroll((function(){jQuery(document).scrollTop()>100?jQuery("header").addClass("down"):jQuery("header").removeClass("down")}))})),jQuery(".menu-item:not(.window-top):not(.site-link) a").on("click",(function(e){e.preventDefault();var t=jQuery(this).attr("href"),n=jQuery(t).offset().top;jQuery("body,html").animate({scrollTop:n},1e3)})),jQuery(".menu-item.window-top").on("click",(function(e){jQuery("html, body").animate({scrollTop:"0px"},1e3)})),jQuery("nav a").on("click",(function(e){jQuery(this).parent().find("a").removeClass("active"),jQuery(this).addClass("active")})),jQuery(window).on("scroll",(function(){jQuery(".wp-bootstrap-blocks-container").each((function(){if(jQuery(window).scrollTop()>=jQuery(this).offset().top){console.log(jQuery(this).prev());var e=jQuery(this).attr("id");jQuery("nav a").removeClass("active"),jQuery("nav a[href=#"+e+"]").addClass("active")}}))})),AOS.init();