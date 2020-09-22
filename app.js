var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PythonShell = require('python-shell');


app.set('view engine', 'pug');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res){
		res.render('index');
});

app.get("/calculator", function (req, res){
    res.render('calculator');
});

app.post("/calculator", function (req, res){
	var numberOne = req.body.firstnumber
	var numberTwo = req.body.secondnumber
	var userOperator = req.body.operator
	console.log(numberOne + numberTwo + userOperator)
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});