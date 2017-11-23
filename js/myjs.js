    
        new WOW().init();    
            
        $(window).scroll(function(e) {
        var height = $(this).scrollTop();
        $('#nav')[height >= 180 ? 'addClass' : 'removeClass']('q') 
        });

            /*.slideToggle() */
            
            
        $(document).ready(function(){
        $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
        });
        });
            