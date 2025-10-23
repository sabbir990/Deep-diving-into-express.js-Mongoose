import express, { Request, Response } from "express";
import { Note } from "../models/info.model";

export const notesRouter = express.Router();

notesRouter.get("/", async (req: Request, res: Response) => {
    const result = await Note.find();

    res.json({
        success: true,
        message: "Here's all the notes!",
        notes: result
    })
})

notesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await Note.findById(id);

    res.json({
        success: true,
        message: "Single note is here!",
        note: result
    })
})

notesRouter.post("/post-note", async (req: Request, res: Response) => {
    const { title, content, category, pinned } = req.body;

    const note = new Note({
        title, content, category, pinned
    })

    note.save();

    res.json({
        success: true,
        message: "Saving your note is successful!",
        note: {
            title,
            content,
            category,
            pinned
        }
    })
})

notesRouter.patch("/update-note/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const updatedNote = req.body;

    const result = await Note.findByIdAndUpdate(id, updatedNote, { new: true });

    res.json({
        success: true,
        message: "Updating successful!",
        updated_note: result
    })
});

notesRouter.delete("/delete-note/:id", async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await Note.findByIdAndDelete(id);

    res.json({
        success: true,
        message: "Deleting the note is successful!",
        note: result
    })
})