//import
const mongoose = require("mongoose");

//route handler
//when there is nesting of model we use the id 
const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,  
    },
    body:{
        type: String,
        required: true,
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],

});

//export
module.exports = mongoose.model("Post", postSchema)