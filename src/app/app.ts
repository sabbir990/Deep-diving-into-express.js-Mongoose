import express, {Request, Response} from "express";
import { notesRouter } from "../controllers/info.controller";
import { userRouter } from "../controllers/user.controller";


const app = express();
app.use(express.json())

app.use("/notes", notesRouter);
app.use("/user", userRouter);

app.get("/", async (req : Request, res : Response) => {
    res.send("Welcome to advanced Note app!")
})

export default app;