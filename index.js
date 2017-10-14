var express = require ('express');

var app = express();
app.set('view engine','ejs');
app.set('views', './views');
app.use(express.static('public'));

app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));


/*
app.listen(3000,function()
{
  console.log('server started');
});

app.get('/', function(req,res)
{
  res.render('home');
});


var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));
app.listen(3000, () => console.log('Server started'))
app.get('/', (req, res) => res.render('home'));
*/
