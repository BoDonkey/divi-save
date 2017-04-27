jQuery(window).load(function(){
	jQuery('.shd-button-class--save').css('display', 'none');
	var urlParams = new URLSearchParams(window.location.search);
	if (urlParams.get('et_fb') == 1 ) {
		var startListening = setInterval(function() { iconCheck() }, 600);			
	};
	function iconCheck() {
		if (jQuery('.et-fb-icon--move')[0]){
			stopListening();
			catchClicks();
		}
	};

	function stopListening() {
		clearInterval(startListening);
	};

	function catchClicks() {
		jQuery('.shd-button-class--save').css('display', 'list-item');
		console.log("in function");
		if (jQuery('.et-fb-button--save-draft')[0]){
			console.log('save-draft present');
			jQuery(".shd-button-class--save").click(function(){
				jQuery('.et-fb-button--save-draft').trigger('click');
				console.log('save-draft clicked');
			});
		};
		if ((jQuery('.et-fb-button--publish')[0])) {
			console.log('publish present');
			jQuery(".shd-button-class--save").click(function(){
				jQuery('.et-fb-button--publish').trigger('click');
				console.log('save-publish clicked');
			});
		}; 
		if (jQuery('#wp-admin-bar-et-disable-visual-builder')[0]) {
			console.log('disable present');
			jQuery('#wp-admin-bar-et-disable-visual-builder').click(function(){
				console.log('exiting');
				jQuery('.shd-button-class--save').css('display', 'none');
			});
		};
	};
});


