const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  close = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

close.addEventListener("click", () => {
  menu.classList.remove("active");
});

const count = document.querySelectorAll(".skills__ratings-count"),
  lines = document.querySelectorAll(".skills__ratings-line span");

count.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
