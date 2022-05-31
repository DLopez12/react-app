var express = require("express")
var app = express()
var path = require("path")

// var app = require("express")()

var port = 3000;

app.listen(port, () => {
    console.log("Listening on port " + port)
})

console.log("where the hoes at?")

// get request

app.get('/hoes', (req, res) => { 
    console.log("got home path")
    res.send("send hoes")
})

app.use(express.static(path.join(__dirname, '../', 'client', 'dist')));