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


    });