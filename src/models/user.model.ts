import mongoose from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema = new mongoose.Schema<IUser>({
    firstName : {
        type : String,
        required: true,
        trim: true
    },
    lastName : {
        type : String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true
    },
    password : {
        type: String,
        required : true,
        trim : true
    },
    role : {
        type : String,
        required : true,
        enum : ["admin", "user"],
        default : "user"
    }
})

export const User = mongoose.model("User", userSchema);