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

//------------------EDIT

  $('.action-create').on('click', function() {
    $('h4.modal-title').text('Добавление');
  });   

  $('.data-table').on('click', '.action-edit', function() {
    $('h4.modal-title').text('Редактирование');
  });   
	
});
