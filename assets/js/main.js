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

document.addEventListener('DOMContentLoaded', function() {
    const galleryLinks = document.querySelectorAll('.gallery-link');
    let currentImageIndex = 0;

    galleryLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            currentImageIndex = index;
            openLightbox(link.getAttribute('href'));
        });
    });

    function openLightbox(imageUrl) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imageUrl}" alt="Gallery Image">
                <span class="lightbox-close">&times;</span>
                <span class="lightbox-prev">&lsaquo;</span>
                <span class="lightbox-next">&rsaquo;</span>
            </div>
        `;
        document.body.appendChild(lightbox);

        const closeBtn = lightbox.querySelector('.lightbox-close');
        const prevBtn = lightbox.querySelector('.lightbox-prev');
        const nextBtn = lightbox.querySelector('.lightbox-next');

        closeBtn.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });

        prevBtn.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex - 1 + galleryLinks.length) % galleryLinks.length;
            updateLightboxImage(lightbox, galleryLinks[currentImageIndex].getAttribute('href'));
        });

        nextBtn.addEventListener('click', function() {
            currentImageIndex = (currentImageIndex + 1) % galleryLinks.length;
            updateLightboxImage(lightbox, galleryLinks[currentImageIndex].getAttribute('href'));
        });

        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                document.body.removeChild(lightbox);
            }
        });
    }

    function updateLightboxImage(lightbox, imageUrl) {
        const img = lightbox.querySelector('img');
        img.src = imageUrl;
    }
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
