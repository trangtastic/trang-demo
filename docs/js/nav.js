$(document).ready(function(){var e=window.location.href,n=$(".logo").attr("href");let o=e===new URL(n,window.location.origin).href;barba.init({transitions:[{name:"opacity-transition",leave(e){return gsap.to(e.current.container,{opacity:0})},enter(e){return gsap.from(e.next.container,{opacity:0})}}]}),$(".mobile-toggle").click(function(){$(".main_h").toggleClass("open-wide"),$(this).toggleClass("open-nav")}),$(".main_h li a").click(function(){$(".main_h").removeClass("open-wide"),$(".mobile-toggle").removeClass("open-nav")}),$(".logo").click(function(e){o&&e.preventDefault(),$(".main_h").hasClass("open-wide")&&($(".main_h").removeClass("open-wide"),$(".mobile-toggle").removeClass("open-nav"))})});