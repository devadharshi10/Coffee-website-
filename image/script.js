const header = document.querySelector("header");
const menuBtn= document.querySelector("#menu-btn");
const CloseMenubtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on menu button click
menuBtn.addEventListener("click",() => {
  header.classList.toggle("show-mobile-menu");
});

// close mobile menu on close button click
closeMenuBtn.addEventListener("click",() => {
 menuBtn,click();
});