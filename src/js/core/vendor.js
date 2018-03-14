
$(document).ready(function() {
	// Popup Credit Card CCV Description At Checkout
	$("#card_ccv").fancybox();
	// Popup Terms At Checkout
	$("#terms").fancybox({ 'width' : 850,'height': 650});
	// Jquery Ui Date Picker
	$(".datepicker").datepicker({ dateFormat: "dd/mm/yy" });
	// Carousel
	$('.carousel').carousel();
	// Fancbox
	$(".fancybox").fancybox();
	// Tooltip
	$('.tipsy').tooltip({trigger:'hover',placement:'bottom'});
});
