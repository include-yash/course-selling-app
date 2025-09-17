import mongoose from "mongoose";
import { Schema, ObjectId } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL)

const UserSchema = new Schema({
    email : String,
    password : String,
    name : String
})

const CourseSchema = new Schema({
    title : String,
    description : String,
    price : Number,
    imageLink : String,
    createdId : ObjectId
})

const AdminSchema = new Schema({
    email : String,
    password : String,
    name : String
})

const PurchaseSchema = new Schema({
    courseId : ObjectId,
    userId : ObjectId,
    timestamp : {type : Date, default : Date.now()}
})

const UserModel = mongoose.model("users", UserSchema);
const CourseModel = mongoose.model("courses", CourseSchema);
const AdminModel = mongoose.model("admins", AdminSchema);
const PurchaseModel = mongoose.model("purchases", PurchaseSchema);

export  {UserModel, CourseModel, AdminModel, PurchaseModel};