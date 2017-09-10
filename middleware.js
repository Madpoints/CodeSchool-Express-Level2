var express = require('express');
var app = express();

// .use will serve files from folder without using dirname etc.
// defaults to serve index.html
app.use(express.static('public'));

app.get('/cities', function(request, response) {
    var cities = ['Providence', 'Boston', 'New York', 'Silicon City'];
    response.json(cities);
});

app.listen(process.env.PORT, function() {
    console.log(process.env.PORT);
});