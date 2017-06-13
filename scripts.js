
	
$(document).ready(function(){
	$('.foto').slick({
    dots: true,
    nextArrow: '<img class="arrow next" src="./images/rightsign.png">',
    prevArrow: '<img class="arrow prev" src="./images/rightsign.png">',});
});	
	
$(document).ready(function(){
	$('.fotosoul').slick({});
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
    responsive: [
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
});	