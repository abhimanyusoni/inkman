$('[data-aos]').each(function(){ $(this).addClass("aos-init"); });

AOS.init(

    );

    
    new fullpage('#fullpage', {
        autoScrolling : true,
        scrollHorizontally: true
    })

    $('#fullpage').fullpage({
        slidesNavigation: true,
        controlArrows: false,
        onLeave: function(){
            $('#section [data-aos]').each(function(){
                $(this).removeClass("aos-animate")
            });
        },
        
        afterLoad: function(){
            $('#section.active [data-aos]').each(function(){
                $(this).addClass("aos-animate")
            });
        }});
    
