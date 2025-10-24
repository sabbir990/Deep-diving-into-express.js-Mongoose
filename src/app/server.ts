import app from "./app";
import {Server} from "http";
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

let server : Server;
const PORT = 5000;

async function main() {
    try{
        await mongoose.connect(process.env.CONNECTION_STRING!);

        console.log("Connected successful with mongoDB using Mongoose!")

        server = app.listen(PORT, () => {
            console.log(`Your server is running on PORT ${PORT}`);
        })
    }catch(error){
        console.log(error)
    }
}

main()