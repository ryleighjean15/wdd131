document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.classList.add('lazyloaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(image => {
            observer.observe(image);
        });
    } else {
        images.forEach(image => {
            image.src = image.getAttribute('data-src');
            image.classList.add('lazyloaded');
        });
    }

    // Set last modified date
    document.getElementById("lastModified").textContent = document.lastModified;
});
