//require all routes and packages
const express = require("express");
const app =express()
const htmlroutes=require("./routing/htmlroutes")
const apiroutes=require("./routing/apiroutes")

//create a port
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use("/api",api-routes)
app.use("/",html-routes)



// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));