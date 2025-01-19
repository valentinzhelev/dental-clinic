document.addEventListener("DOMContentLoaded", function () {
    const topHeader = document.querySelector(".top-header");
    const mainHeader = document.querySelector(".main-header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            // Скрий top-header и премести main-header нагоре
            topHeader.classList.add("hidden");
            mainHeader.classList.add("scrolled");
        } else {
            // Покажи top-header и върни main-header на мястото му
            topHeader.classList.remove("hidden");
            mainHeader.classList.remove("scrolled");
        }
        lastScrollY = window.scrollY;
    });
});
