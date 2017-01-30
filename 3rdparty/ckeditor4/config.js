/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.contentsCss = br.baseUrl+'css/modern-business.css';
	config.allowedContent = true
	config.extraPlugins = 'uploadimage,stylesheetparser';
	config.filebrowserUploadUrl = br.baseUrl + 'upload-image';
    config.tabSpaces = 4;

   config.scayt_autoStartup = false;
   config.disableNativeSpellChecker = false;
   config.removePlugins = 'scayt,contextmenu';

  config.specialChars = [ "∀","∂","∃","∅","∇","∈","∉","∋","∏","∑","√","∝","∞","∠","∧","∨","∩","∪","∫","∴","∼","≅","≈","≠","≡","≤","≥","⊂","⊃","⊄","⊆","⊇","⊕","⊗","⊥","⅛","¼","⅓","½","⅔","¾","⅜","⅝","⅞","‰","°⋅","∆","Ω","∏","∫","µ","!","&quot;","#","$","%","&amp;","\\'","(",")","*","+","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","&lt;","=","&gt;","&euro;","&lsquo;","&rsquo;","&rsquo;","&ldquo;","&rdquo;","&ndash;","&mdash;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","&reg;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&times;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&divide;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&uuml;","&yacute;","&thorn;","&yuml;","&OElig;","&oelig;","&#372;","&#374","&#373","&#375;","&sbquo;","&#8219;","&bdquo;","&hellip;","&trade;","&#9658;","&bull;","&rarr;","&rArr;","&hArr;","&diams;","&asymp;" ];
  config.scayt_autoStartup = true;
  config.scayt_handleCheckDirty = false;
  config.minimumChangeMilliseconds = 1000;
  config.enterMode = CKEDITOR.ENTER_BR;
  config.toolbar    = [ { name: 'styles', items : [ 'Format','Font','FontSize' ] }
                             , { name: 'basicstyles', items :  [ 'Bold','Italic','Underline' ]}
                             , { name: 'basicstyles2', items :  [ 'Strike','Subscript','Superscript' ]}
                             , { name: 'basicstyles3', items :  [ 'Blockquote' ]}
                             , { name: 'basicstyles4', items :  [ 'TextColor','BGColor' ]}
                             , { name: 'wiris', items : [ 'SpecialChar', 'ckeditor_wiris_formulaEditor' ]}
                             , { name: 'extraStyles', items : [ 'RemoveFormat' ] }
                             , { name: 'extraStyles2', items : [ 'NumberedList','BulletedList' ] }
                             , { name: 'extraStyles3', items : [ 'Outdent','Indent' ] }
                             , { name: 'extraStyles4', items : [ 'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] }
                             , { name: 'links', items : [ 'Link','Unlink' ] }
                             , { name: 'links2', items : [ 'Image' ] }
                             , { name: 'links3', items : [ 'Table','HorizontalRule' ] }
                             , { name: 'document', items : [ 'Undo','Redo' ] }
                             , { name: 'document3', items : [ 'Maximize' ] }
                             , { name: 'document4', items : [ 'Source' ] }
                             ];

  // config.imageUploader_params = { mode: 'inline/generic/' };


	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
};
