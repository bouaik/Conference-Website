const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mainMenu = document.querySelector(".main-menu");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    closeIcon.classList.add("active");
    mainMenu.classList.add("active");
})
closeIcon.addEventListener("click", () => {
    menuIcon.classList.add("active");
    closeIcon.classList.remove("active");
    mainMenu.classList.remove("active");
})