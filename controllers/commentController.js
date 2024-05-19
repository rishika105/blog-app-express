//import model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");


//buisness logic
exports.createComment = async(req, res)=>{

    try{
    //fetch data from req body
    const{post, user, body} = req.body;
    //create a comment object 
    const comment = new Comment({
        post,user,body
    });
    //save the new comment into the databse
    // can also use create func
    const savedComment = await comment.save();

    //find the post by Id, add the new comment to its comments array
    //new true gives the post with the updated comments gives the updated post
    //push insert the comment in the post by using the post id
    const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new: true})
    .populate("comments")//actual object or document of comment is fetched
    .exec();

    res.json({
        post: updatedPost,
    });

}
catch(error){
 return res.status(500).json({
    error: "Error",
 });
 
}
}
