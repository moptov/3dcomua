/* global menuItem */
/* global subMenuItem */

$(document).ready(function() {
	$('div.rt-menubar li.'+menuItem).addClass('active');
	if (typeof subMenuItem != 'undefined') {
		$('div.fusion-submenu-wrapper li.'+subMenuItem).addClass('active');
	}

  // $('.vkhod-v-kabinet').on('click', function() {
  	// $('.individual-student-show-modal').modal('show');
  	// $('.individual-student-show-modal').show();
  	// br.error('error', 'EEEEEEEEEEEEEEEEEEEEE');
  	// br.log('11');
  // });

	
});
