$(document).ready(function() {

  var grid = br.dataBrowser('persons', { noun: '', selectors: { editForm: '#editForm' } });

  var typeDataSource = br.dataSource(br.baseUrl + 'api/type/');
  typeDataSource.on('error', function(operation, error) { br.growlError(error);});
  var typeCombo   = br.dataCombo('select.data-filter[name=type_id]', typeDataSource, {fields: ['id', 'name'], saveSelection: true });
  var typeFieldDataSource = br.dataSource(br.baseUrl + 'api/type/');
  typeFieldDataSource.on('error', function(operation, error) { br.growlError(error);});
  var typeFieldCombo   = br.dataCombo('select.data-field[name=type_id]', typeFieldDataSource, {fields: ['id', 'name'], hideEmptyValue: true, saveSelection: true });

  var cityDataSource = br.dataSource(br.baseUrl + 'api/city/');
  cityDataSource.on('error', function(operation, error) { br.growlError(error);});
  var cityCombo   = br.dataCombo('select.data-filter[name=city_id]', cityDataSource, {fields: ['id', 'name'], saveSelection: true });
  var cityFieldDataSource = br.dataSource(br.baseUrl + 'api/city/');
  cityFieldDataSource.on('error', function(operation, error) { br.growlError(error);});
  var cityFieldCombo   = br.dataCombo('select.data-field[name=city_id]', cityFieldDataSource, {fields: ['id', 'name'], hideEmptyValue: true, saveSelection: true });

  var filterTypeCombo = br.dataCombo('select.data-filter[name=type_person]', null, { saveSelection: true });
  var filterScopeCombo = br.dataCombo('select.data-filter[name=scope]', null, { saveSelection: true });

  var contactDataSource = br.dataSource(br.baseUrl + 'api/contact/');
  contactDataSource.on('error', function(operation, error) {br.growlError(error);});
  var contactFieldCombo = br.dataCombo('select.data-field[name=contact_id]', contactDataSource, {fields: ['id', 'adress'], hideEmptyValue: true, nameField: 'adress', saveSelection: true});

  contactDataSource.before('select', function(request) {
    if (cityFieldCombo.val()) {
      request.city_id = cityFieldCombo.val();
    }
  });

  var filterClinicCombo = br.dataCombo('select.data-field[name=is_clinic]', null, { saveSelection: true });

  grid.before('select', function(request) {
    if (cityCombo.val()) {
      request.city_id = cityCombo.val();
    }
    if (typeCombo.val()) {
      request.type_id = typeCombo.val();
    }
    if (filterScopeCombo.val()) {
      request.scope = filterScopeCombo.val();
    }
    if (filterTypeCombo.val()) {
      request.type_person = filterTypeCombo.val();
    }

  });

  cityCombo.on('load', function() { typeCombo.reload(); });
  typeCombo.on('load', function() { grid.refresh(); });
  
  cityCombo.on('change', function() { grid.refresh(); });
  typeCombo.on('change', function() { grid.refresh(); });

  filterTypeCombo.on('change', function() { grid.refresh(); });
  filterScopeCombo.on('change', function() { grid.refresh(); });

  cityCombo.reload();




  cityFieldCombo.on('load', function() { contactFieldCombo.reload(); });
  contactFieldCombo.on('load', function() { typeFieldCombo.reload(function() {
      hideContact();
    }); 
  });

  cityFieldCombo.on('change', function() { contactFieldCombo.reload(); });
  typeFieldCombo.on('change', function() { 
    hideContact();
  });

  cityFieldCombo.reload();

  function hideContact() {
    if (typeFieldCombo.val() == 2) {
      $('div.adres-centra').show();
    } else {
      $('div.adres-centra').hide();
    }

  }
  


  $(document).on('click', '.action-switch-option', function() {
    var rowid = $(this).closest('[data-rowid]').attr('data-rowid');
    var data = {};
    data[$(this).attr('data-field')] = ($(this).attr('checked') ? 1 : 0);
    grid.dataSource.update( rowid, data );
  });

  filterClinicCombo.on('change', function() { grid.refresh(); 
    if (filterClinicCombo.val() == 1) {
      $('span.firstname_name').text('Название Клиники');
      $('div.fam').hide();
      $('input.data-field[name=lastname]').removeClass('required');
      $('div.imia').removeClass('span6');
      $('div.imia').removeClass('col-md-6');
      $('div.imia').addClass('span12');
      $('div.imia').addClass('col-md-12');
    } else {
      $('span.firstname_name').text('Имя');
      $('div.fam').show();
      $('input.data-field[name=lastname]').addClass('required');
      $('div.imia').removeClass('span12');
      $('div.imia').removeClass('col-md-12');
      $('div.imia').addClass('span6');
      $('div.imia').addClass('col-md-6');
    }

  });

  grid.on('editor.show', function(data) {
    if (data) {
      $('input.data-field[name=pass]').removeClass('required');
      $('input.data-field[name=pass2]').removeClass('required');
      $('label.user-type').text("Тип : "+data.type);
      if (data.is_clinic == 1) {
        $('span.firstname_name').text('Название Клиники');
        $('div.fam').hide();
        $('input.data-field[name=lastname]').removeClass('required');
        $('div.imia').removeClass('span6');
        $('div.imia').removeClass('col-md-6');
        $('div.imia').addClass('span12');
        $('div.imia').addClass('col-md-12');
      } else {
        $('span.firstname_name').text('Имя');
        $('div.fam').show();
        $('input.data-field[name=lastname]').addClass('required');
        $('div.imia').removeClass('span12');
        $('div.imia').removeClass('col-md-12');
        $('div.imia').addClass('span6');
        $('div.imia').addClass('col-md-6');
      }
    } else {
      $('label.user-type').text("Тип : Пользователь");
      $('input.data-field[name=status]').attr('checked','checked');
      $('input.data-field[name=pass]').addClass('required');
      $('input.data-field[name=pass2]').addClass('required');
      if (filterClinicCombo.val() == 1) {
        $('span.firstname_name').text('Название Клиники');
        $('div.fam').hide();
        $('input.data-field[name=lastname]').removeClass('required');
        $('div.imia').removeClass('span6');
        $('div.imia').removeClass('col-md-6');
        $('div.imia').addClass('span12');
        $('div.imia').addClass('col-md-12');
      } else {
        $('span.firstname_name').text('Имя');
        $('div.fam').show();
        $('input.data-field[name=lastname]').addClass('required');
        $('div.imia').removeClass('span12');
        $('div.imia').removeClass('col-md-12');
        $('div.imia').addClass('span6');
        $('div.imia').addClass('col-md-6');
      }
    }

  });

});
