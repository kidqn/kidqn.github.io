$(function(){
    var listImg = $('#main-content .content-body img');
    var temp, cloneImg, cloneFigcation;
    for(var i = 0; i < listImg.length; i++) {
        temp = $("<div>", {"class": "item"});
        cloneImg = $(listImg[i]).clone();
        if($(listImg[i]).next()[0] && $(listImg[i]).next()[0].nodeName === 'FIGCAPTION') {
            console.log($(listImg[i]).next()[0].nodeName);
            cloneFigcation = $(listImg[i]).next().clone();
            temp.append(cloneImg).append(cloneFigcation);
        } else {
            temp.append(cloneImg);
        }
        $('#gallery').append(temp);
    }

    var initGallery = function() {
        $('#gallery').owlCarousel({
            slideSpeed : 500,
            items: 1,
            autoHeight:true,
            autoWidth: false,
            margin: 20,
            loop:true,
            nav:true,
            dots: false,
            navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
        });
    }

    $( "#main-content .content-body img" ).click(function() {
        $('#image-viewer-popup').addClass('show');
        initGallery();
    });
    $( "#image-viewer-popup .close-icon" ).click(function() {
        $('#image-viewer-popup').removeClass('show');
    })
})

