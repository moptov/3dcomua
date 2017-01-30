$(document).ready(function() {

	var aliasPage = document.location.href.match(/[^\/]+$/)[0];

  br.log(aliasPage);
  
  var contentPageOnDataSource = br.dataSource(br.baseUrl + 'api/mainContent/');
  contentPageOnDataSource.on('error', function(operation, error) { br.growlError(error);});

  contentPageOnDataSource.select({alias: aliasPage}, function(result, response) {
  	if (result) {
  		if (response.length > 0) {
        $('div.content-of-page').html(response[0].page);
  		}
  	}
  });




});
