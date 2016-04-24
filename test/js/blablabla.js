$(document).ready(function(e){     
    setNavbar();
    // SMOOTH SCROLLING (PFEILE)
    $("footer a[href='#myPage'], div.down a[href='#content']").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
                scrollTop: $(hash).offset().top
        }, 900, function(){
                window.location.hash = hash;
        });
    });
    
    setNavbar();
    // SMOOTH SCROLLING (NAVBAR)
    $(".navbar a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
                scrollTop: $(hash).offset().top -50
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
        setNavbar();
    });
    
    // COUNTDOWN    
    $('#countdown').countdown('2016/06/09 20:00:00', function(event) {
        $(this).html(event.strftime('%-D TAG%!D:E; &bull; %H:%M:%S'));
    });
            
    // ONCLICK IMG FULLSCREEN
    $('#fullscreen').css('height', $(document).outerWidth() + 'px');
    $('.myImg').click(function(){
        var src = $(this).attr('src');
        var windowheight = $(window).height();
        $('#fullscreen img').height(windowheight);
        $('#fullscreen img').attr('src', src);
        $('#fullscreen').fadeIn();
    });
    $('#fullscreen').click(function(){
        $(this).fadeOut();
    });
});


//sticky navbar
function setNavbar(){

    var distance = $(window).height();
    $window = $(window);
    var scrollTop = $(window).scrollTop();

    if (scrollTop >= distance) {
        $('#menue').removeClass('navbar-static-top').addClass('navbar-fixed-top');
        $("#content").css("padding-top", "50px");
    } else {
        $('#menue').removeClass('navbar-fixed-top').addClass('navbar-static-top');
        $("#content").css("padding-top", "0px");
    }
};