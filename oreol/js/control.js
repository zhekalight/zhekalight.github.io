$(function() {
    "use strict";
    
    $('.title__box').click(function() {
        $(this).toggleClass('open');
        $(this).next('div.list__link').toggleClass('open');
    });
    
    $('#slider__price').slider({
        max:1000,
        min:0,
        range: true,
        values: [190,728],
        slide: function( event, ui ) {
            $('input[name="minPrice"]').val( '$'+ ui.values[0]);
            $('input[name="maxPrice"]').val( '$'+ ui.values[1]);
        }
    });
    
    $('input[name="minPrice"]').val('$'+
    $('#slider__price').slider('values',0) );
    $('input[name="maxPrice"]').val('$'+
    $('#slider__price').slider('values',1) );
    
    /*cart box*/
    
    $('#cart, .title__cart').click(function(){
        $('#cart__box').toggleClass('open');
    });
    
     $('#sign').click(function(){
        $('.black__fill').toggleClass('open');
        $('.modal').toggleClass('open');
    });
    $('.close__mod, .black_fill').click(function(){
        $('.black__fill').toggleClass('open');
        $('.modal').toggleClass('open');
    });
    
    $('#search__button').click(function(){
        $('#search__panel').toggleClass('open')
    });
    $('#load__more').click(function(event){
        event.preventDefault();
        $('.list_product').append('<a class="product box">                  <div class="img_product"><img src="img/02.jpg" alt=""></div>         <h2>Our Legacy Splash Jacquard Knit</h2><p>Black Grey Plants</p><p class="price">290$</p></a><a class="product box">                  <div class="img_product"><img src="img/02.jpg" alt=""></div>         <h2>Our Legacy Splash Jacquard Knit</h2><p>Black Grey Plants</p><p class="price">290$</p></a><a class="product box">                  <div class="img_product"><img src="img/02.jpg" alt=""></div>         <h2>Our Legacy Splash Jacquard Knit</h2><p>Black Grey Plants</p><p class="price">290$</p></a>')
    })
});