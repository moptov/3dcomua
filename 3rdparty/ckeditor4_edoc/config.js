/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
  config.extraPlugins = 'autolink,scayt,ckeditor_wiris,dragresize,image_uploader,video_uploader,file_uploader,oembed,closebtn,tableresize';
  config.toolbar = 'custom';
  config.specialChars = [ "∀","∂","∃","∅","∇","∈","∉","∋","∏","∑","√","∝","∞","∠","∧","∨","∩","∪","∫","∴","∼","≅","≈","≠","≡","≤","≥","⊂","⊃","⊄","⊆","⊇","⊕","⊗","⊥","⅛","¼","⅓","½","⅔","¾","⅜","⅝","⅞","‰","°⋅","∆","Ω","∏","∫","µ","!","&quot;","#","$","%","&amp;","\\'","(",")","*","+","-",".","/","0","1","2","3","4","5","6","7","8","9",":",";","&lt;","=","&gt;","&euro;","&lsquo;","&rsquo;","&rsquo;","&ldquo;","&rdquo;","&ndash;","&mdash;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","&reg;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&times;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&divide;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&uuml;","&yacute;","&thorn;","&yuml;","&OElig;","&oelig;","&#372;","&#374","&#373","&#375;","&sbquo;","&#8219;","&bdquo;","&hellip;","&trade;","&#9658;","&bull;","&rarr;","&rArr;","&hArr;","&diams;","&asymp;" ];
  config.scayt_autoStartup = true;
  config.scayt_handleCheckDirty = false;
  config.minimumChangeMilliseconds = 1000;
  config.enterMode = CKEDITOR.ENTER_BR;
  config.toolbar_custom    = [ { name: 'styles', items : [ 'Format','Font','FontSize' ] }
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
                             , { name: 'document2', items : [ 'SpellChecker','Scayt' ] }
                             , { name: 'document3', items : [ 'Maximize' ] }
                             , { name: 'document4', items : [ 'Source' ] }
                             , { name: 'eDoctrina', items : [ 'ImageUploader', '-', 'oembed' ] }
                             ];
  config.toolbar_uploaders = [ { name: 'styles', items : [ 'Format','Font','FontSize' ] }
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
                             , { name: 'document2', items : [ 'SpellChecker','Scayt' ] }
                             , { name: 'document3', items : [ 'Maximize' ] }
                             , { name: 'document4', items : [ 'Source' ] }
                             , { name: 'eDoctrina', items : [ 'ImageUploader', 'VideoUploader', 'FileUploader', '-', 'oembed' ] }
                             ];
  config.toolbar_embedded  = [ { name: 'styles', items : [ 'Format','Font','FontSize' ] }
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
                             , { name: 'document2', items : [ 'SpellChecker','Scayt' ] }
                             , { name: 'document3', items : [ 'Maximize' ] }
                             , { name: 'document4', items : [ 'Source' ] }
                             , { name: 'eDoctrina', items : [ 'ImageUploader', '-', 'oembed' ] }
                             , { name: 'close', items : [ 'closebtn' ] }
                             ];
  config.contentsCss = br.baseUrl + 'css/ck-editor-fonts.css';
  config.font_names = CKEDITOR.config.font_names + ';MusiSync;Century Schoolbook;Chinese/GB';
  config.allowedContent = true;
  config.protectedSource.push(/<quote>[\s\S]*?<\/quote>/gi);
  config.tabSpaces = 4;
  config.imageUploader_params = { mode: 'inline/generic/' };
  config.videoUploader_params = { mode: 'inline/generic/' };
  config.fileUploader_params  = { mode: 'inline/generic/' };
};
