function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#top").click(function() {
   scrollToAnchor('start');
});

$("#portfolio").click(function() {
   scrollToAnchor('port');
});

$("#summary").click(function() {
   scrollToAnchor('summary');
});

$("#skills").click(function() {
   scrollToAnchor('skill');
});

$("#home").click(function() {
   scrollToAnchor('start');
});

$("#employers").click(function() {
   scrollToAnchor('employ');
});

$("#contact").click(function() {
   scrollToAnchor('cont');
});



    $(document).ready(function() {

      /*
       *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
       */

      $('.fancybox-thumbs').fancybox({
        prevEffect : 'none',
        nextEffect : 'none',

        closeBtn  : false,
        arrows    : false,
        nextClick : true,

        helpers : {
          thumbs : {
            width  : 100,
            height : 100
          }
        }
      });


      $(".demo").sectionsnap({
        // time dilay (ms)
        'delay': 50, 
         
        // selector
        'selector': ".snapper", 
         
        // % of window height from which we start
        'reference': .9, 
         
        // animation time (snap scrolling)
        'animationTime': 400, 
         
        // offset top (no snap before scroll reaches this position)
        'offsetTop': 100,
         
        // offset bottom (no snap after bottom - offsetBottom)
        'offsetBottom': 200 
      });


    });
