let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("myslides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length)
    {slideIndex = 1}
    if (n < 1) {slideIndex =
    slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display= "none";
    }
    for (i = 0; i  < dots.length; i++) {
        dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}
function prevSlide() {
    plusSlide(-1);
}
function nextSlide() {
    plusSlide(1);
}

