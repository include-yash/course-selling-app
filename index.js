import express from "express";

const app = express();

app.get('/', function(req, res){
    res.json({
        message : "Course Backend"
    })
})


app.listen(3000, function(){
    console.log("Server started at port 3000");
})