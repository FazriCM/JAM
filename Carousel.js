var slideIndex = 0;
carouselStart();

function carouselStart() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "flex";
  setTimeout(carouselStart, 3000); // Change image every 2 seconds
}


