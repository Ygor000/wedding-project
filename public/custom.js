$(function(){
    $('.menu-btn').click(function(){       // para ativar o menu ao clique
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
})