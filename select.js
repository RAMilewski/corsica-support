	var queryString = window.location.search;
	
	queryString = queryString.substring(1);
	
	var parseQueryString = function( queryString ) {
	    var params = {}, queries, temp, i, l;
	    // Split into key/value pairs
	    queries = queryString.split("&");
	    // Convert the array of strings into an object
	    for ( i = 0, l = queries.length; i < l; i++ ) {
	        temp = queries[i].split('=');
	        params[temp[0]] = temp[1];
	    }
	    return params;
	};
	
	queries = parseQueryString(queryString);
	document.getElementById("imageid").src=queries.image;