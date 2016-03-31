var express = require("express");
var cons = require("consolidate");
var app = express();

app.engine("html", cons.swig);
app.set("view engine", "html");

app.set("views", __dirname + "/views");

app.get("/", function (req, res) {
	res.render('index', {});
});

var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("react-practise app listening at http://%s:%s", host, port);
});

app.use(express.static('public'));