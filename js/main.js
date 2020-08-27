$(document).ready(function(){

    const menuItem = document.querySelectorAll('.menu__item');
    console.log(menuItem);
    $('#header__burger').on('click', function(){
        $('#header__menu').toggleClass('menu__active');
        $(this).toggleClass('header__burger-close');
    
        if($(this).hasClass('header__burger-close')){
            $(menuItem).each(function(index, link){
                $(link).css('animation', `menu__animate .5s ease-out ${index / 7 + 0.1}s forwards` )
            })
        }else{
            $(menuItem).each(function(index, link){
                $(link).css('animation', `` )
            })
        }
    })
})

$('.home__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
  });

  $("body").on('click', '[href*="#"]', function(e){
    // var fixed_offset = 87;
    if(screen.width <=750){
        var fixed_offset = 59;
    }else{
        var fixed_offset = 87;
    }
    console.log(screen.width);
    $('html,body').stop().animate({ 
        scrollTop: $(this.hash).offset().top - fixed_offset 
    }, 1000);
    $('#header__menu').toggleClass('menu__active');
    $('#header__burger').toggleClass('header__burger-close');
    e.preventDefault();
  });