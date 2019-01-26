$(function(){
    $('#top-article-images-carousel').owlCarousel({
        slideSpeed : 500,
        items: 1,
        nav:false,
        dots: false
    })

    $("#top-article-carousel").owlCarousel({
    slideSpeed : 500,
    paginationSpeed : 500,
    loop:false,
    items: 1,
    nav:true,
    navText: ["",""],
    })
    var owlPopupTopNews = $("#top-article-carousel");
    owlPopupTopNews.on('changed.owl.carousel', function(event) {
        //current will now return current slide #
        var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var allItems = event.item.count;
        if (current > allItems || current == 0) {
        current = allItems - (current % allItems);
        }
        $('#top-article-images-carousel').trigger('to.owl.carousel', current-1)
    });
})