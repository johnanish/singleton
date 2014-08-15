var lb_Obj = {

	bodyHeight: function(){
		var viewportheight = 0,
			modalheight = 0;
		if (typeof window.innerWidth != 'undefined') {
			viewportheight = window.innerHeight;
		} else {
			viewportheight = document.documentElement.clientHeight;
		}
		if ((viewportheight > document.body.parentNode.scrollHeight) && (viewportheight > document.body.parentNode.clientHeight)) {
			modalheight = viewportheight;
		} else {
			if (document.body.parentNode.clientHeight > document.body.parentNode.scrollHeight) {
	 			modalheight = document.body.parentNode.clientHeight;
			} else {
	 			modalheight = document.body.parentNode.scrollHeight;
			}
		}
		$('.black_overlay').css('height',modalheight);
	},

	showLightBox: function(){
		$('#trig').click(function(){
			lb_Obj.bodyHeight();
			$('.white_content, .black_overlay').show();
		});
	},

	hideLightBox: function(){
		$('#closeLightBox').click(function(){
			$('.white_content, .black_overlay').hide();
		});
		$('.black_overlay').click(function(){
			$('.white_content, .black_overlay').hide();
		});
	},



	init: function(){
		this.showLightBox();
		this.hideLightBox();		
	}
};

$(document).ready(function(){
	lb_Obj.init();
});