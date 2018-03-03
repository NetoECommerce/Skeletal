// NOTICE!! THIS IS REQUIRED TO MAKE YOUR NETO SHOPPING CART WORK
// DO NOT REMOVE UNLESS YOU REALLY KNOW WHAT YOU ARE DOING
@import './_init.js'
@import './_a11y.js'
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

// Mobile menu
$('.nToggleMenu').click(function(){
	var toggleTarget = $(this).attr('data-target')
	$(toggleTarget).slideToggle();
});
// Btn loading state
$(".btn-loads").click(function(){
	$(this).button("loading");
	var pendingbutton=this;
	setTimeout(function(){
		$(pendingbutton).button("reset");
	},3000);
});
// Who needs AddThis?
function windowPopup(url, width, height) {
	// Calculate the position of the popup so
	// it’s centered on the screen.
	var left = (screen.width / 2) - (width / 2),
		top = (screen.height / 2) - (height / 2);
	window.open(url,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
}
$(".js-social-share").on("click", function(e) {
	e.preventDefault();
	windowPopup($(this).attr("href"), 500, 300);
});
