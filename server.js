var express = require("express");
var path = require("path");

var app = express();

var port = process.env.PORT || 3000; 

// method express gives
app.use(express.static("build"));

app.get("/", function(req, res){
	var index = path.resolve(__dirname, './public', './home.html');
      res.sendFile(index);
});

app.listen(port, function(){
	console.log("app is listening on port " + port);
});

