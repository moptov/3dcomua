CKEDITOR.plugins.add( 'image_uploader', {

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		if (window.qq && window.br) {

			editor.ui.addButton( 'ImageUploader', {
				label: 'Upload Image',
				command: 'ImageUploader'
				// icon: this.path + 'icons/image_uploader.png'
			});

			editor.on('contentDom', function (e) {

	      var btn = $('#' + this.id + '_toolbox a.cke_button__imageuploader');
	      btn.attr('onclick', '');
	      btn.html('');
	      btn.css('text-decoration', 'none');

				if (window.qq && btn.length > 0) {
					var params = this.config.imageUploader_params || { mode: 'generic' };
				  new qq.FileUploader({
			      element: btn[0]
		      , action: br.baseUrl + 'upload-image.php'
		      , params: params
		      , allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
          , template: '<div class="qq-uploader">' +
                      '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' +
                      '<div class="qq-upload-button" style="padding-left: 2px;padding-right: 2px;padding-top: 2px;padding-bottom: 2px;">Upload image' +
                      '<span class="qq-upload-spinner" style="display:none;"></span>' +
                      '</div>' +
                      '<ul class="qq-upload-list" style="display: none;"></ul>' +
                      '</div>'
		      , onError: function(id, fileName, message) {
		          br.growlError('Error while uploading ' + fileName + ': ' + (message ? message : 'unknown error'));
		        }
		      , onProgress: function(id, fileName, loaded, total) {
		      		br.startProgress('Uploading image...');
		          $('.ajax-in-progress').removeClass('invisible');
		        }
		      , onComplete: function(id, fileName, responseJSON) {
		      		br.hideProgress();
		          $('.ajax-in-progress').addClass('invisible');
		          if (responseJSON) {
		            if (responseJSON.success) {
		              editor.insertHtml('<img src="' + responseJSON.href + '" border="0" />');
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
