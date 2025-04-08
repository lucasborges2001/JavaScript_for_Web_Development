document.addEventListener('DOMContentLoaded', () => {
    const largeImage = document.getElementById('large-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');
  
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].addEventListener('click', function() {
        const largeSrc = this.getAttribute('data-large');
        largeImage.src = largeSrc;
        largeImage.alt = this.alt;
      });
    }
  });