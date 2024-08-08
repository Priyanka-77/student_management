require("dotenv").config();

var http = require("http");
var app = require("./app");

var server = http.createServer(app);
server.listen(8081);
console.log(`Node.js server at port ${8081} is running...`);
