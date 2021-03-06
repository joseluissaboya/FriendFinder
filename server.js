// Dependencies
// ===========================================================
var express = require("express");
var path = require("path");
// var fs = require("fs");

// Express configuration
// ===========================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
// app.use('/static', express.static(path.join(__dirname + 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public'));
// app.get("/index.html", (req, res) => {
// 	fs.readFile(path.join(__dirname, "app/public/html/index.html"), (err, data) => { // means you are mapping /index.html to ./public/index.html
//     if (err) throw err;
//     res.send(data);
//   });
// });

// Route Files
// ===========================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log("Listening on http://localhost:" + PORT);
});