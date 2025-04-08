document.addEventListener('DOMContentLoaded', () => {
    const largeImage = document.getElementById('large-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    let currentIndex = 0;
    let slideshowInterval = null;

    function showImage(index) {
        const img = thumbnails[index];
        const largeSrc = img.getAttribute('data-large');
        largeImage.src = largeSrc;
        largeImage.alt = img.alt;

        thumbnails.forEach(t => t.classList.remove('active'));
        img.classList.add('active');

        currentIndex = index;
    }

    function nextImage() {
        const nextIndex = (currentIndex + 1) % thumbnails.length;
        showImage(nextIndex);
    }

    function startSlideshow() {
        slideshowInterval = setInterval(nextImage, 4000);
    }

    function resetSlideshow() {
        clearInterval(slideshowInterval);
        startSlideshow();
    }

    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener('click', function () {
            showImage(i);
            resetSlideshow();
        });
    }

    showImage(currentIndex);
    startSlideshow();
});
