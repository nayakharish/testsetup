var express = require('express')
var serveIndex = require('serve-index')
var app = express()


app.use(express.static('public'));
app.use('/pics', serveIndex('public/pics', {'icons': true}))
app.get('/', function (req, res) {
  res.send('Save the date 23rd feb')
})


app.listen(80, function () {
  console.log('Express app listening on port 80')
})