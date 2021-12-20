import React from 'react'
import './rightbar.css';

const Rightbar = () => {
    return (
        <div className = "rightbar">
            <div className = "rightbarWrapper">
                <div className = "NFTContainer">
                    <img className = "NFTpic" src = "/assets/nft.jfif" alt = ""/>
                    <span className = "NFTText">NFT corner</span>
                </div>
                <span className = "nodtext">NFT of the day  </span>
                <img className className = "NFToftheDay" src = "/assets/NOD.jfif "/>
                <h4 className = "rightbarTitle">Online Friends</h4>
                
            </div>
        </div>
    )
}

export default Rightbar;
