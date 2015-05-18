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
	 	var listItem = '<li><p><b>' + title +  '' + ' by ' + author + '</b>' + 
	 	'<i>' + description + '</i></p></li>';
	 	$('#auth').append(listItem);

	 	// $('<h1>').text(title).appendTo(document.body);
	 	// $('#auth').text("by " + author).appendTo(document.body);
	 	// $('#auth').append(listItem);
	 }
}

$('#search-box').keyup(function(){
	var search = $(this).val().toLowerCase();
	var $rows = $('#auth li');
	$rows.show();
	_($rows).each(function(row){
		var titles = $(row).find('p').text().toLowerCase();
		if (titles.indexOf(search) == -1){
			$(row).hide();
		}
	})

})




	
});

// http://api.nytimes.com/svc/books/{version}/lists/best-sellers/history[.response_format]?{search-param1=value1}&[...]&[optional-param1=value1]&[...]&api-key={b1afdfe3bd9d8e3e8c1f3f489838a282:18:65509848}