import app from "./app";
import {Server} from "http";
import mongoose from 'mongoose'

let server : Server;
const PORT = 5000;

async function main() {
    try{
        await mongoose.connect("mongodb+srv://NEW_user:sFXxmoMtYyr0kj3Z@cluster0.p2btb5w.mongodb.net/advance-note-app?retryWrites=true&w=majority&appName=Cluster0");

        console.log("Connected successful with mongoDB using Mongoose!")

        server = app.listen(PORT, () => {
            console.log(`Your server is running on PORT ${PORT}`);
        })
    }catch(error){
        console.log(error)
    }
}

main()