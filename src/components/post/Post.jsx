import React from 'react';
import "./post.css";
import { MoreVert , ArrowUpward } from "@material-ui/icons";
import { Users } from "../../tempData";


const Post = ({post}) => {
    return (
        <div className = "post">
            <div className = "postWrapper"> 
            <div className = "postTop"> 
                <div className = "postTopLeft">
                    <img className = "postProfileImg" src = {Users.filter((u)=>(u.id===post?.userId))[0].profilePicture} alt= ""/>
                    <span className = "postUsername">
                        {Users.filter((u)=>(u.id ===post?.userId))[0].username}
                    </span>
                    <span className = "postDate">{post.date}</span>
                </div>
                <div className = "postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className = "postCenter"> 
                <span className = "postText"> {post.desc}</span>  
                <img className = "postImg" src = {post.photo} alt = " "/> 
            </div>
            <div className = "postBottom">
                <div className = "postBottomLeft">
                    <img className = "upvoteIcon" src = "/assets/upvote.jpg" alt = ""/>
                    {/* <ArrowUpward color = "orange"/> */}
                    <span className = "postUpvoteCounter">{post.upvote}</span>
                </div>
                <div className = "postBottomRight">
                    <span className = "postComments">{post.comment} comments</span>
                </div>
            </div>

            </div>
            
        </div>
    )
}

export default Post;
