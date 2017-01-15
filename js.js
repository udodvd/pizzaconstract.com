$(document).ready(function() {
    
//  
// $('.wrapper>article').not(':first-of-type').hide();
// 
//  
//  $('.wrapper>h1').click(function() {
//    
//    var findArticle = $(this).next();
//    var findWrapper = $(this).closest('.wrapper');
//      console.log('findWrapper',findWrapper);
//      console.log('findArticle',findArticle);
//    
//    if (findArticle.is(':visible')) {
//      findArticle.slideUp('fast');
//       
//    }
////    else {
////      findWrapper.find('>article').slideUp('fast');
////      findArticle.slideDown('fast');
////       
////    }
//  });
 
  $('.menuLeft1, .menuLeft2').on('click','img',function(){
      var menuRight = $('.menuRight');
      
      $(this).fadeOut(200,function(){
          $(this).appendTo(menuRight).fadeIn(200);
      })
  });
    $('.menuRight').on('click','img',function(){
      var menuLeft1 = $('.menuLeft1');
      var menuLeft2 = $('.menuLeft2');
        var sortImg = +$(this).attr('data-pos');
         var pos = +$(this).attr('data-position');
        console.log(pos);
        if(sortImg == 1){
            $(this).fadeOut(600,function(){
          menuLeft1.children('li').eq(pos).append($(this).fadeIn(500));
      });
        }else if(sortImg == 2){
                   $(this).fadeOut(600,function(){
          menuLeft2.children('li').eq(pos).append($(this).fadeIn(500));
      }); 
        }
      
  })
  // tabs
  $(".tab_item").not(":first").hide();
$(".wrapper .tab").click(function() {
    var tabPos = $(this).index();
    console.log(tabPos);
    var tabson = $(this).attr('rel');
    console.log('tabson', tabson);
    $(".tab_item").not(tabson).css({'display':'none'});
    $(tabson).fadeIn(200);
    $(".wrapper .tab").removeClass('active');
    $(this).addClass('active');
//    if(tabPos == 0){
//      	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
//	$(".tab_item").hide().eq($(this).index()).fadeIn()  
//    }else if(tabPos == 1){
//        $(".wrapper .tab").removeClass("active2").eq($(this).index()).addClass("active2");
//	$(".tab_item").hide().eq($(this).index()).fadeIn()
//    }

}).eq(0).addClass("active");
    // tabs end


    
});