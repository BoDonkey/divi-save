(function($){
	var urlParams = getQueryVariable( 'et_fb' );
	if (urlParams == 1 ) {
		var startListening = setInterval(function() { iconCheck() }, 600);			
	};

	function getQueryVariable( variable ) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i=0;i<vars.length;i++) {
			var pair = vars[i].split("=");
			if(pair[0] == variable){return pair[1];}
		}
		return(false);
	};

	function iconCheck() {
		if ($('.et-fb-icon--move')[0]){
			stopListening();
			catchClicks();
		}
	};

	function stopListening() {
		clearInterval(startListening);
	};

	function catchClicks() {
		$('.shd-button-class--save').css('display', 'list-item');
		if ($('.et-fb-button--save-draft')[0]){
			$(".shd-button-class--save").click(function(){
				$('.et-fb-button--save-draft').trigger('click');
			});
		};
		if (($('.et-fb-button--publish')[0])) {
			$(".shd-button-class--save").click(function(){
				$('.et-fb-button--publish').trigger('click');
			});
		}; 
		if ($('#wp-admin-bar-et-disable-visual-builder')[0]) {
			$('#wp-admin-bar-et-disable-visual-builder').click(function(){
				$('.shd-button-class--save').css('display', 'none');
			});
		};
	};
}(jQuery));