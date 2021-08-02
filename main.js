var request = require('request');

var express = require('express');
var app = express();

const port = 3000;


app.get('/',function(req,res)
{
	request(req.query.url, 
	function(error, response, body) {
		if(body.includes("Inclement weather") 
			|| body.includes("inclement weather") 
			|| body.includes("Inclement Weather"))
		{
			res.end("true");
		}
		else
		{
			res.end("false");
		}
	});
});

app.listen(port, function() {
	console.log("Sever running at port " + port);
});
