// $('h3').animate({left: '250px'});


// Toggling Hamburger Menu to Display/Hide NavBar
$('.hamburger').on('click', function(event){
    
    console.log('click worked!')
    event.preventDefault();
    $('.navbar').toggle("display");
  });