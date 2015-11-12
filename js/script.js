
/*-------------GOOGLE MAPS-----------------*/

/*function initialize() {

    var myLatlng = new google.maps.LatLng(59.934602, 30.334607);
    var mapOptions = {
        center: new google.maps.LatLng(59.934602, 30.334607),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Ditlogistic"
    });
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAaOWKyamSxMTXclSDFmJ2N4Am20PCTD6I&sensor=FALSE&callback=initialize";
    document.body.appendChild(script);
}

window.onload = loadScript;
*/


jQuery(function($) {

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 1000);
    });

    // $('.slick-codepen').delay(1000).slick({ 
    //     asNavFor: '.slider-nav', 
    //     draggable: true, 
    //     centerMode: true,        
    //     arrows: true, 
    //     dots: false, 
    //     swipeToSlide: true, 
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // }); 
    // $('.slider-nav').slick({ 
    //     slidesToShow: 7, 
    //     slidesToScroll: 1, 
    //     asNavFor: '.slick-codepen', 
    //     dots: false, 
    //     arrows: true, 
    //     centerMode: true, 
    //     focusOnSelect: true
    // });
 
});

jQuery(function($) {
    // $('.slick-codepen').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     speed: 500,
    //     arrows: true,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     speed: 500,
    //     asNavFor: '.slick-codepen',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });

$('.slider-item-slider').on('init', function(event, slick, currentSlide){
  var nrCurrentSlide = slick.currentSlide + 1, // din cauza ca e array si incepe de la 0
      totalSlidesPerPage = nrCurrentSlide + 3; // daca ai 5 thumb-uri pe pagina pui + 4
  $('.controls').html(nrCurrentSlide + " - " + totalSlidesPerPage + " of " + slick.slideCount);
});

$('.slider-thumb-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-item-slider',
  dots: false,
  arrows: true,
  focusOnSelect: false,
  infinite: true
});

$('.slider-item-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  asNavFor: '.slider-thumb-slider',
  infinite: true
});


});
