/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

	config.contentsCss = br.baseUrl+'css/modern-business.css';
	config.allowedContent = true
	config.extraPlugins = 'uploadimage';
	config.filebrowserUploadUrl = br.baseUrl+'/app/upload.php';
	config.extraPlugins = 'stylesheetparser';
    config.tabSpaces = 4;

	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
