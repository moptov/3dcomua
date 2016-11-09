$(document).ready(function() {

  var contentDataSource = br.dataSource(br.baseUrl + 'api/mainContent/');
  contentDataSource.on('error', function(operation, error) {br.growlError(error);});

  contentDataSource.before('select', function(request){
    request.id = 1;
  });

 contentDataSource.selectOne(1, function(result, response) {
  br.log(response);
 });


});
