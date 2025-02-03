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


document.addEventListener('DOMContentLoaded', function () {
    const showMoreBtn = document.getElementById('show-more');
    const hiddenImages = document.querySelectorAll('.gallery-item.hidden');

    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function () {
            hiddenImages.forEach(img => img.classList.remove('hidden'));
            showMoreBtn.style.display = 'none';
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');
    const topHeader = document.querySelector('.top-header');
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = galleryItems[currentIndex].src;
        lightbox.classList.remove('hidden');

        if (topHeader) {
            topHeader.style.display = "none";
        }

        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.add('hidden');

        if (topHeader) {
            topHeader.style.display = "";
        }
        document.body.style.overflow = "";
    }

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = galleryItems.length - 1;
        } else if (currentIndex >= galleryItems.length) {
            currentIndex = 0;
        }
        lightboxImg.src = galleryItems[currentIndex].src;
    }

    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function () {
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', function () {
        changeImage(-1);
    });
    nextBtn.addEventListener('click', function () {
        changeImage(1);
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links li a');

    navLinks[0].classList.add('active');

    window.addEventListener('scroll', function() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    
        if (!current) {
            navLinks[0].classList.add('active');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".hamburger");
    const mobileMenu = document.querySelector("#mobileMenu");

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("active");
            document.body.classList.toggle("menu-open");
        });
    }
});
