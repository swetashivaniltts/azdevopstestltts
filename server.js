var express = require('express');
var app = express();
var PORT = process.env.port || 7980;

var fruits = [{
    name: "Mango",
    color: "Yellow"
}, {
    name: "Orange",
    color: "Orange"
}, {
    name: "Watermelon",
    color: "Green"
}];

app.get('/color', function (req, res) {
    console.log('[INFO] - Request received for specific fruit');
    var colorName = req.param('color');
    console.log("color name: ", colorName);
    res.end();
});

app.get('/fruits', function (req, res) {
    console.log('[INFO] - Request received for listing fruits');
    res.json(fruits);
    res.end();
});



app.listen(PORT, () => {
    console.log('[INFO] -- Server started and listening on: ', PORT);
});
