$(document).ready(function() {

  var grid = br.dataBrowser('contact', { noun: '', selectors: { editForm: '#editForm' } });

  var cityDataSource = br.dataSource(br.baseUrl + 'api/city/');
  cityDataSource.on('error', function(operation, error) { br.growlError(error);});
  var cityCombo   = br.dataCombo('select.data-filter[name=city_id]', cityDataSource, {fields: ['id', 'name'], saveSelection: true });
  var cityFieldCombo   = br.dataCombo('select.data-field[name=city_id]', cityDataSource, {fields: ['id', 'name'], hideEmptyValue: true, saveSelection: true });


  grid.before('select', function(request) {
    if (cityCombo.val()) {
      request.city_id = cityCombo.val();
    }

  });

  cityCombo.on('load', function() { grid.refresh(); });
  
  cityCombo.on('change', function() { grid.refresh(); });

  cityCombo.reload();

  $(document).on('click', '.action-switch-option', function() {
    var rowid = $(this).closest('[data-rowid]').attr('data-rowid');
    var data = {};
    data[$(this).attr('data-field')] = ($(this).attr('checked') ? 1 : 0);
    grid.dataSource.update( rowid, data );
  });



});
