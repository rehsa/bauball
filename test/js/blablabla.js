//sticky navbar
$(document).scroll(function(e){
    var origOffsetY = $('#menue').offset().top;
    var scrollTop = $(window).scrollTop();
    if(scrollTop > origOffsetY){
        console.log(scrollTop);
        $('.navigation').removeClass('navbar-static-top').addClass('navbar-fixed-top');
        $('#container').addClass('menu-padding');
    } else {
        $('.navigation').removeClass('navbar-fixed-top').addClass('navbar-static-top');
        $('#container').removeClass('menu-padding');
    }
});

jQuery(document).ready(function($){ 
    
    // SMOOTH SCROLLING
    $(".navbar a, footer a[href='#myPage'], div.down a[href='#ersterteil']").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
                scrollTop: $(hash).offset().top
        }, 900, function(){
                window.location.hash = hash;
        });
    });
    
    // IMG SLIDE IN
    $(window).scroll(function() {
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
                if (pos < winTop + 600) {
                    $(this).addClass("slide");
                }
        });
    });
    
    // COUNTDOWN    
    $('#countdown').countdown('2016/06/09 20:00:00', function(event) {
        $(this).html(event.strftime('%-D TAG%!D:E; &bull; %H:%M:%S'));
    });
            
    // ONCLICK IMG FULLSCREEN
    $('#fullscreen').css('height', $(document).outerWidth() + 'px');
    $('.myImg').click(function(){
        var src = $(this).attr('src');
        $('#fullscreen img').attr('src', src);
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function(){
        $(this).fadeOut();
    });
})