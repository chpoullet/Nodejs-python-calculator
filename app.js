var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let {PythonShell} = require('python-shell');

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
	var options = {
	  scriptPath: 'python/scripts',
	  args: [numberOne, numberTwo, userOperator], // pass arguments to the script here
	};
	PythonShell.run('calc.py', options, function (err, result) {
		if (err) throw err;
		console.log('The result is ' + result)
		res.render('result', {result: result})
		//res.render('calculator', {result: result})
	})
});

app.listen(3000, function() {
  console.log('App listening on port 3000!');
});
