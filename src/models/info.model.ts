import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title : {type : String, required : true, trim : true},
    content : {type : String, required : true, trim : true, default : ""},
    category : {type : String, enum : ["Personal", "Public", "Important", "Secret"], default : "Personal"},
    pinned : {type : Boolean, default : false},
})

export const Note = mongoose.model("Note", noteSchema);