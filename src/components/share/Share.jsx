import React from 'react';
import "./share.css";
import { PermMedia } from "@material-ui/icons";

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
                            <PermMedia className = "shareIcons"/>
                            <span className = "shareOptionText"> Photo or Video </span>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Share;
