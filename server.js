var express = require('express');
var cors = require('cors');
var app = express();
var request = require('request');

app.use(cors());

app.get('/data', function(req, res){		
	var options = {
	    url: 'https://www.producthunt.com/v1/posts',
	    headers: {
	        'Authorization': 'Bearer 724532563a01c8afe48be718006d2c1e24b9ab4f29d6747b460ec22b110ce34b',
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'	        
	    }      
	};

	function callback(error, response, body) {				
			    
        var info = JSON.parse(body);        
        res.send(info, 200);
	   
	}
	request(options, callback);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});