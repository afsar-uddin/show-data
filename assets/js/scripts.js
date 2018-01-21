
(function(){
     "use strict";
	jQuery(document).ready(function(){
		   $(function () {
		       var TotalElement = $(".au-col-4").length;
		       var currentElement = 5;
		       $(".au-col-4").slice(0, 5).show();

		       $("#au-more").on('click', function (e) {
		           e.preventDefault();
		           $(".au-col-4:hidden").slice(0, 4).fadeIn('600');
		           currentElement=currentElement+4;
		           if (TotalElement <= currentElement) {
		               $("#au-more").css({"display":"none"});
		           }
		       });
		   });
		
	});
})();