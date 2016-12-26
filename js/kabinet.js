$(document).ready(function() {

  // var filesDataSource = br.dataSource(br.baseUrl + 'api/filesOfPerson/');
  // filesDataSource.on('error', function(operation, error) {br.growlError(error);});
  // filesDataSource.select();

  var grid = br.dataBrowser('filesOfPerson', { noun: 'ввв', selectors: { editForm: '#editForm' } });
	grid.refresh();

  // filesDataSource.before('select', function(request){
  //   request.id = 1;
  // });

 // filesDataSource.selectOne(1, function(result, response) {
 //  br.log(response);
 // });


});
