const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

var index = require('./routes/index');
var todos = require('./routes/todos');

var app = express();

//VIEW ENGINE

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/api/v1/', todos);

app.listen(3000, function(){
    console.log('Server listening on port 3000...');
})