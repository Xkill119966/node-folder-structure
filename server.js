// const express = require("express");
// const config = require("./src/config/index");
// async function startServer() {
//   const app = express();

//   await require("./src/loaders")({ expressApp: app });

//   app.listen(config.PORT || process.env.PORT, err => {
//     if (err) {
//       console.log("Err");
//     }
//     console.log(`
//      ################################################
//       🛡️  Server listening on port: ${config.PORT} 🛡️
//       ################################################
//     `);
//   });
// }

// startServer();

var express = require("express");
var bodyParser = require("body-parser");
// var mongodb = require("mongodb");
// var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";

var app = express();
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test", function (err, client) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

// Save database object from the callback for reuse.
// db = client.db();
console.log("Database connection ready");

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});
// });

app.get("/", (req, res) => {
  res.status(200).send()
})