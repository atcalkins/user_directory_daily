const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const DATA = require("./views/data")

//mustache setup
const mustacheExpress = require("mustache-express");
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
// *******//

//mount middleware passed as the second argument at that url
app.use("/public", express.static(path.join(__dirname, "public")));

////render the mustache template in views
app.get("/", function(req, res) {
  res.render("homepage.mustache", DATA);
});


app.listen(3000);
