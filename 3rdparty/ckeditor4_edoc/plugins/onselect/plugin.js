CKEDITOR.plugins.add( 'onselect', {

  init:  function (editor) {
    var _this = editor;
    var _selection = '';
    var _text = '';
    var interval;

    editor.on( 'instanceReady', function(e) {
      _text = _this.getSnapshot();
      _text = _text.replace(/<[^>]+?>/g, '');
      interval = window.setInterval(function() {
        if (_this.getSelection()) {
          if (_this.getSelection().getType() == CKEDITOR.SELECTION_TEXT) {
            var selection = _this.getSelection().getSelectedText();
            if (selection != _selection) {
              if (selection.length > 0) {
                _this.fire('selected', selection);
              } else {
                _this.fire('deselected');
              }
              _selection = selection;
            }
          }
        }
        var text = _this.getSnapshot();
        if (typeof text == 'string') {
          text = text.replace(/<[^>]+?>/g, '');
          if (text != _text) {
            _this.fire('change', text);
            _text = text;
          }
        }
      }, 100);
    });

  }

});