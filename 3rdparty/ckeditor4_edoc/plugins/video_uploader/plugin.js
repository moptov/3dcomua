CKEDITOR.plugins.add( 'video_uploader', {

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		if (window.qq && window.br) {

			editor.ui.addButton( 'VideoUploader', {
				label: 'Upload Video',
				command: 'VideoUploader'
			});

			editor.on('contentDom', function (e) {

	      var btn = $('#' + this.id + '_toolbox a.cke_button__videouploader');
	      btn.attr('onclick', '');
	      btn.html('');
	      btn.css('text-decoration', 'none');

				if (window.qq && btn.length > 0) {
					var params = this.config.videoUploader_params || { mode: 'generic' };
				  new qq.FileUploader({
			      element: btn[0]
		      , action: br.baseUrl + 'upload-file.php'
		      , params: params
		      , allowedExtensions: ['mp4']
          , template: '<div class="qq-uploader">' +
                      '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' +
                      '<div class="qq-upload-button" style="padding-left: 2px;padding-right: 2px;padding-top: 2px;padding-bottom: 2px;">Upload video' +
                      '<span class="qq-upload-spinner" style="display:none;"></span>' +
                      '</div>' +
                      '<ul class="qq-upload-list" style="display: none;"></ul>' +
                      '</div>'
		      , onError: function(id, fileName, message) {
		          br.growlError('Error while uploading ' + fileName + ': ' + (message ? message : 'unknown error'));
		        }
		      , onProgress: function(id, fileName, loaded, total) {
		      		br.startProgress(total, 'Uploading video...');
		          $('.ajax-in-progress').removeClass('invisible');
		        }
		      , onComplete: function(id, fileName, responseJSON) {
		      		br.hideProgress();
		          $('.ajax-in-progress').addClass('invisible');
		          if (responseJSON) {
		            if (responseJSON.success) {
		              editor.insertHtml('<video src="' + responseJSON.href + '" width="100%" class="canvas-border"></video><br />');
		            } else
		            if (responseJSON.error) {
		              br.growlError('Error while uploading ' + fileName + ': ' + responseJSON.error);
		            }
		          } else {
		            br.growlError('Error while uploading ' + fileName + ': no response');
		          }
		        }
				  });
				}
			});

		}

	}

});
