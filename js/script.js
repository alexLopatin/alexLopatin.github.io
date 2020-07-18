
var IsOpened = true;

function Toggle() {
	if(IsOpened)
		closeNav();
	else
		openNav();
	IsOpened = !IsOpened;
}

function openNav() {
  
  document.getElementsByClassName("navbar")[0].style.width = "300px";
  setTimeout(() => {  showInfo(); }, 500);
  document.getElementsByClassName("content")[0].style.marginLeft  = "300px";
}

function showInfo() {

	var els = document.getElementsByClassName("navBar-full");
	var toggler = document.getElementsByClassName("menuToggler")[0];

	toggler.style.marginLeft = "20px";
	toggler.style.marginRight = "auto";
	setTimeout(() => {
		toggler.marginLeft = "0";
		toggler.marginRight = "0";
		Array.prototype.forEach.call(els, function(el) {
	    el.style.display = "block";
		fadeIn(el, 250);
	});
	}, 650);

}

function closeNav() {
  

  //document.getElementsByClassName("navBar-full").style.display = "none";
  var els = document.getElementsByClassName("navBar-full");
  var toggler = document.getElementsByClassName("menuToggler")[0];
  Array.prototype.forEach.call(els, function(el) {
	    el.style.display = "block";
		fadeOut(el, 250);
	});
  setTimeout(() => { 
  	document.getElementsByClassName("navbar")[0].style.width = "100px";
   Array.prototype.forEach.call(els, function(el) {
	    el.style.display = "none";
	});
   document.getElementsByClassName("content")[0].style.marginLeft  = "100px";
	setTimeout(() => {
  	toggler.style.marginLeft = "40%";
	toggler.style.marginRight = "40%";
	}, 650);
  }, 250);
}

function fadeIn(el, time) {
  el.style.opacity = 0;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}
function fadeOut(el, time) {
  el.style.opacity = 1;

  var last = +new Date();
  var tick = function() {
    el.style.opacity = +el.style.opacity - (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity > 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
}