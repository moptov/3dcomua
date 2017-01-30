CKEDITOR.plugins.add( 'file_uploader', {

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		if (window.qq && window.br) {

			editor.ui.addButton( 'FileUploader', {
				label: 'Upload File',
				command: 'FileUploader'
			});

			editor.on('contentDom', function (e) {

	      var btn = $('#' + this.id + '_toolbox a.cke_button__fileuploader');
	      btn.attr('onclick', '');
	      btn.html('');
	      btn.css('text-decoration', 'none');

				if (window.qq && btn.length > 0) {
					var params = this.config.fileUploader_params || { mode: 'generic' };
				  new qq.FileUploader({
			      element: btn[0]
		      , action: br.baseUrl + 'upload-file.php'
		      , params: params
		      // , allowedExtensions: ['mp4']
          , template: '<div class="qq-uploader">' +
                      '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' +
                      '<div class="qq-upload-button" style="padding-left: 2px;padding-right: 2px;padding-top: 2px;padding-bottom: 2px;">Upload file' +
                      '<span class="qq-upload-spinner" style="display:none;"></span>' +
                      '</div>' +
                      '<ul class="qq-upload-list" style="display: none;"></ul>' +
                      '</div>'
		      , onError: function(id, fileName, message) {
		          br.growlError('Error while uploading ' + fileName + ': ' + (message ? message : 'unknown error'));
		        }
		      , onProgress: function(id, fileName, loaded, total) {
		      		br.startProgress(total, 'Uploading ' + fileName + '...');
		          $('.ajax-in-progress').removeClass('invisible');
		        }
		      , onComplete: function(id, fileName, response) {
		      		br.hideProgress();
		          $('.ajax-in-progress').addClass('invisible');
		          if (response) {
		            if (response.success) {
		              editor.insertHtml('<a href="' + response.href + '" target="_blank">' + response.fileName + ' (' + response.fileSizeStr + ')</a><br />');
		            } else
		            if (response.error) {
		              br.growlError('Error while uploading ' + fileName + ': ' + response.error);
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
