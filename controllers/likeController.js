const Post = require("../models/postModel");
const Like = require("../models/likeModel");

exports.createLike = async(req, res)=>{
     try{
       const{post, user} = req.body;

       const like = new Like({
        post,user
       });

       const savedLike = await like.save();

       const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes: savedLike._id}}, {new: true})
       .populate("likes") //actual object or document of comment is fetched
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

exports.createUnlike = async(req, res)=>{
    try{
      const{post, like} = req.body;
      
      //find and delete the like in the collection
      const unlike = await Like.findByIdAndDelete({post: post, _id:like});
      
      //update the post collection
      const updatedPost = await Post.findByIdAndUpdate(post, {$pull: {likes: unlike._id}}, {new: true})

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

