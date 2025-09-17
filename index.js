import express from "express";
import userRouter from "./routes/user.js";
import courseRouter from "./routes/course.js";
import { UserModel, CourseModel, AdminModel, PurchaseModel } from "./db.js";
const app = express();

app.get('/', function(req, res){
    res.json({
        message : "Course Backend"
    })
})

app.use('/user', userRouter);
app.use('/course', courseRouter);


app.listen(3000, function(){
    console.log("Server started at port 3000");
})