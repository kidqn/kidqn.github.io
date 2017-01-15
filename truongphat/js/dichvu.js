$(function(){
  $("#event-carousel").owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText: ["",""],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1200:{
            items:3
        }
    }
  })
    $('#event-carousel .owl-item:not(.cloned)').on('click', function (event) {
      event.stopPropagation();
      var itemClone = $(this).find('figure').clone();
      $('#zoom-img-dlg .modal-body')[0].innerHTML = null;
      itemClone.appendTo($('#zoom-img-dlg .modal-body'));
      $('#zoom-img-dlg').modal('show');
    });
})