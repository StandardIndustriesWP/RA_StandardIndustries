(function ($) {
"use strict";

    //Sortable Masonary with Filters
    function enableMasonry() {
		
		
		
	

	/**
   * Hide duplicate entries
   */
	var textAll = '';

	jQuery(".filter-tabs li.filter").each(function(){

	   var n = textAll.indexOf(jQuery(this).text());
		
		if(n != -1){
			jQuery(this).remove();
		}else{
			textAll += jQuery(this).text() + ' ';
		}
	});



	/*
		Reorder Tab Items
	*/
	function sortList() {
		var list, i, switching, b, shouldSwitch;
		list = document.querySelector(".filter-tabs");
		switching = true;
		/* Make a loop that will continue until
		no switching has been done: */
		while (switching) {
		  // Start by saying: no switching is done:
		  switching = false;
		  b = list.querySelectorAll('.order_by_letter');
		  // Loop through all list items:
		  for (i = 0; i < (b.length - 1); i++) {
			// Start by saying there should be no switching:
			shouldSwitch = false;
			/* Check if the next item should
			switch place with the current item: */
			if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
			  /* If next item is alphabetically lower than current item,
			  mark as a switch and break the loop: */
			  shouldSwitch = true;
			  break;
			}
		  }
		  if (shouldSwitch) {
			/* If a switch has been marked, make the switch
			and mark the switch as done: */
			b[i].parentNode.insertBefore(b[i + 1], b[i]);
			switching = true;
		  }
		}
	}

	// Call the function to execute
	sortList();

	jQuery('ul.filter-tabs.filter-btns').css("opacity", "1");
		
		
	// Call isotope filter
	if($('.masonry-gallery .outer-container').length){


		var winDow = $(window);
		// Needed variables
		var $container=$('.masonry-gallery .outer-container');
		var $filter=$('.filter-btns');


		var selector = $filter.find("li.active").attr("data-filter");

		if(selector == '.all'){
			$container.isotope({
			  filter: '.group_no',
			  animationOptions: {
				duration: 500,
				easing: "linear",
				queue: false,
			  },
			});
		}else{
			$container.isotope({
			  filter: selector,
			  animationOptions: {
				duration: 500,
				easing: "linear",
				queue: false,
			  },
			});
		}
		
		
		winDow.resize(function(){
			var selector = $filter.find('li.active').attr('data-filter');

			if(selector == '.all'){
			  $container.isotope({
				filter: '.group_no',
				animationOptions: {
				  duration: 500,
				  easing: "linear",
				  queue: false,
				},
			  });
			}else{
			  $container.isotope({
				filter: selector,
				animationOptions: {
				  duration: 500,
				  easing: "linear",
				  queue: false,
				},
			  });
			}
		});
		winDow.load(function(){
			var selector = $filter.find('li.active').attr('data-filter');

			if(selector == '.all'){
			  $container.isotope({
				filter: '.group_no',
				animationOptions: {
				  duration: 500,
				  easing: "linear",
				  queue: false,
				},
			  });
			}else{
			  $container.isotope({
				filter: selector,
				animationOptions: {
				  duration: 500,
				  easing: "linear",
				  queue: false,
				},
			  });
			}
		});
		

		// Isotope Filter
		$filter.find('li:not(.view_all)').on('click', function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({
					filter  : selector,
					animationOptions: {
						duration: 500,
						easing  : 'linear',
						queue   : false
					}
				});
			} catch(err) {

			}
			return false;
		});

		$filter.find('li.view_all').on('click', function(){
		  // var selector = $(this).attr('data-filter');

		  try {
			  $container.isotope({
				  filter  : '.group_no',
				  animationOptions: {
					  duration: 500,
					  easing  : 'linear',
					  queue   : false
				  }
			  });
		  } catch(err) {

		  }
		  return false;
	  });





		// li active tab
		var filterItemA = $('.filter-btns li');

		filterItemA.on('click', function(){

			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});
		
		
	}
}
	
	// Enable Masonary
    enableMasonry();
	
	


})(jQuery);
