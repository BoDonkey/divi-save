(function($){
	$(function() {
		$('.shd-button-class--save').css('display', 'none');
		var urlParams = new URLSearchParams(window.location.search);
		if (urlParams.get('et_fb') == 1 ) {
			var startListening = setInterval(function() { iconCheck() }, 600);			
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
	});
}(jQuery));


