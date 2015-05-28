(function(){
  'use strict';
  
	$(document).ready(function(){
		$('.menuItems').hide();
		$(".accordionMenu h3").click(function(){
			$(".accordionMenu ul ul").slideUp();
			$(".accordionMenu h3").css({
				"background-color": "#5B5D62",
				"color": "##E5E5E5"
				});
			
			if(!$(this).next().is(":visible"))
			{
				$(this).next().slideDown();
				$(".accordionMenu h3").css({
				"background-color": "#889C3A",
				"color": "#656972"
				});
			}
		})
	})

})();
