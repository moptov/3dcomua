/* global menuItem */
/* global subMenuItem */

$(document).ready(function() {

//------------------TAB

  $('#my-tabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('#my-tabs a:first').tab('show');

//------------------IMAGE

  $('.pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).attr('data-img'));
    $('.textpreview').text($(this).attr('data-caption'));
    $('#imagemodal').modal('show');   
  });   

//------------------LOGIN

  $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
    $("#register-form").fadeOut(100);
    $("#remember-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#remember-form-link').click(function(e) {
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
    $("#register-form").delay(100).fadeIn(100);
    $("#login-form").fadeOut(100);
    $("#remember-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });




  $('#login-submit').on('click', function(event){
    event.preventDefault();
    var data = {};

    $('form#login-form').find('input.login-field,select.login-field').each(function() {
      data[$(this).attr('name')] = $(this).val();
    });
    br.log(data);

    var users = br.dataSource(br.baseUrl + 'api/users/');

    users.invoke( 'login'
                , data
                , function(result, response) {
                    if (result) {
                      var href = br.baseUrl + 'kabinet';
                      document.location = href;                      
                    } else {
                      $('span.main-error-message').html('Неверный адрес эл.почты или пароль')
                      $('.main-error').show();
                    }
                  }
                );
  });



  $('.action-create').on('click', function() {
    $('h4.modal-title').text('Добавление');
  });   

  $('.data-table').on('click', '.action-edit', function() {
    $('h4.modal-title').text('Редактирование');
  });   

	// $('div.rt-menubar li.'+menuItem).addClass('active');
	// if (typeof subMenuItem != 'undefined') {
	// 	$('div.fusion-submenu-wrapper li.'+subMenuItem).addClass('active');
	// }

  // $('.vkhod-v-kabinet').on('click', function() {
  	// $('.individual-student-show-modal').modal('show');
  	// $('.individual-student-show-modal').show();
  	// br.error('error', 'EEEEEEEEEEEEEEEEEEEEE');
  	// br.log('11');
  // });

	
});
