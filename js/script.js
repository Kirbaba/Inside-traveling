
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
});

jQuery(function($) {   
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

ymaps.ready(init);
        
function init() {
    var myMap = new ymaps.Map('map', {
            center: [55.795962, 38.450751],
            zoom: 16,
            controls: [],
            
        })  ,
        myPlacemark = new ymaps.Placemark([55.795862, 38.444955], {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: img.url + 'marker.png',
            // Размеры метки.
            iconImageSize: [38, 56],
            iconImageOffset: [-17, -55]

            
        });
    

    
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
}

function popupOpenClose(popup) {
    
    /* Add div inside popup for layout if one doesn't exist */
    // if ($(".popup-wrapper").length == 0){
    //     $(popup).wrapInner("<div class='popup-wrapper'></div>");
    // }
    
    /* Open popup */
    $(popup).show();

    /* Close popup if user clicks on background */
    $(popup).click(function(e) {
        if ( e.target == this ) {
            if ($(popup).is(':visible')) {
                $(popup).hide();
            }
        }
    });

    /* Close popup and remove errors if user clicks on cancel or close buttons */
    $(popup).find("button[name=close]").on("click", function() {
        if ($(".formElementError").is(':visible')) {
            $(".formElementError").remove();
        }
        $(popup).hide();
    });
}

$(document).ready(function () {
    $("[data-js=open]").on("click", function() {
        popupOpenClose($(".popup"));
    });
});

jQuery(function($){
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3C;Пред',
        nextText: 'След&#x3E;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
       'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
        'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        weekHeader: 'Нед',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
    $.datepicker.setDefaults($.datepicker.regional['ru']);
});

$(function() { 
    $( "#datepicker" ).datepicker(); 
  
}); 
