const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

// middleware funtion example
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};

// Initialize Middleware
// Example
app.use(logger);
// Body Parser
app.use(express.json());
// Handler for URL encoded data
app.use(express.urlencoded({ extended: false }));
// Handlebars Middleware
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
