// Start with an "npm run dev" in the terminal 

var express = require("express");
var path = require("path");
var bodyParse = require("body-parser");

var app = express();
// points server to rout files pass it app, use that instance of express
// require("./routing/apiRoutes.js")(app); 

require("./routing/htmlRoutes.js")(app);
var port = process.env.PORT || 3000; 

// allows browser to get json back 
app.use(bodyParse.json());

app.use(bodyParse.urlencoded({extended: true}))
// method express gives
app.use(express.static("build"));

// Could be in html routes 
app.get("/", function(req, res){
	var index = path.resolve(__dirname, './public', './home.html');
      res.sendFile(index);
});

app.listen(port, function(){
	console.log("app is listening on port " + port);
});


