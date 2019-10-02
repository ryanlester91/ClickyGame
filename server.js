const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

const connection = mongoose.connection;

connection.once("open"), () => {
    console.log("MongoDB database connection established successfully.")
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})