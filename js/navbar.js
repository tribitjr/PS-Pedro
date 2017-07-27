$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $('#custom-nav').addClass('affix');
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".container").addClass("tamanho-container");
        
    } else {
        $('#custom-nav').removeClass('affix');
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".container").removeClass("tamanho-container");
    }   
});