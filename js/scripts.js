
	
$(document).ready(function(){
	$('.foto').slick({
    nextArrow: '<img class="arrow next" src="./images/rightsign.png">',
    prevArrow: '<img class="arrow prev" src="./images/leftsign.png">'
  });
});	
	
$(document).ready(function(){
	$('.fotosoul').slick({
    nextArrow: '<img class="arrow next" src="./images/rightsign.png">',
    prevArrow: '<img class="arrow prev" src="./images/leftsign.png">'
  });
});	

function openbox(id){
    display = document.getElementById(id).style.display;
    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
};

$(document).ready(function(){
  $('.stories').slick({
    nextArrow: '<img class="arrow next" src="./images/rightsign.png">',
    prevArrow: '<img class="arrow prev" src="./images/leftsign.png">',
    centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 420,
      settings: {
        centerMode: true,
       /* centerPadding: '0',*/
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


  $(document).ready(function() {

    /* This is basic - uses default settings */
    
    $("a#single_image").fancybox();
    
    /* Using custom settings */
    
    $("a#inline").fancybox({
      'hideOnContentClick': true
    });

    /* Apply fancybox to multiple items */
    
    $("a.group").fancybox({
      'transitionIn'  : 'elastic',
      'transitionOut' : 'elastic',
      'speedIn'   : 600, 
      'speedOut'    : 200, 
      'overlayShow' : false
    });

  }); 
  
}); 