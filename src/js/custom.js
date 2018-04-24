// NOTICE!! THIS IS REQUIRED TO MAKE YOUR NETO SHOPPING CART WORK
// DO NOT REMOVE UNLESS YOU REALLY KNOW WHAT YOU ARE DOING

(function($) {
	$.extend({
		initPageFuncs: function() {
			// Ajax Wish List
			$.addToWishList({
				'class': 'wishlist_toggle',
				'textclass': 'wishlist_text',
				'htmlon': '<i class="fa fa-star" aria-hidden="true"></i>',
				'htmloff': '<i class="fa fa-star-o" aria-hidden="true"></i> Wishlist',
				'tooltip_css': 'whltooltips'
			});
			// Ajax Add To Cart
			$.addToCartInit({
				'cart_id' :  'cartcontents',
				'target_id': 'cartcontentsheader',
				'image_rel': 'itmimg'
			});

			$(".disp_ajax_templ").unbind();
			$(".disp_ajax_templ").change(function() {
				var sku = $(this).val();
				var rel = $(this).attr('rel');
				$.load_ajax_template(rel, {'sku':sku, 'showloading':true, 'procdata':'n'}, {onLoad: function (){$.initPageFuncs();}});
			});
			// This renders the instant search results - edit design of ajax results here
			$.initSearchField({
				'result_header'		: '<ul class="nav nav-list">',
				'result_body'		: '<li><a href="##url##" search-keyword="##keyword##"><img border="0" src="##thumb##" width="36" height="36"/><span class="title">##model##</span></a></li>',
				'result_footer'		: '</ul>',
				'category_header'	: '<ul class="nav nav-list">',
				'category_body'		: '<li><a href="##url##"><span class="thumb"><img border="0" src="##thumb##" width="36" height="36"/></span><span class="title">##fullname##</span> <span class="label label-default">##typename##</span></a></li>',
				'category_footer'	: '</ul>'
			});
		},

// For child product multi-add to cart function
		checkValidQty: function() {
			var found = 0;
			$("#multiitemadd :input").each(function() {
				if ($(this).attr('id').match(/^qty/)) {
					if ($(this).val() > 0) {
						found = 1;
					}
				}
			});
			if (found == 0) {
				$.fancybox("Please specify a quantity before adding to cart");
				return false;
			}
			return true;
		},

		modQtyByMulti: function(obj,act) {
			var mul = 1;
			var maxm;
			var minm = 0;
			var objid = obj.replace(/^qty/,'');
			if ($('#qty'+objid).length > 0) {
				if ($('#multiplier_qty'+objid).length > 0) {
					mul = $('#multiplier_qty'+objid).val();
				}
				if ($('#min_qty'+objid).length > 0) {
					minm = $('#min_qty'+objid).val();
				}
				if ($('#max_qty'+objid).length > 0) {
					maxm = $('#max_qty'+objid).val();
				}

				var cur = $('#'+obj).val();
				if (isNaN(cur)) {
					cur = 0;
				}

				if (act == 'add') {
					cur = parseInt(cur) + parseInt(mul);
					if (!isNaN(maxm) && cur > maxm) {
						cur = maxm;
					}
				}
				else if (act == 'subtract') {
					cur = parseInt(cur) - parseInt(mul);
					if (cur < minm) {
						cur = minm;
					}
				}

				$('#qty'+objid).val(cur);
			}
		}
	});
})(jQuery);

var netoCustom = {
	vars : {
		focused : $('body'),
		lastFocused : $('body')
	},
	funcs : {
		// Capture the last item focused
		updateFocused: function(){
			netoCustom.vars.lastFocused = netoCustom.vars.focused;
		},
		// Place focus on popup
		popupFocus: function(){
			var popUp = document.getElementById('npopupDesc');
			// Configures the observer
			var config = {childList: true};
			// Create an observer instance
			var popUpObserver = new MutationObserver(function(mutations) {
				mutations.forEach(function(mutation) {
					// Initial observer
					if(mutation.addedNodes["0"]){
						netoCustom.funcs.updateFocused();
						// focus on the popup
						$(popUp).attr('tabindex', '-1').focus();
					}else{
						$(popUp).attr('tabindex', '').blur();
						// Observer closing popup
						$(netoCustom.vars.lastFocused).focus();
					}
				});
			});
			// Pass in the target node, as well as the observer options
			if(popUp){ popUpObserver.observe(popUp, config);}
		},
		buttonLoading: function(){
			var loadingText = $(this).attr('data-loading-text');
			var originalText = $(this).html();
			$(this).html(loadingText).addClass('disabled').prop('disabled', true);
			var pendingButton = this;
			setTimeout(function(){
				$(pendingButton).html(originalText).removeClass('disabled').removeAttr('disabled');
			}, 3000);
		},
		windowPopup: function(url, width, height) {
			// Calculate the position of the popup so it’s centered on the screen.
			var left = (screen.width / 2) - (width / 2),
				top = (screen.height / 2) - (height / 2);
			window.open(url,"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=" + width + ",height=" + height + ",top=" + top + ",left=" + left);
		}
	}
}

$(document).ready(function() {
	// Neto functionalty
	$.initPageFuncs();
	netoCustom.funcs.popupFocus();
	// Popup Credit Card CCV Description At Checkout
	$("#card_ccv").fancybox();
	// Popup Terms At Checkout
	$("#terms").fancybox({ 'width' : 850,'height': 650});
	// Jquery Ui Date Picker
	$(".datepicker").datepicker({ dateFormat: "dd/mm/yy" });
	// Carousel
	$('.carousel').carousel();
	// Fancybox
	$(".fancybox").fancybox();
});
// Tooltip
$('.tipsy').tooltip({trigger:'hover',placement:'bottom'});
// Capture the current element the user focused in
$(document).on('focusin', function(){
	netoCustom.vars.focused = document.activeElement;
});
// Btn loading state
$(document).on("click", ".btn-loads", netoCustom.funcs.buttonLoading);
// Social media share
$(".js-social-share").on("click", function(e) {
	e.preventDefault();
	netoCustom.funcs.windowPopup($(this).attr("href"), 500, 300);
});
// Mobile menu
$('.nToggleMenu').click(function(){
	var toggleTarget = $(this).attr('data-target')
	$(toggleTarget).slideToggle();
});
