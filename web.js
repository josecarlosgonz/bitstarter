var express = require('express');
var app = express();
app.use(express.logger());

var buffer = new Buffer( fs.readFileSunc('index.html', function(err,data){
  if(err)throw err;
  console.log(data) 
}),"utf-8")


app.get('/', function(request, response) {
  response.send('Hello world 2.0!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
