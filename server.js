var http = require('http'),
    express = require('express'),
    path = require('path'),
    port = process.env.PORT || 3000;

var app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'index.html'));
})

var server = http.createServer(app);

server.listen(port);
console.log('Server running at http://127.0.0.1:' + port + '/');