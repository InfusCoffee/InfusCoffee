// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//Ini kalo di pencet menunya nongol

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// buat klik di luar sidebar jadi ilang menu

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//Ini buat slider nya




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
