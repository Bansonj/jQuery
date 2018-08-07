$(document).ready(function(){

    $('.scroll').click(function(e){

        e.preventDefault();

        $('body,html').animate({

            scrollTop: $(this.hash).offset().top},2000)

    });

    //ScrollReveal
/*     const sr = ScrollReveal();

    sr.reveal('.section, .aside', {
        duration:2000,
        origin:'down',
        distance:'30px',
        scale:0.5
    })

    sr.reveal('#about', {
        origin:'top',
        distance:'30px',
        duration: 2000,
        delay:500
    });

    sr.reveal('#gallery,.textblurr',{
        origin:'left',
        distance:'30px',
        duration: 2000,
        delay:1000   
    },500); */

    const sr = ScrollReveal({
        duration:1000,
        reset:true
    });

    sr.reveal('.section, .aside',{});

    sr.reveal('#about',{
        delay:500
    });
    sr.reveal('#gallery, .textblurr',{
        delay:1000
    })
   
});