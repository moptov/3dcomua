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
  filter_cityCombo.reload();
  var filterTypeCombo = br.dataCombo('select.form-control[name=is_clinic]', null, {  });

  $('#login-form-link').click(function(e) {
    $('input.login-field').val('');
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $("#remember-form").fadeOut(100);
    $("#confirm-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#remember-form-link').click(function(e) {
    $('input.remember-field').val('');
    $("#remember-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    e.preventDefault();
  });
  $('#back-to-login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#remember-form").fadeOut(100);
    $('#login-form-link').addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
    $('input.register-field').val('');
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $("#remember-form").fadeOut(100);
    $("#confirm-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    filterTypeCombo.val(0);
    $('input#firstname').attr('placeholder','Имя');
    getCaptcha();
    e.preventDefault();
  });
  $('#captcha-reg-reload').click(function(e) {
    getCaptcha();
  });



  $('#login-submit').on('click', function(event){
    event.preventDefault();
    var data = {};

    $('form#login-form').find('input.login-field,select.login-field').each(function() {
      data[$(this).attr('name')] = $(this).val();
    });

    var users = br.dataSource(br.baseUrl + 'api/users/');

    users.invoke( 'login'
                , data
                , function(result, response) {
                    if (result) {
                      var href = '';
                      if (response.type_id == 3) {
                        href = br.baseUrl + 'kabinet';
                      } else {
                        href = br.baseUrl + 'users';
                      }
                      document.location = href;                      
                    } else {
                      $('span.main-error-message').html('Неверный адрес электронной почты или пароль')
                      $('.main-error').show();
                    }
                  }
                );
  });

  $('#confirm-submit').on('click', function(event){
    event.preventDefault();
    $('.confirm-error').hide();

      var data = {};

      $('form#confirm-form').find('input.confirm-field').each(function() {
        data[$(this).attr('name')] = $(this).val();
      });

      var users = br.dataSource(br.baseUrl + 'api/users/');

      users.invoke( 'lastStepRemember'
                  , data
                  , function(result, response) {
                      if ((result)&&(response)) {
                        $("#login-form").delay(100).fadeIn(100);
                        $("#confirm-form").fadeOut(100);
                        $('#login-form-link').addClass('active');

                        $('h3.modal-title').text('Регистрация прошла успешно');
                        $('.textpreview').text('Теперь вы можете войти в кабинет под своим email и паролем');
                        $('#textmodal').modal('show');   
                      } else {
                        $('span.confirm-error-message').html('Неверный код безопасности')
                        $('.confirm-error').show();
                      }
                    }
                  );
  });


  $('#remember-submit').on('click', function(event){
    event.preventDefault();

    if (isEmail($('input.remember-field[name=email]').val())) {
      $('.remember-error').hide();

      var data = {};

      $('form#remember-form').find('input.remember-field').each(function() {
        data[$(this).attr('name')] = $(this).val();
      });

      var users = br.dataSource(br.baseUrl + 'api/users/');

      users.invoke( 'remember'
                  , data
                  , function(result, response) {
                      if ((result)&&(response)) {
                        $("#login-form").delay(100).fadeIn(100);
                        $("#remember-form").fadeOut(100);
                        $('#login-form-link').addClass('active');

                        $('h3.modal-title').text('Информация');
                        $('.textpreview').text('На ваш адрес электронной почты выслан новый пароль');
                        $('#textmodal').modal('show');   
                      } else {
                        $('span.remember-error-message').html('Неверный адрес электронной почты')
                        $('.remember-error').show();
                      }
                    }
                  );
    } else {
      $('span.remember-error-message').html('Неверный формат адреса электронной почты')
      $('.remember-error').show();
    }

  });

  $('#register-submit').on('click', function(event){
    event.preventDefault();
    $('.register-error').hide();
    $('input.register-field').removeClass('input-error');

    if ($('input.register-field[name=firstname]').val()) {
      if ((($('input.register-field[name=lastname]').val())&&(filterTypeCombo.val() == 0))||(filterTypeCombo.val() == 1)) {
        if (isEmail($('input.register-field[name=email]').val())) {
          if ($('input.register-field[name=phone]').val()) {
            if (($('input.register-field[name=password]').val())&&($('input.register-field[name=confirm-password]').val())) {
              if ($('input.register-field[name=password]').val() == $('input.register-field[name=confirm-password]').val()) {
                if ($('input.register-field[name=captcha_code]').val()) {

                  var data = {};

                  $('form#register-form').find('input.register-field,select.register-field').each(function() {
                    data[$(this).attr('name')] = $(this).val();
                  });

                  data['captcha_img'] = $("img#captcha-reg").attr('data-image');

                  var users = br.dataSource(br.baseUrl + 'api/users/');

                  users.invoke( 'register'
                              , data
                              , function(result, response) {
                                  if ((result)&&(response.success)) {
                                    $("#confirm-form").delay(100).fadeIn(100);
                                    $('input.confirm-field').val('');
                                    $('input.confirm-field[name=user]').val(response.user);
                                    $("#register-form").fadeOut(100);
                                    $('#register-form-link').removeClass('active');
                                  } else {
                                    if (response.error_field) {
                                      $('div.register-error-'+response.error_field).find('span.register-error-message').html(response.error);
                                      $('.register-error-'+response.error_field).show();
                                      $('input.register-field[name='+response.error_field+']').addClass('input-error');
                                    } else {
                                      br.error('Ошибка', response.error);
                                    }
                                  }
                                }
                              );
                } else {
                  $('div.register-error-captcha').find('span.register-error-message').html('Код должен быть заполнен');
                  $('.register-error-captcha').show();
                  $('input.register-field[name=captcha]').addClass('input-error');
                }
              } else {
                $('div.register-error-password').find('span.register-error-message').html('Пароли не совпадают');
                $('.register-error-password').show();
                $('input.register-field[name=password]').addClass('input-error');
              }
            } else {
              $('div.register-error-password').find('span.register-error-message').html('Оба поля с паролем должны быть заполнены');
              $('.register-error-password').show();
              $('input.register-field[name=password]').addClass('input-error');
            }
          } else {
            $('div.register-error-phone').find('span.register-error-message').html('Телефон должен быть заполнен');
            $('.register-error-phone').show();
            $('input.register-field[name=phone]').addClass('input-error');
          }
        } else {
          $('div.register-error-email').find('span.register-error-message').html('Неверный формат адреса электронной почты');
          $('.register-error-email').show();
          $('input.register-field[name=email]').addClass('input-error');
        }
      } else {
        $('div.register-error-lastname').find('span.register-error-message').html('Фамилия должна быть заполнена');
        $('.register-error-lastname').show();
        $('input.register-field[name=lastname]').addClass('input-error');
      }
    } else {
      $('div.register-error-firstname').find('span.register-error-message').html('Имя должно быть заполнено');
      $('.register-error-firstname').show();
      $('input.register-field[name=firstname]').addClass('input-error');
    }


  });


  br.modified('.form-control[name=is_clinic]', function() {
    if (filterTypeCombo.val() == 1) {
      $('div.lastname-group').hide();
      $('input#firstname').attr('placeholder','Название Клиники')
    } else {
      $('div.lastname-group').show();
      $('input#firstname').attr('placeholder','Имя')
    }
  });


  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

	
});
