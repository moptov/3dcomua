$(document).ready(function() {



  $('textarea.data-field[name=page_content]').ckeditor({height: '300px'});

  var contentPageDataSource = br.dataSource(br.baseUrl + 'api/mainContent/');
  contentPageDataSource.on('error', function(operation, error) { br.growlError(error);});

  var contentDataSource = br.dataSource(br.baseUrl + 'api/mainContent/');
  contentDataSource.on('error', function(operation, error) { br.growlError(error);});
  var contentCombo   = br.dataCombo('select.data-filter[name=page]', contentDataSource, {fields: ['id', 'name'], hideEmptyValue: true });

  contentCombo.reload();

  var currentID = 0;

  contentCombo.on('load', function() {
    if (this.val()) {
      currentID = this.val();
      contentPageDataSource.selectOne(this.val(), function(result, response) {
        if (result) {
          if (response) {
            $('textarea.data-field[name=page_content]').html(response.page);
          }
        }
      });
    }
  });

  contentCombo.on('change', function() {
    if (this.val()) {
      currentID = this.val();
      contentPageDataSource.selectOne(this.val(), function(result, response) {
        if (result) {
          if (response) {
            $('textarea.data-field[name=page_content]').ckeditor({ imageUploader_params: { mode: 'inline/passages/' } }).editor.setData(response.page);
          }
        }
      });
    }
  });

  $('.action-save').on('click', function(event){

    var data = {};
    data['page'] = $('textarea.data-field[name=page_content]').ckeditor().editor.getData();
    contentPageDataSource.update(currentID, data, function(result, response) {
      br.growlMessage('Данные сохранены', 'Success');
    });



    br.log(data);
  });


});
