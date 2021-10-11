// $('h3').animate({left: '250px'});

/* typewriter effect */
const i=0;
const text = "hello";
const speed = 50;

function typeWriter() {
    if (i < text.length) {
        $('.skillsUnderHeader').innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}