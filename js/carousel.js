var applediv = document.getElementById("apple");
var orangediv = document.getElementById("orange");
var lemondiv = document.getElementById("lemon");
var strawberrydiv = document.getElementById("strawberry");

var bodycolor = document.getElementById("body");

var appleimg = document.getElementById("appleimg");
var lemonimg = document.getElementById("lemonimg");
var orangeimg = document.getElementById("orangeimg");
var strawberryimg = document.getElementById("strawberryimg");

var appletext = document.getElementById("appletext");
var lemontext = document.getElementById("lemontext");
var strawberrytext = document.getElementById("strawberrytext");
var orangetext = document.getElementById("orangetext");

var bgimg1 = document.getElementById("bgimg1");
var bgimg2 = document.getElementById("bgimg2");
var bgimg3 = document.getElementById("bgimg3");
var bgimg4 = document.getElementById("bgimg4");

apple();

function apple() 
{
    applediv.style.width = "600px";
    orangediv.style.width = "100px";
    lemondiv.style.width = "100px";
    strawberrydiv.style.width = "100px";

    bodycolor.style.backgroundColor = "#fff8e7";

    orangeimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    lemonimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    strawberryimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    appleimg.style.animation = "down 1s linear 0s 1 normal forwards";

    lemontext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    strawberrytext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    orangetext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    appletext.style.animation = "text 1s linear 0s 1 normal forwards";
    
    bgimg1.src = "img/caramellatte.png";
    bgimg2.src = "img/caramellatte.png";
    bgimg3.src = "img/caramellatte.png";
    bgimg4.src = "img/caramellatte.png";
}
function lemon() 
{
    lemondiv.style.width = "600px";
    orangediv.style.width = "100px";
    applediv.style.width = "100px";
    strawberrydiv.style.width = "100px";

    bodycolor.style.backgroundColor = "#f7e35b";

    orangeimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    appleimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    strawberryimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    lemonimg.style.animation = "down 1s linear 0s 1 normal forwards";

    appletext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    strawberrytext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    orangetext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    lemontext.style.animation = "text 1s linear 0s 1 normal forwards";

    bgimg1.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/lemonbg.png";
    bgimg2.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/lemonbg.png";
    bgimg3.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/lemonbg.png";
    bgimg4.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/lemonbg.png";


}

function strawberry() 
{
    strawberrydiv.style.width = "600px";
    applediv.style.width = "100px";
    orangediv.style.width = "100px";
    lemondiv.style.width = "100px";

    bodycolor.style.backgroundColor = "#FF6286";

    orangeimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    appleimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    lemonimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    strawberryimg.style.animation = "down 1s linear 0s 1 normal forwards";

    appletext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    orangetext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    lemontext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    strawberrytext.style.animation = "text 1s linear 0s 1 normal forwards";

    bgimg1.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/strawberrybg.png";
    bgimg2.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/strawberrybg.png";
    bgimg3.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/strawberrybg.png";
    bgimg4.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/strawberrybg.png";
}
function orange() 
{
    orangediv.style.width = "600px";
    applediv.style.width = "100px";
    lemondiv.style.width = "100px";
    strawberrydiv.style.width = "100px"; 

    bodycolor.style.backgroundColor = "#f4a308";

    appleimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    lemonimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    strawberryimg.style.animation = "visibility-h 0s linear 0s 1 normal forwards";
    orangeimg.style.animation = "down 1s linear 0s 1 normal forwards";

    appletext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    lemontext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    strawberrytext.style.animation = "text-back 1s linear 0s 1 normal forwards";
    orangetext.style.animation = "text 1s linear 0s 1 normal forwards";

    bgimg1.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/orange.png";
    bgimg2.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/orange.png";
    bgimg3.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/orange.png";
    bgimg4.src = "https://darksoul-codepen.github.io/Fruits%20Carousel/orange.png";
}
