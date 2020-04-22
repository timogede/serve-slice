$(document).ready(function(){
    $(".header__navigation-toggle").click(function(){
        $("body").toggleClass("header__navigation-toggle--open");
    });
});



// $(document).scroll(function() {
//     var currY = $(this).scrollTop();
//     var postHeight = $(document).height();
//     var scrollHeight = $(window).height();
//
//     // Current percentual position
// 	 var scrollPercent = (currY / (scrollHeight - postHeight)) * -100;
//
//
//     $('.timebar_wrap').css('width', scrollPercent +"%"  );
//
// });
