const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});
app.get("/start",function(req,res){
    res.sendFile(path.join(__dirname+'/views/game.html'));
});
app.listen(process.env.PORT||3000, function() {
    console.log("Server started on port 3000");
})
  