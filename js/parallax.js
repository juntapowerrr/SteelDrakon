import simpleParallax from 'simple-parallax-js';

var image = document.getElementsByClassName('123');
new simpleParallax(image, {
	orientation: 'down', //up - right - down - left - up left - up right - down left - left right
    scale: 1.2,
    overflow: false,
    delay: 0.4,
    transition: 'cubic-bezier(0,0,0,1)',
    customContainer: "",
    customWrapper: "",
    maxTransition: 0 //percentage between 1 and 99
});