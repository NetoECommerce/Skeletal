var focused = $('body');
var lastFocused = $('body');
// Capture the current element the user focused in
$(document).on('focusin', function(){ focused = document.activeElement; });
// Capture the last item focused
function updateFocused(){ lastFocused = focused; };
// Place focus on popup
$(document).ready(function(){
	var popUp = document.getElementById('npopupDesc');
	// Configuration of the observer:
	var config = {childList: true};
	// Create an observer instance
	var popUpObserver = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		// Initial observer
		if(mutation.addedNodes["0"]){
			updateFocused();
			// focus on the popup
			$(popUp).attr('tabindex', '-1').focus();
		}else{
			$(popUp).attr('tabindex', '').blur();
			// Observer closing popup
			$(lastFocused).focus();
		}
	  });
	});
	// Pass in the target node, as well as the observer options
	if(popUp){ popUpObserver.observe(popUp, config);}
});
