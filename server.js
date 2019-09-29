const express = require("express");


const app = express();
const port = process.env.PORT || 5000;

app.use();
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once("open"), () => {
    console.log("MongoDB database connection established successfully.")
}

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "") {
  app.use(express.static(""));
}

/*app.get("/", , (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});


if(err) {}
res.render("index")
}*/

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});