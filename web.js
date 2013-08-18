var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var message = buf.toString(fs.readFileSync('index.html'));

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
