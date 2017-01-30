$(document).ready(function() {

  var captcha = br.dataSource(br.baseUrl + 'api/captcha/');
  function getCaptcha() {
    captcha.invoke( 'getCaptcha'
                , {}
                , function(result, response) {
                    if (result) {
                      $("img#captcha-reg").attr('data-image',response.id);
                      $("img#captcha-reg").attr('src','images/captcha/'+response.image+'.gif');
                    }
                  }
                );
  }

  var filter_cityDataSource = br.dataSource(br.baseUrl + 'api/city/');
  filter_cityDataSource.on('error', function(operation, error) {br.growlError(error);});
  var filter_cityCombo = br.dataCombo('select.form-control[name=city_id]', filter_cityDataSource, {fields: ['id', 'name'], hideEmptyValue: true, saveSelection: true});

  var filter_contactDataSource = br.dataSource(br.baseUrl + 'api/contact/');
  filter_contactDataSource.on('error', function(operation, error) {br.growlError(error);});
  var filter_contactCombo = br.dataCombo('select.form-control[name=contact_id]', filter_contactDataSource, {fields: ['id', 'adress'], hideEmptyValue: true, nameField: 'adress', saveSelection: true});

  filter_contactDataSource.before('select', function(request) {
    if (filter_cityCombo.val()) {
      request.city_id = filter_cityCombo.val();
    }
  });

  filter_cityCombo.on('load', function() { filter_contactCombo.reload(); });
  filter_cityCombo.on('change', function() { filter_contactCombo.reload(); });
  filter_cityCombo.reload();

  $('#captcha-reg-reload').click(function(e) {
    getCaptcha();
  });




  $('#zap-submit').on('click', function(event){
    event.preventDefault();
    $('.zap-error').hide();
    $('input.zap-field').removeClass('input-error');

    if ($('input.zap-field[name=fio]').val()) {
          if ($('input.zap-field[name=phone]').val()) {
                if ($('input.zap-field[name=captcha_code]').val()) {
                  $('.zap-error').hide();

                  var data = {};

                  $('form#zap-form').find('input.zap-field,select.zap-field,textarea.zap-field').each(function() {
                    data[$(this).attr('name')] = $(this).val();
                  });

                  data['captcha_img'] = $("img#captcha-reg").attr('data-image');

                  var zapDS = br.dataSource(br.baseUrl + 'api/zap/');

                  zapDS.invoke( 'zap'
                              , data
                              , function(result, response) {
                                  if ((result)&&(response.success)) {
                                    $('input.zap-field[name=fio]').val('');
                                    $('input.zap-field[name=phone]').val('');
                                    $('input.zap-field[name=captcha_code]').val('');
                                    $('textarea.zap-field[name=info]').val('');
                                    getCaptcha();
                                    br.inform('Информация', 'Ваша заявка успешно отправлена. С вами свяжутся в ближайшее время.');
                                  } else {
                                    if (response.error_field) {
                                      $('div.zap-error-'+response.error_field).find('span.zap-error-message').html(response.error);
                                      $('.zap-error-'+response.error_field).show();
                                      $('input.zap-field[name='+response.error_field+']').addClass('input-error');
                                    } else {
                                      br.error('Ошибка', response.error);
                                    }
                                  }
                                }
                              );
                } else {
                  $('div.zap-error-captcha').find('span.zap-error-message').html('Код должен быть заполнен');
                  $('.zap-error-captcha').show();
                  $('input.zap-field[name=captcha]').addClass('input-error');
                }
          } else {
            $('div.zap-error-phone').find('span.zap-error-message').html('Телефон должен быть заполнен');
            $('.zap-error-phone').show();
            $('input.zap-field[name=phone]').addClass('input-error');
          }
    } else {
      $('div.zap-error-fio').find('span.zap-error-message').html('Фамилия и Имя должно быть заполнено');
      $('.zap-error-fio').show();
      $('input.zap-field[name=fio]').addClass('input-error');
    }


  });

  $('input.zap-field').val('');
  $('textarea.zap-field[name=info]').val('');

  $('.zap-error').hide();
  $('input.zap-field').removeClass('input-error');


  getCaptcha();

	
});
