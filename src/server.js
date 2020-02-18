const express = require("express");
const routes = require("./router");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb+srv://medicwall:medicwall@cluster0mw-swhi2.gcp.mongodb.net/medicwall?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());
app.listen(3333);
app.use(routes);
