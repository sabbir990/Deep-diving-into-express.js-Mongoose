import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const userRouter = express.Router();

userRouter.get("/", async(req : Request, res : Response) => {
    const result = await User.find();

    res.json({
        success : true,
        message: "Fetching all the data is successful!",
        users : result
    });
});

userRouter.post("/save-user", async(req : Request, res : Response) => {
    const newUser = req.body;

    try{
        const result = await User.insertOne(newUser);

        res.json({
            success : true,
            message : "User is successfully saved!",
            user_info : result
        })
    }catch(error){
        console.log(error)
    }
})