var express = require("express");
var app = express();
var cors = require("cors");


// Import routes
let routes = require("./routes/routes");

app.use(cors());
// Use Api routes in the App
app.use('/api', routes);

app.listen(3100, () => {
    console.log("Server running on port 3100");
});

app.get("/", (req, res) => {
  res.send("OpenHDS Data Generation Testing Server")
});

module.exports = app;