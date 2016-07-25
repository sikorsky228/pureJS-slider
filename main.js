'use strict'

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);//Set autoslide interval
var playing = true;
var next = document.getElementById('next');
var previous = document.getElementById('previous');


function nextSlide(callback) {
     goToSlide(currentSlide+1);
     if(callback){
        callback();
    }
}

function previousSlide(callback) {
    goToSlide(currentSlide-1);
    if(callback){
        callback();
    }
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    playing = true;
    slideInterval = setInterval(nextSlide,3000);
}

next.onclick = function() {
    pauseSlideshow();
    nextSlide(function(){
        playSlideshow();
    });
};
previous.onclick = function() {
    pauseSlideshow();
    previousSlide(function(){
        playSlideshow();
    });
};