var root = document.documentElement;
root.className += " scroll";

var scrollYOld = 0;


$('.a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var link = $(this).attr('href'),
		targetOffset = $(link).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

window.onscroll = () => {
  if(scrollYOld == 0) {
    scrollYOld = window.scrollY;
  }

  hidden();

  if(!scrollUp(window.scrollY) || !window.scrollY > 0) {
    navbar.classList.add("transform");
    nameScroll.classList.add("transform");
  }else {
    navbar.classList.remove("transform");
    nameScroll.classList.remove("transform");
  }
}



function scrollUp(scroll) {
  if(scroll == 0) {
    scrollYOld = scroll;
    return false;
  }

  if(scroll < scrollYOld) {
    scrollYOld = scroll;
    return true;
  }else {
    scrollYOld = scroll;
    return false;
  }
}

function boxTop(idBox) {
  return $(idBox).offset().top;
}

const progress = document.querySelectorAll('.progress-done');

function addProgress(range = [0, 8]) {
  for(let i = range[0]; i <= range[1]; i++) {
    progress[i].style.width = progress[i].getAttribute('data-done') + '%';
  }
}

/*function removeProgress(range = [0, 8]) {
  for(let i = range[0]; i <= range[1]; i++) {
    progress[i].style.width = '100%';
  }
}*/

$(document).ready(function () {
  const $projeto1 = $(".projeto1-progress"),
    windowHeightprojeto1 = $(window).height(),
    offsetprojeto1 = windowHeightprojeto1 - windowHeightprojeto1 / 4;



  

  
  

  function animeScroll() {
    const documentTop = $(document).scrollTop();
    $projeto1.each(function () {
      if (documentTop > boxTop(this) - offsetprojeto1) {
        addProgress([0, 2]);
      }
    });
  
    $targetAnime.each(function () {
      if (documentTop > boxTop(this) - offsetAnime) {
        $(this).addClass(animationClassAnime);
      } else {
        $(this).removeClass(animationClassAnime);
      }
    });
    $targetTyping.each(function () {
      if (documentTop > boxTop(this) - offsetTyping) {
        $(this).addClass(animationClassTyping);
      } else {
        $(this).removeClass(animationClassTyping);
      }
    });
    $target.each(function () {
      if (documentTop > boxTop(this) - offset) {
        $(this).addClass(animationClass);
      } else {
        $(this).removeClass(animationClass);
      }
    });
  }

  animeScroll();

  $(document).scroll(function () {
    setTimeout(function () {
      animeScroll();
    }, 150);
  });
});