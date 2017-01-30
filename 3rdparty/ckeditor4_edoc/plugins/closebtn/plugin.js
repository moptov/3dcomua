CKEDITOR.plugins.add( 'closebtn'
                    , { icons: 'closebtn'
                      , init: function( editor ) {
                          editor.addCommand( 'closetoolbar', {
                            exec: function(editor){
                              $(editor.element.$).blur();
                            }
                          });
                          editor.ui.addButton( 'closebtn', {
                            label: 'Close',
                            command: 'closetoolbar'
                          });
                        }
                    });