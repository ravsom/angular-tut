var    express = require('express');
var    app = express();
var    appDir = __dirname;
var    path = require('path');

app.use(express.static(path.join(appDir, '/client/')));
app.set('views', path.join(appDir, '/client/pages'));
//app.engine('html', require('consolidate').handlebars);
app.set('view engine', 'html');

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/pages/index.html'));
});

app.get('/names', function (req, res) {
    res.sendFile(path.join(__dirname+'/client/pages/names.html'));
});

app.listen(process.env.PORT, process.env.IP, function () {
   console.log('Server has started on: http://%s:%d', process.env.IP, process.env.PORT);
});