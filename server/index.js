// Imports
const express = require("express");
const cors = require("cors");

// Initialize constants
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
