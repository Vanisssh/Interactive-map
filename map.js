$(function() {
    $('[data-code]').mouseenter(function() {    
        $('.district span').html($(this).attr('data-title'));
        $('.district').show();
    });    
    $('[data-code]').mouseleave(function() {
        if (!$('.rf-map').hasClass("open")) {
            $('.district').hide();
        }
    });    
    $('.rf-map').on('click', '[data-code], .district-links div', function(){    
        let id = $(this).attr('data-code');
        if ($('#' + id).text() != '') {
            $('.district').show();
            $('.district span').html($(this).attr('data-title'));
            $('[data-code]').addClass('dropfill'); 
            $(this).addClass('mainfill'); 
            $('.rf-map').addClass('open');
            $('#' + id).fadeIn();
        }
    });
    $('.close-district').click(function() {
        $('.rf-map').removeClass('open');
        $('[data-code]').removeClass('dropfill');
        $('[data-code]').removeClass('mainfill');
        $('.district-text').hide();
        $('.district').hide();
    });    
    $('[data-code]').each(function() {  
        let id = $(this).attr('data-code');
        let title = $(this).attr('data-title');    
        if ($('#' + id).text() != '') {    
            $('.district-links').append('<div data-title="' + title + '" data-code="' + id + '">' + title + '</div>');    
        }
    }); 
});    
function setupLeafletMap() {
    //Bounding map.  
    var bounds = new L.LatLngBounds(new L.LatLng(84.67351257 , -172.96875) , new L.LatLng(-54.36775852 , 178.59375)) ;
    var map = L.map('map_leaflet' , {
      maxBounds: bounds , 
      maxBoundsViscosity: 0.75
    })};

    