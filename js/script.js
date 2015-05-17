$(document).ready(function(){



$.ajax({
	    url: 'http://api.nytimes.com/svc/books/v2/lists/hardcover-fiction.jsonp?callback=books&api-key=b1afdfe3bd9d8e3e8c1f3f489838a282:18:65509848',
	    dataType: "jsonp",
	    jsonpCallback: "books",
	    success: doThingWithData
});

function doThingWithData(data) {
	
	console.log(books);
	var results = data.results;
	 for(var i=0; i<results.length; i++){
	 	var list = results[i];
	 	var title = list.book_details[0].title;
	 	var author = list.book_details[0].author;
	 	var description = list.book_details[0].description
	 	var listItem = '<div><b><li>' + title +  '</li></b>' + author + '</div>' + 
	 	'<i>' + description + '</i>';
	 	$('#auth').append(listItem);

	 	// $('<h1>').text(title).appendTo(document.body);
	 	// $('#auth').text("by " + author).appendTo(document.body);
	 	// $('#auth').append(listItem);
	 }
}

$('#search-box').keyup(function(){
	var search = $(this).val().toLowerCase();
	var $rows = $('#auth div');
	$rows.show();
	_($rows).each(function(row){
		var title = $(row).find('li').text().toLowerCase();
		if (title.indexOf(search) == -1){
			$(row).hide();
		}
	})

})




	
});

// http://api.nytimes.com/svc/books/{version}/lists/best-sellers/history[.response_format]?{search-param1=value1}&[...]&[optional-param1=value1]&[...]&api-key={b1afdfe3bd9d8e3e8c1f3f489838a282:18:65509848}