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
	 	$('<h1>').text(title).appendTo(document.body);
	 	$('<h2>').text("by " + author).appendTo(document.body);
	 }
}



	
});

// http://api.nytimes.com/svc/books/{version}/lists/best-sellers/history[.response_format]?{search-param1=value1}&[...]&[optional-param1=value1]&[...]&api-key={b1afdfe3bd9d8e3e8c1f3f489838a282:18:65509848}