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