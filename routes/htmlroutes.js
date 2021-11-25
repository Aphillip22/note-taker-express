//require express router and path
const router=require("express").Router();
const path=require("path");

//declare notes directory path
router.get("/notes",function(req,res){
    res.sendFile(path.join(__dirname,"../public/notes.html"))
});
//set index.html as home page
router.get("*",function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
});

module.exports=router