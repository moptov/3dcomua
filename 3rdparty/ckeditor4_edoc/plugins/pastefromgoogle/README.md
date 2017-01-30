cKeditor plugin to remove the Google Docs formatting that comes with copy & pasting.  Just does a simple regex to remove the bold/strong tags that Google Docs wraps around the text.

To install:

 - Add this folder to the plugins directory
 - Add this to the editor.css of the cKeditor skin that you are using (kama is the default):

.cke_skin_kama a.cke_button_pastefromgoogle .cke_icon {background-image:url(../../plugins/pastefromgoogle/icons/pastefromgoogle.png);background-position: 0;}

 - Include "pastefromgoogle" in the list of extraPlugins in the cKeditor config
 - Include "PasteFromGoogle" in the list  of toolbar options in the cKeditor config.  Might look something like this:

Optionally, set a "keepCustomFormattingFromPaste" setting in your config to True/False to determine whether font and span tags should be kept when pasting.  Default is False to strip out Google's default font styles.




CKEDITOR.replace("id_content",{
    "filebrowserUploadUrl": "/ckeditor/upload/",
    "filebrowserBrowseUrl": "/admin/filebrowser/browse/?pop=3&type=image",
    "height": 450,
    "filebrowserWindowHeight": 747,
    "fillEmptyBlocks": false,
    "skin": "kama",
    "filebrowserUploadPatternName": "ckeditor_upload",
    "keepCustomFormattingFromPaste": False,
    "toolbar": [
        [
            "Source",
            "-",
            "PasteText",
            "PasteFromWord",
            "PasteFromGoogle",
            "RemoveFormat"
        ],
        [
            "Find"
        ],
        [
            "Image",
            "Flash",
            "Table",
            "HorizontalRule",
            "SpecialChar"
        ],
        [
            "Undo",
            "Redo"
        ],
        "/",
        [
            "Styles"
        ],
        [
            "Bold",
            "Italic",
            "Strike",
            "TextColor",
            "Font",
            "FontSize"
        ],
        [
            "NumberedList",
            "BulletedList",
            "-",
            "Outdent",
            "Indent",
            "Blockquote",
            "Aside",
            "Aside Right"
        ],
        [
            "Link",
            "Unlink",
            "Anchor"
        ],
        [
            "Maximize"
        ]
    ],
    "filebrowserWindowWidth": 940,
    "filebrowserUploadParams": "",
    "autoParagraph": false,
    "filebrowserBrowseParams": "?pop=3&type=image",
    "extraPlugins": "aside,font,pastefromgoogle",
    "filebrowserBrowsePatternName": "fb_browse",
    "width": 760
});
