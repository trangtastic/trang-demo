(r=>{r.fn.fitVids=function(e){var t,o,i={customSelector:null};return document.getElementById("fit-vids-style")||(t=document.createElement("div"),o=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],t.className="fit-vids-style",t.id="fit-vids-style",t.style.display="none",t.innerHTML="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>",o.parentNode.insertBefore(t,o)),e&&r.extend(i,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];i.customSelector&&e.push(i.customSelector),r(this).find(e.join(",")).not("object object").each(function(){var e,t,o=r(this);"embed"===this.tagName.toLowerCase()&&o.parent("object").length||o.parent(".fluid-width-video-wrapper").length||(e=("object"===this.tagName.toLowerCase()||o.attr("height")&&!isNaN(parseInt(o.attr("height"),10))?parseInt(o.attr("height"),10):o.height())/(isNaN(parseInt(o.attr("width"),10))?o.width():parseInt(o.attr("width"),10)),o.attr("id")||(t="fitvid"+Math.floor(999999*Math.random()),o.attr("id",t)),o.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),o.removeAttr("height").removeAttr("width"))})})}})(window.jQuery||window.Zepto),(o=>{let t=document.getElementById("cursor"),i=document.getElementById("cursor2"),r=document.getElementById("cursor3");function e(e){i.classList.add("hover"),r.classList.add("hover")}function a(e){i.classList.remove("hover"),r.classList.remove("hover")}document.getElementsByTagName("body")[0].addEventListener("mousemove",function(e){t.style.left=e.clientX+"px",t.style.top=e.clientY+"px",i.style.left=e.clientX+"px",i.style.top=e.clientY+"px",r.style.left=e.clientX+"px",r.style.top=e.clientY+"px"}),a();for(var s,n=document.querySelectorAll(".hover-target"),d=n.length-1;0<=d;d--)(s=n[d]).addEventListener("mouseover",e),s.addEventListener("mouseout",a);o(".video-section").on("mouseover",function(e){o("body").addClass("video-cursor")}),o(".video-section").on("mouseout",function(e){o("body").removeClass("video-cursor")}),o(".link-to-portfolio").on("mouseover",function(e){o("body").addClass("logo-cursor")}),o(".link-to-portfolio").on("mouseout",function(e){o("body").removeClass("logo-cursor")}),o(document).ready(function(){o(".container").fitVids(),o(".vimeo a,.youtube a").on("click",function(e){e.preventDefault();var e=o(this).attr("href"),t=(o(this).parent(),o(this).parent());o(this).parent().hasClass("youtube")?(o(this).parent().wrapAll('<div class="video-wrapper">'),o(t).html('<iframe frameborder="0" height="333" src="'+e+'?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>')):(o(this).parent().wrapAll('<div class="video-wrapper">'),o(t).html('<iframe src="'+e+'?autoplay=1&loop=1&autopause=0&muted=1&color=8c6acc" width="500" height="281" frameborder="0" allow="autoplay"></iframe>'))})})})(jQuery);