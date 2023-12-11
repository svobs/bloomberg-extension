//'use strict';


var success = false;
//if (document.body) {
//
function matt_func() {

// show article
var elems = document.querySelectorAll("div.fence-body p[style]");
var len = elems.length;

if (len > 0) {
  success = true;
}
for (var i = 0; i < len; i++) {
  elems[i].style.display = "block";
}
// hide paywall
elems = document.querySelectorAll("div.paywall-inline-tout");
len = elems.length;
for (var i = 0; i < len; i++) {
  elems[i].style.display = "none";
}

// hide "sign in / subscribe"
document.querySelector("div.navi-bar__right").style.display = 'none';
var banner = document.getElementById("paywall-banner");
if (banner) {
  banner.parentNode.removeChild(banner);
}


// hide Bloomberg.com's paywall overlay:
document.getElementsByTagName("body")[0].setAttribute("data-paywall-overlay-status", "hide");
var overlay = document.getElementById("paywall-overlay");
if (overlay) {
  overlay.parentNode.removeChild(overlay);
}

overlay = document.getElementById("graphics-paywall-overlay");
if (overlay) {
  overlay.parentNode.removeChild(overlay);
}


}

matt_func();

if (true) {
  setInterval(function() {
    matt_func();
	if (!success) {
      setTimeout(function() {
        matt_func();
      }, 2000);
    } else {
	  success = false;
	}
  }, 500);
}


