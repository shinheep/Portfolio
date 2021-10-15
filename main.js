
// Toggling Hamburger Menu to Display/Hide NavBar
$('.hamburger').on('click', function(event){
    event.preventDefault();
    $('.navbar').toggle("display");
  });

//Changing Project Background to White, and Font Color to Black using animation
$('.1').on('click', function(event){
    $('.1').toggleClass('projectClick');
})

$('.2').on('click', function(event){
    $('.2').toggleClass('projectClick');
})

$('.3').on('click', function(event){
    $('.3').toggleClass('projectClick');
})