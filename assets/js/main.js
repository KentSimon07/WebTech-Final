const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("hidden") === false;
  menuBtn.setAttribute("aria-expanded", isOpen);
});
