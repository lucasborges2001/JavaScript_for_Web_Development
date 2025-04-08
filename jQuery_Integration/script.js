$(document).ready(function () {
    let $largeImage = $('#large-image');
    let $thumbnails = $('.thumbnails img');
    let currentIndex = 0;
    let interval;
  
    function updateActive(index) {
        $thumbnails.removeClass('active');
        $thumbnails.eq(index).addClass('active');
        currentIndex = index;
    }
  
    function changeImage(index) {
        const newSrc = $thumbnails.eq(index).data('large');
        const newAlt = $thumbnails.eq(index).attr('alt');
    
        $largeImage.fadeOut(200, function () {
            $largeImage.attr('src', newSrc).attr('alt', newAlt).fadeIn(200);
        });
    
        updateActive(index);
    }
  
    $thumbnails.each(function (index) {
        $(this).on('click', function () {
            changeImage(index);
            resetSlideshow();
        });
    });
  
    function nextImage() {
        let next = (currentIndex + 1) % $thumbnails.length;
        changeImage(next);
    }
  
    function startSlideshow() {
        interval = setInterval(nextImage, 5000);
    }
  
    function resetSlideshow() {
        clearInterval(interval);
        startSlideshow();
    }
  
    updateActive(0);
    startSlideshow();
});
  