import React from 'react';
import "./post.css";
import { MoreVert , ArrowUpward } from "@material-ui/icons";

const Post = () => {
    return (
        <div className = "post">
            <div className = "postWrapper"> 
            <div className = "postTop"> 
                <div className = "postTopLeft">
                    <img className = "postProfileImg" src = "/assets/person/1.jpg" alt= ""/>
                    <span className = "postUsername">Akash Singh</span>
                    <span className = "postDate">5 mins ago</span>
                </div>
                <div className = "postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className = "postCenter"> 
                <span className = "postText"> Hey it is my first Post</span>  
                <img className = "postImg" src = "/assets/post/1.jpg " alt = " "/> 
            </div>
            <div className = "postBottom">
                <div className = "postBottomLeft">
                    <img className = "upvoteIcon" src = "/assets/upvote.jpg" alt = ""/>
                    {/* <ArrowUpward color = "orange"/> */}
                    <span className = "postUpvoteCounter">32</span>
                </div>
                <div className = "postBottomRight">
                    <span className = "postComments">9 comments</span>
                </div>
            </div>

            </div>
            
        </div>
    )
}

export default Post;
