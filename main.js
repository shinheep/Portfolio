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


//Changing text color upon hover//
$('#engineer').mouseover(function(event){
    $('#engineer').css("color", "blue")
});

$('#engineer').mouseleave(function(event){
    $('#engineer').css("color", "white")
});

$('#developer').mouseover(function(event){
    $('#developer').css("color", "blue")
});

$('#developer').mouseleave(function(event){
    $('#developer').css("color", "white")
});

$('#programmer').mouseover(function(event){
    $('#programmer').css("color", "blue")
});

$('#programmer').mouseleave(function(event){
    $('#programmer').css("color", "white")
});

$('#coder').mouseover(function(event){
    $('#coder').css("color", "blue")
});

$('#coder').mouseleave(function(event){
    $('#coder').css("color", "white")
});

$('#dog-lover').mouseover(function(event){
    $('#dog-lover').css("color", "magenta")
});

$('#dog-lover').mouseleave(function(event){
    $('#dog-lover').css("color", "white")
});