document.addEventListener('DOMContentLoaded', () => {
    const largeImage = document.getElementById('large-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    let isTransitioning = false;
    let currentIndex = 0;
    let slideshowInterval = null;
  
    function updateActiveThumbnail(index) {
      thumbnails.forEach(img => img.classList.remove('active'));
      thumbnails[index].classList.add('active');
      currentIndex = index;
    }
  
    function changeImage(index) {
      const thumb = thumbnails[index];
      largeImage.src = thumb.getAttribute('data-large');
      largeImage.alt = thumb.alt;
      updateActiveThumbnail(index);
    }
  
    function createTransitionHandler(index) {
      return function () {
        if (isTransitioning) return;
        isTransitioning = true;
        largeImage.style.opacity = 0;
        setTimeout(() => {
          changeImage(index);
          largeImage.style.opacity = 1;
          isTransitioning = false;
        }, 200);
      };
    }
  
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        createTransitionHandler(index)();
        resetSlideshow();
      });
    });
  
    document.addEventListener('keydown', (e) => {
      if (isTransitioning) return;
      if (e.key === 'ArrowRight') {
        const nextIndex = (currentIndex + 1) % thumbnails.length;
        createTransitionHandler(nextIndex)();
        resetSlideshow();
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        createTransitionHandler(prevIndex)();
        resetSlideshow();
      }
    });
  
    function nextImage() {
      const nextIndex = (currentIndex + 1) % thumbnails.length;
      createTransitionHandler(nextIndex)();
    }
  
    function startSlideshow() {
      slideshowInterval = setInterval(nextImage, 4000);
    }
  
    function resetSlideshow() {
      clearInterval(slideshowInterval);
      startSlideshow();
    }
  
    updateActiveThumbnail(0);
    startSlideshow();
});
  