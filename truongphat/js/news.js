$(function(){
$('#image-top-news-carousel').owlCarousel({
    slideSpeed : 500,
    items: 1,
    nav:false,
    touchDrag  : false,
    mouseDrag  : false
})
  $("#top-news-carousel").owlCarousel({
    slideSpeed : 500,
    paginationSpeed : 500,
    loop:false,
    items: 1,
    nav:true,
    navText: ["",""],
  })
    var owlPopupTopNews = $("#top-news-carousel");
    owlPopupTopNews.on('changed.owl.carousel', function(event) {
      //current will now return current slide #
      var current = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
      var allItems = event.item.count;
      if (current > allItems || current == 0) {
        current = allItems - (current % allItems);
      }
      $('#image-top-news-carousel').trigger('to.owl.carousel', current-1)
    });
})