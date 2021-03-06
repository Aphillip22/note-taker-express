//require all routes and packages
const express = require("express");
const app = express();
const htmlroutes = require("./routes/htmlroutes");
const apiroutes = require("./routes/apiroutes");
const path = require("path");

//create a port
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api", apiroutes);
app.use("/", htmlroutes);



// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));