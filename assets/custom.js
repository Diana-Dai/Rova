window.onload = function () {

    $('.collection-list--section .collection-list__content').flickity({
      cellAlign: 'left',
      groupCells: true
    });

    // shop the look
    var shop_the_look_flkty = $('.shoppable_images_carousel').flickity({
      cellAlign: 'left',
      groupCells: true
    });

    $(document).on('click','.shoppable_images_carousel_navigation .navigation',function () {  
        $('.shoppable_images_carousel_navigation .is-selected').removeClass('is-selected');
        $(this).addClass('is-selected');
        var index = $(this).index();
        shop_the_look_flkty.flickity( 'select', index );
    })

    shop_the_look_flkty.on( 'change.flickity', function( event, index ) {
      console.log( 'Slide changed to ' + index )
      $('.shoppable_images_carousel_navigation .is-selected').removeClass('is-selected');
      $('.shoppable_images_carousel_navigation [data-index='+index +']').addClass('is-selected')
    });
  }