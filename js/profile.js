$(document).ready(function() {

  var usersDataSource = br.dataSource(br.baseUrl + 'api/persons/');
  usersDataSource.on('error', function(operation, error) { br.growlError(error);});

  var staffsDataSource = br.dataSource(br.baseUrl + 'api/currentUsers/');
  staffsDataSource.on('error', function(operation, error) { br.growlError(error);});

  var editor = br.dataEditor('#mainContainer', staffsDataSource);//, { noun: 'question', returnUrl: br.baseUrl + 'questions.html'});

  usersDataSource.invoke('getCurrentUser', function(result, response) {
    if (result) {
      editor.show(response.rowid);
    }
  });

});
