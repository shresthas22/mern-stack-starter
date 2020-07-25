const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Hello");
});

//DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connected to DB")
);

app.listen(process.env.port || 3000);
console.log("Web Server is listening at port " + (process.env.port || 3000));
