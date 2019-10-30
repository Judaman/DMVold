var express = require('express');
var app = express();

// This responds with "Hello World" on the homepage
app.get('/home', function(req, res) {
  console.log("Got a GET request for the homepage");
  //   res.send("home page" + req.params.id)
  res.sendFile('index.html', {
    root: __dirname
  })
})

app.get('/sendPatientData/:brand/:style/:item', function(req, res) {

var style = req.params.style;
  var brand = req.params.brand;
  var item = String(req.params.item);


  console.log(style,brand,item);

//sendToWebPt()


});

var server = app.listen(8080, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})
