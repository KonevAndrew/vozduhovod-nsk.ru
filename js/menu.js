$(document).ready(function () {
	
$('.menu li').each(function () {
    if (this.getElementsByTagName("a")[0].href == location.href) $(this).addClass('active');
});

	
$(".menu li").mouseover(function(){
	
	if (!$(this).hasClass('active')) {
	 
	$(".menu li").removeClass('active');
	}
});

$(".menu li").mouseout(function(){ 
	$('.menu li').each(function () {
    if (this.getElementsByTagName("a")[0].href == location.href) $(this).addClass('active');
});

$('#category li').each(function () {
    if (this.getElementsByTagName("a")[0].href == location.href) $(this).addClass('active');
});
});

/* ��������� ���� */
$(".menu li a.manuf").mouseover(function(){ 
$(".menu li a.manuf").animate({'fontSize':'30px', 'margin':'-4px -38px 0 -39px'}, 1);
});
$(".menu li a.info").mouseover(function(){ 
$(".menu li a.info").animate({'fontSize':'30px', 'margin':'-4px -32px 0 -39px'}, 1);
});
$(".menu li a.jobs").mouseover(function(){ 
$(".menu li a.jobs").animate({'fontSize':'30px', 'margin':'-4px -21px 0 -30px'}, 1);
});
$(".menu li a.contact").mouseover(function(){ 
$(".menu li a.contact").animate({'fontSize':'30px', 'margin':'-4px -38px 0 -39px'}, 1);
});

/*���� ������*/
$(".menu li a.manuf").mouseout(function(){ 
$(".menu li a.manuf").animate({'fontSize':'18', 'margin':'0'}, 1);
});
$(".menu li a.info").mouseout(function(){ 
$(".menu li a.info").animate({'fontSize':'18', 'margin':'0'}, 1);
});
$(".menu li a.jobs").mouseout(function(){ 
$(".menu li a.jobs").animate({'fontSize':'18', 'margin':'0'}, 1);
});
$(".menu li a.contact").mouseout(function(){ 
$(".menu li a.contact").animate({'fontSize':'18', 'margin':'0'}, 1);
});

$(function(){
	$('.pm-item-first').hover(function(){
			$(this).animate({width: "345px", left:"-65px"}, 200);
			$('.pm-item-first a img').animate({width: "345px", height:"243px"}, 200);
			$('.pm-item-first a span').animate({'fontSize':'30px'}, 200);
		},
		function(){
			$(this).animate({width: "230px", left:"0"}, 200);
			$('.pm-item-first a img').animate({width: "230px", height:"162px"}, 200);
			$('.pm-item-first a span').animate({'fontSize':'20px'}, 200);
		});
});

$(function(){
	$('.pm-item-second').hover(function(){
			$(this).animate({width: "296px", left:"225px"}, 200);
			$('.pm-item-second a img').animate({width: "296px", height:"207px"}, 200);
			$('.pm-item-second a span').animate({'fontSize':'30px'}, 200);
		},
		function(){
			$(this).animate({width: "197px", left:"280px"}, 200);
			$('.pm-item-second a img').animate({width: "197px", height:"138px"}, 200);
			$('.pm-item-second a span').animate({'fontSize':'20px'}, 200);
		});
});

$(function(){
	$('.pm-item-third').hover(function(){
			$(this).animate({width: "293px", left:"455px"}, 200);
			$('.pm-item-third a img').animate({width: "293px", height:"228px"}, 200);
			$('.pm-item-third a span').animate({'fontSize':'30px'}, 200);
		},
		function(){
			$(this).animate({width: "195px", left:"515px"}, 200);
			$('.pm-item-third a img').animate({width: "195px", height:"152px"}, 200);
			$('.pm-item-third a span').animate({'fontSize':'20px'}, 200);
		});
});


$(function(){
	$('.pm-item-forth').hover(function(){
			$(this).animate({width: "330px", right:"-65px"}, 200);
			$('.pm-item-forth a img').animate({width: "330px", height:"251px"}, 200);
			$('.pm-item-forth a span').animate({'fontSize':'30px'}, 200);
		},
		function(){
			$(this).animate({width: "220px", right:"0"}, 200);
			$('.pm-item-forth a img').animate({width: "220px", height:"167px"}, 200);
			$('.pm-item-forth a span').animate({'fontSize':'20px'}, 200);
		});
});  
});