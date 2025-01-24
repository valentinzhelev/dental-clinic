document.addEventListener("DOMContentLoaded", function () {
    const topHeader = document.querySelector(".top-header");
    const mainHeader = document.querySelector(".main-header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            topHeader.classList.add("hidden");
            mainHeader.classList.add("scrolled");
        } else {
            topHeader.classList.remove("hidden");
            mainHeader.classList.remove("scrolled");
        }
        lastScrollY = window.scrollY;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const topHeader = document.querySelector(".top-header");
    const mainHeader = document.querySelector(".main-header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function () {
        if (window.scrollY > lastScrollY) {
            topHeader.classList.add("hidden");
            mainHeader.classList.add("scrolled");
        } else {
            topHeader.classList.remove("hidden");
            mainHeader.classList.remove("scrolled");
        }
        lastScrollY = window.scrollY;
    });
});

document.getElementById("show-more").addEventListener("click", function () {
    const hiddenItems = document.querySelectorAll(".gallery-item.hidden");
    hiddenItems.forEach(item => item.classList.remove("hidden"));
    this.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.querySelector(".lightbox-img");
    const closeBtn = document.querySelector(".close-btn");

    galleryItems.forEach((img) => {
        img.addEventListener("click", () => {
            lightbox.classList.remove("hidden");
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.add("hidden");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.add("hidden");
        }
    });
});