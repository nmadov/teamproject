$(document).ready(function(){



$.ajax({
	    url: 'http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json&api-key=bea85d618afa5b5103225dd54fecd937:0:69746075',
	    success: function(data) {
	    var arr = createUniArray(data)
	      putOnPage(abcArr);
	      runSearch();
	    }
	});
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
