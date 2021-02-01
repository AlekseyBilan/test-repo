console.log(123456);
$(document).ready(function() {
    var autoplaySlider = $('#imageGallery').lightSlider({
        auto:true,
        loop:true,
        item:1,
        pauseOnHover: true
    });
    // $('#total').text(autoplaySlider.getTotalSlideCount());
});