$(function(){
    $('.slide p:gt(0)').hide();
    setInterval(function(){$('.slide > :first-child').fadeOut(1000).next('p').fadeIn(1000).end().appendTo('.slide');}, 8000);
});