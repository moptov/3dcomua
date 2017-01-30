$(document).ready(function() {


  var personId  = br.request.get('rowid');
  var grid = br.dataBrowser('filesOfPerson', { noun: ' ', selectors: { editForm: '#editForm' } });
  if (personId) {
		grid.dataSource.invoke('getPersonName', { id: personId }, function(result, response) {
			if (result) {
				$('span.span-header').html(' КТ для '+response);
			}
		});
	}

  grid.before('select', function(request) {
    if (personId) {
      request.user_id = personId;
    }

  });

  grid.refresh();




});
