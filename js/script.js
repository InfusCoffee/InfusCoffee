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
