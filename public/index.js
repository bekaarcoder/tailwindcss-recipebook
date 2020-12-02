const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const menuClose = document.querySelector("#menu-close");
const menuOpen = document.querySelector("#menu-open");

burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menuOpen.classList.add("hidden");
    menuClose.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  }
});
