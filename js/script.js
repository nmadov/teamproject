$(document).ready(function(){



$.ajax({
	    url: 'http://api.nytimes.com/svc/books/v3/lists/names?api-key=b1afdfe3bd9d8e3e8c1f3f489838a282:18:65509848',
	    success: doThingWithData
});

function doThingWithData(data) {
	
	var results = data.results;
	for(var i=0; i<results.length; i++){
		var list = results[i];
		var name = list.list_name;
		$('<h1>').text(name).appendTo(document.body);
	}
}

function putOnPage(data){

		//define underscore template
		var listItemTemplate = _.template("<li><a target='_blank' href='<%= url %>'><h3><%= name %> &raquo;</h3></a></li>");

		_.each(arr,function(uni,index){
			//pass object to list item template
			var listItem = listItemTemplate(uni);

			//append to page
			$('#books').append(listItem);
		});

	}
});
