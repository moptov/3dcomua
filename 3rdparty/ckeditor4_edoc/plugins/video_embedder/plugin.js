CKEDITOR.plugins.add( 'video_embedder', {

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		if (window.qq && window.br) {

			editor.ui.addButton( 'VideoEmbedder', {
				label: 'Insert Video',
				command: 'VideoEmbedder'
			});

			editor.on('contentDom', function (e) {

				var dialog = $('#br_videoEmbedder');
				if (dialog.length === 0) {
				  dialog = $( '<div id="br_videoEmbedder" class="modal" style="display:none;z-index:10000;" data-backdrop="static">' +
									    '  <div class="modal-header">'+
									    '    <a class="close" data-dismiss="modal">×</a>'+
									    '    <h3>Embed video into learning experience</h3>'+
									    '  </div>' +
									    '  <div class="modal-body">' +
									    '    <div class="alert alert-error" style="display:none;">Please enter video embed code</div>' +
									    '      <div class="row-fluid">' +
									    '        <div class="span12">' +
									    '          <div class="control-group">' +
									    '            <label class="control-label"><span class="required">*</span> Please enter video embed code</label>' +
									    '            <div class="controls">' +
									    '              <textarea rows="10" type="text" class="data-field required justified" name="embed_code" data-click-on-enter="#br_videoEmbedder .action-proceed"></textarea>' +
									    '            </div>' +
									    '          </div>' +
									    '        </div>' +
									    '      </div>' +
									    '  </div>' +
									    '  <div class="modal-footer">' +
									    '    <a href="javascript:;" class="btn btn-primary action-proceed">Insert</a>' +
									    '    <a href="javascript:;" class="btn" data-dismiss="modal">Cancel</a>' +
									    '  </div>' +
									    '</div>');
        }

	      var btn = $('#' + this.id + '_toolbox a.cke_button__videoembedder');
	      btn.attr('onclick', '');
	      btn.html('<div>Embed Video</div>');
	      // btn.html('<i class="icon-youtube" style="font-family:FontAwesome;"></i>');
	      btn.css('padding-top', '6px');
	      btn.css('padding-bottom', '2px');
	      btn.css('text-decoration', 'none');
	      // btn.css('font-family', 'FontAwesome');
	      btn.on('click', function() {
    			$('.alert-error', dialog).hide();
	      	$('.action-proceed', dialog).unbind('click');
	      	dialog.modal('show');
	      	$('.action-proceed', dialog).on('click', function() {
	    			$('.alert-error', dialog).hide();
	      		var embedCode = $('.data-field[name=embed_code]', dialog).val();
	      		if (br.isEmpty(embedCode)) {
	      			$('.alert-error', dialog).show();
	      		} else {
							editor.insertHtml(embedCode);
							dialog.modal('hide');
	      		}
	      	});
	      });

			});

		}

	}

});
