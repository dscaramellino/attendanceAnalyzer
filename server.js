var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views')); //views folder will handle all views

//MAIN ROUTE -- only file being sent directly to client -- the rest are injected with angular
app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html')
});

app.listen(PORT, function() {
  console.log("Listening on ", PORT);
});
