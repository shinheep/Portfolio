// $('h3').animate({left: '250px'});

$('.bouncy').on('click', function(event){
    event.preventDefault();
    $('.bouncy').toggle('bounce', {times:10}, 'slow');
})


// Toggling Hamburger Menu to Display/Hide NavBar
$('.hamburger').on('click', function(event){
    event.preventDefault();
    $('.navbar').toggle("display");
  });

  var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}