var express = require("express");
var app = express();


// Import routes
let routes = require("./routes/routes");

// Use Api routes in the App
app.use('/api', routes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.send("OpenHDS Data Generation Testing Server")
});

