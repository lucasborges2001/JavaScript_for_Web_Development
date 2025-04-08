document.addEventListener('DOMContentLoaded', () => {
    const largeImage = document.getElementById('large-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    let isTransitioning = false; 
  
    function createTransitionHandler(callback) {
      return function(event) {
        if (isTransitioning) return; 
        isTransitioning = true;
  
        largeImage.style.opacity = 0; 
        setTimeout(() => {
          callback(event); 
          largeImage.style.opacity = 1;
          isTransitioning = false;
        }, 200);
      };
    }
  
    function changeImage(event) {
      const largeSrc = event.target.getAttribute('data-large');
      largeImage.src = largeSrc;
      largeImage.alt = event.target.alt;
    }
  
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', createTransitionHandler(changeImage));
    });
});