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

    galleryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const imageUrl = this.getAttribute('href');
            openLightbox(imageUrl);
        });
    });

    function openLightbox(imageUrl) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${imageUrl}" alt="Gallery Image">
                <span class="lightbox-close">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);

        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });

        lightbox.addEventListener('click', function(event) {
            if (event.target === lightbox) {
                document.body.removeChild(lightbox);
            }
        });
    }
});