function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#top").click(function(e) {
   e.preventDefault();
   scrollToAnchor('start');
});

$("#portfolio").click(function(e) {
  e.preventDefault();
   scrollToAnchor('port');
});

$("#summary").click(function(e) {
  e.preventDefault();
   scrollToAnchor('summary');
});

$("#skills").click(function(e) {
  e.preventDefault();
   scrollToAnchor('skill');
});

$("#home").click(function(e) {
  e.preventDefault();
   scrollToAnchor('start');
});

$("#employers").click(function(e) {
  e.preventDefault();
   scrollToAnchor('employ');
});

$("#contact").click(function(e) {
  e.preventDefault();
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
        'delay': 0, 
         
        // selector
        'selector': ".snapper", 
         
        // % of window height from which we start
        'reference': .9, 
         
        // animation time (snap scrolling)
        'animationTime': 800, 
         
        // offset top (no snap before scroll reaches this position)
        'offsetTop': 100,
         
        // offset bottom (no snap after bottom - offsetBottom)
        'offsetBottom': 200 
      });


    });
