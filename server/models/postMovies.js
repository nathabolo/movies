import mongoose from "mongoose";

const postSchema = mongoose.Schema({
title : String,
message: String,
creator: String,
tags: [String],
selectedFile: String,
likeCount: {
    type: Number,
    default: 0
},
dateCreated: {
    type: Date,
    default: new Date()
}
});

const postMovie = mongoose.model('postMovie', postSchema);

export default postMovie;