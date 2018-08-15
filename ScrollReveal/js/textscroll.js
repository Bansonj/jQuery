$(document).ready(function(){

    window.sr = ScrollReveal();

    sr.reveal('.navbar',{
        duration:2000,
        origin:'bottom'
    });
    sr.reveal('.home-left',{
        duration:2000,
        origin:'top',
        distance:'300px'
    });
    sr.reveal('.home-right',{
        duration:2000,
        origin:'right',
        distance:'300px'
    });
    sr.reveal('.home-btn',{
        duration:2000,
        delay:2000,
        origin:'bottom'
    });
    sr.reveal('#inspirations div',{
        duration:2000,
        delay:2000,
        origin:'bottom'
    });
    sr.reveal('.about-left',{
        duration:2000,
        delay:2000,
        origin:'left',
        distance:'300px',
        viewFactor: 0.2
    }); 

    sr.reveal('.about-right',{
        duration:2000,
        delay:2000,
        origin:'right',
        distance:'300px',
        viewFactor: 0.2
    });
    

    
  //Smooth Scroll
  
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  });

});