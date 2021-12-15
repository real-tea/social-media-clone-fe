import React from 'react';
import "./share.css";
import { PermMedia , Label , Room , EmojiEmotions} from "@material-ui/icons";

const Share = () => {
    return (
        <div className = " share ">
            <div className = "shareWrapper">
                <div className = "shareTop">
                    <img className = "shareProfileImg" src = " assets/person/1.jpg " alt = " "/>
                    <input 
                        placeholder = " What's on your Mind Akashh "
                        className = " shareInput "
                    />
                </div>
                <hr className = "shareHr"/>
                <div className = "shareBottom">
                    <div className = "shareOptions">
                        <div className = "shareOption">
                            <PermMedia htmlColor = "#F0A500" className = "shareIcon"/>
                            <span className = "shareOptionText"> Photo or Video </span>
                        </div>
                        <div  className = "shareOption">
                            <Label htmlColor = "#F0A500" className = "shareIcon"/>
                            <span className = "shareOptionText"> Tag </span>
                        </div>
                        <div className = "shareOption">
                            <Room htmlColor = "#F0A500" className = "shareIcon"/>
                            <span className = "shareOptionText"> Location </span>
                        </div>
                        <div className = "shareOption">
                            <EmojiEmotions htmlColor = "#F0A500" className = "shareIcon"/>
                            <span className = "shareOptionText"> React </span>
                        </div>
                        <button className = "shareButton">Share</button>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Share;
