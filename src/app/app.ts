import express, {Request, Response} from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json())

const noteSchema = new mongoose.Schema({
    title : String,
    content : String
})

const Note = mongoose.model("Note", noteSchema);

app.get("/", async (req : Request, res : Response) => {
    res.send("Welcome to Note app")
})

app.post("/post-note", async(req : Request, res : Response) => {
    const {title, content} = req.body;

    const note = new Note({
        title, content
    })

    note.save();

    res.json({
        success : true,
        message : "Saving your note is successful!",
        note : {
            title,
            content
        }
    })
})

export default app;