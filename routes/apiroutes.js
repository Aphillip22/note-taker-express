const router = require("express").Router();
const { json } = require("express");
const fs=require("fs");
let database=require("../db/db.json");

//GET route
router.get("/notes", function(req,res){
    database=JSON.parse(fs.readFileSync("./db/db.json","utf8"))
    res.json(database)
});

//POST route
router.post("/notes", function(req,res){
    let newNote={
        title: req.body.title,
        text: req.body.text,
        //store with id
        id: Math.floor(Math.random()*1000)
    }
    //push new note to db using fs
    database.push(newNote)
    fs.writeFileSync("./db/db.json",JSON.stringify(database))
    res.json(database)
});


module.exports=router